"use client";

import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useLogoutMutation } from "@/store/features/auth/authApi";
import { clearCredentials } from "@/store/features/auth/authSlice";
import { baseApi } from "@/store/baseApi";
import { resetAuthBootstrap } from "@/store/AuthBootstrap";
import {
  ROLE_LABEL,
  getHomeForRole,
  normalizeRole,
} from "@/lib/auth/roles";

export function useAuth() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, accessToken, status } = useAppSelector((state) => state.auth);
  const role = normalizeRole(user?.role);
  const [logoutMutation, { isLoading: isLoggingOut }] = useLogoutMutation();

  const logout = async () => {
    try {
      await logoutMutation().unwrap();
    } catch {
      // Clear the local session even if the API call fails.
    } finally {
      dispatch(clearCredentials());
      dispatch(baseApi.util.resetApiState());
      resetAuthBootstrap();
      router.replace("/");
    }
  };

  return {
    user,
    role,
    roleLabel: role ? ROLE_LABEL[role] : null,
    accessToken,
    status,
    isAuthenticated: status === "authenticated" && !!user,
    isLoading: status === "loading",
    isLoggingOut,
    displayName: user?.full_name ?? "",
    initials: user?.full_name?.charAt(0)?.toUpperCase() || "U",
    dashboardHref: getHomeForRole(user?.role),
    logout,
  };
}
