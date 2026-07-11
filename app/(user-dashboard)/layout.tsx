"use client";

import DashboardShell from "@/components/layouts/DashboardShell";
import { adminNavigation, userNavigation } from "@/config/navigation";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardShell navigation={userNavigation}>
      {children}
    </DashboardShell>
  );
}
