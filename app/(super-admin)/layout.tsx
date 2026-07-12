"use client";

import DashboardShell from "@/components/layouts/DashboardShell";
import { superAdminNavigation } from "@/config/navigation";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardShell navigation={superAdminNavigation}>
            {children}
        </DashboardShell>
    );
}
