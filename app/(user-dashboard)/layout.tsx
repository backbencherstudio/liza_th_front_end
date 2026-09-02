"use client";

import { RequireRole } from "@/components/auth/RequireRole";
import DashboardShell from "@/components/layouts/DashboardShell";
import { userNavigation } from "@/config/navigation";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireRole role="user">
      <DashboardShell navigation={userNavigation}>
        {children}
      </DashboardShell>
    </RequireRole>
  );
}
