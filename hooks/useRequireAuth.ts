"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getHomeForRole, type AuthRole } from "@/lib/auth/roles";
import { useAuth } from "@/hooks/useAuth";

export function useRequireAuth(allowedRole: AuthRole) {
  const router = useRouter();
  const { user, role, status } = useAuth();

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated" || !user || !role) {
      router.replace("/");
      return;
    }

    if (role !== allowedRole) {
      router.replace(getHomeForRole(role));
    }
  }, [allowedRole, role, router, status, user]);

  return {
    ready: status === "authenticated" && role === allowedRole,
    user,
  };
}
