import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import type { RootState } from "@/store";
import { setToken, clearCredentials } from "@/store/features/auth/authSlice";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "/api/proxy/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) headers.set("Authorization", `Bearer ${token}`);
    headers.set("ngrok-skip-browser-warning", "true");
    return headers;
  },
});

const mutex = new Mutex();

function requestUrl(args: string | FetchArgs) {
  return typeof args === "string" ? args : args.url;
}

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await rawBaseQuery(args, api, extraOptions);
  const url = requestUrl(args);
  const isRefreshCall = url.includes("/auth/refresh");

  if (result.error?.status === 401 && isRefreshCall) {
    api.dispatch(clearCredentials());
    return result;
  }

  if (result.error?.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await rawBaseQuery(
          { url: "/auth/refresh", method: "POST" },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          const { access_token } = refreshResult.data as { access_token: string };
          api.dispatch(setToken(access_token));
          result = await rawBaseQuery(args, api, extraOptions);
        } else {
          api.dispatch(clearCredentials());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await rawBaseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Me", "BlogPost"],
  endpoints: () => ({}),
});
