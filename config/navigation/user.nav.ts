import { BarChart3, LayoutDashboard, Settings } from "lucide-react";

import type { DashboardNavConfig } from "./types";

export const userNavigation: DashboardNavConfig = {
  role: "user",
  dashboardHref: "/app/dashboard",
  settingsHref: "/app/settings",
  items: [
    {
      id: "dashboard",
      title: "Dashboard",
      href: "/app/dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "reports",
      title: "Reports",
      href: "/app/reports",
      icon: BarChart3,
    },
    {
      id: "settings",
      title: "Settings",
      href: "/app/settings",
      icon: Settings,
    },
  ],
};
