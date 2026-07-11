import { BarChart3, LayoutDashboard, Settings } from "lucide-react";

import type { DashboardNavConfig } from "./types";

export const userNavigation: DashboardNavConfig = {
  role: "user",
  dashboardHref: "/user-dashboard/dashboard",
  settingsHref: "/user-dashboard/settings",
  items: [
    {
      id: "dashboard",
      title: "Generate Insight",
      href: "/user-dashboard/generate-insight",
      icon: LayoutDashboard,
    },
    {
      id: "Dashboard",
      title: "Dashboard",
      href: "/user-dashboard/dashboard",
      icon: BarChart3,
    },
    {
      id: "settings",
      title: "Saved Insights",
      href: "/user-dashboard/save-insight",
      icon: Settings,
    },
    {
      id: "Manage Subscription",
      title: "Manage Subscription",
      href: "/user-dashboard/manage-subscription",
      icon: Settings,
    },
  ],
};
