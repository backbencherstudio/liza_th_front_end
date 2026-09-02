"use client";

import { RequireRole } from "@/components/auth/RequireRole";
import DashboardShell from "@/components/layouts/DashboardShell";
import { superAdminNavigation } from "@/config/navigation";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RequireRole role="super-admin">
            <DashboardShell navigation={superAdminNavigation}>
                {children}
            </DashboardShell>
        </RequireRole>
    );
}
