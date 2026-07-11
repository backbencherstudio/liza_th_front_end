import { Crown, Home, Tag, UserCircle } from "lucide-react";

import type { DashboardNavConfig } from "./types";

export const adminNavigation: DashboardNavConfig = {
  role: "admin",
  dashboardHref: "/admin/dashboard",
  settingsHref: "/admin/manage-account",
  showSidebarFooter: false,
  showSidebarAccent: true,
  items: [
    {
      id: "dashboard",
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: Home,
    },
    {
      id: "manage-subscription",
      title: "Manage Subscription",
      href: "/admin/manage-subscription",
      icon: Crown,
    },
    {
      id: "manage-discount-referral",
      title: "Manage Discount & Referral",
      href: "/admin/manage-discount-referral",
      icon: Tag,
    },
    {
      id: "manage-account",
      title: "Manage Account",
      href: "/admin/manage-account",
      icon: UserCircle,
    },
  ],
};
