"use client";

import type { AuthRole } from "@/lib/auth/roles";
import { useRequireAuth } from "@/hooks/useRequireAuth";

export function RequireRole({
  role,
  children,
}: {
  role: AuthRole;
  children: React.ReactNode;
}) {
  const { ready } = useRequireAuth(role);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-[#6B7280]">
        Checking access...
      </div>
    );
  }

  return children;
}
