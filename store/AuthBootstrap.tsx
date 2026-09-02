"use client";

import { useEffect } from "react";
import { useLazyMeQuery, useRefreshMutation } from "@/store/features/auth/authApi";
import { useAppDispatch } from "@/store/hooks";
import { clearCredentials, setCredentials, setToken } from "@/store/features/auth/authSlice";

let bootstrapPromise: Promise<void> | null = null;

export function resetAuthBootstrap() {
  bootstrapPromise = null;
}

export function AuthBootstrap({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const [refresh] = useRefreshMutation();
  const [triggerMe] = useLazyMeQuery();

  useEffect(() => {
    if (bootstrapPromise) return;

    bootstrapPromise = (async () => {
      try {
        const tokens = await refresh().unwrap();
        dispatch(setToken(tokens.access_token));
        const user = await triggerMe(undefined, false).unwrap();
        dispatch(setCredentials({ token: tokens.access_token, user }));
      } catch {
        dispatch(clearCredentials());
      }
    })();
  }, [dispatch, refresh, triggerMe]);

  return children;
}
