"use client";

import DashboardShell from "@/components/layouts/DashboardShell";
import { adminNavigation } from "@/config/navigation";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell navigation={adminNavigation}>
      {children}
    </DashboardShell>
  );
}
