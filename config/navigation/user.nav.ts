import { BarChart3, LayoutDashboard, Plus, Save, Settings } from "lucide-react";

import type { DashboardNavConfig } from "./types";
import UserDashboardIcons from "@/components/icons/UserDashboardIcons";

export const userNavigation: DashboardNavConfig = {
  role: "user",
  dashboardHref: "/user-dashboard/dashboard",
  settingsHref: "/user-dashboard/settings",
  items: [
    {
      id: "dashboard",
      title: "Generate Insight",
      href: "/user-dashboard/generate-insight",
      icon: Plus,
    },
    {
      id: "Dashboard",
      title: "Dashboard",
      href: "/user-dashboard/dashboard",
      icon: UserDashboardIcons.DashboardIcon,
    },
    {
      id: "settings",
      title: "Saved Insights",
      href: "/user-dashboard/save-insight",
      icon: Save,
    },
    {
      id: "Manage Subscription",
      title: "Manage Subscription",
      href: "/user-dashboard/manage-subscription",
      icon: UserDashboardIcons.ManageSubsIcon,
    },
  ],
};
