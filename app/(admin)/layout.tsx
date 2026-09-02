"use client";

import { RequireRole } from "@/components/auth/RequireRole";
import DashboardShell from "@/components/layouts/DashboardShell";
import { adminNavigation } from "@/config/navigation";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RequireRole role="admin">
      <DashboardShell navigation={adminNavigation}>
        {children}
      </DashboardShell>
    </RequireRole>
  );
}
