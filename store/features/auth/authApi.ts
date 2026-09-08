import { baseApi } from "@/store/baseApi";
import type { AuthUser } from "@/store/features/auth/authSlice";
import type { LoginResponse, TokenResponse } from "@/store/features/auth/authTypes";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      LoginResponse,
      { email: string; password: string; remember_me: boolean }
    >({
      query: (body) => ({ url: "/auth/login", method: "POST", body }),
    }),

    refresh: builder.mutation<TokenResponse, void>({
      query: () => ({ url: "/auth/refresh", method: "POST" }),
    }),

    signup: builder.mutation<
      AuthUser,
      { full_name: string; email: string; password: string; industry: string; job_role: string }
    >({
      query: (body) => ({ url: "/auth/register", method: "POST", body }),
    }),

    verifyEmail: builder.mutation<
      { verified: boolean },
      { email: string; otp: string }
    >({
      query: (body) => ({ url: "/auth/verify-email", method: "POST", body }),
    }),

    resendVerification: builder.mutation<
      { message: string },
      { email: string }
    >({
      query: (body) => ({ url: "/auth/resend-verification", method: "POST", body }),
    }),

    me: builder.query<AuthUser, void>({
      query: () => "/users/me",
      providesTags: ["Me"],
    }),

    logout: builder.mutation<void, void>({
      query: () => ({ url: "/auth/logout", method: "POST" }),
      invalidatesTags: ["Me"],
    }),

    // placeholder body/response — adjust once you paste the real spec
    verifyOtp: builder.mutation<
      { verified: boolean },
      { email: string; code: string; context: "sign-in" | "sign-up" | "forgot-password" }
    >({
      query: (body) => ({ url: "/otp/verify", method: "POST", body }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRefreshMutation,
  useSignupMutation,
  useMeQuery,
  useLazyMeQuery,
  useLogoutMutation,
  useVerifyOtpMutation,
  useVerifyEmailMutation,
  useResendVerificationMutation,
} = authApi;