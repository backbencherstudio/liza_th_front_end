import ChartCoulumnIcon from "@/components/icons/ChartCoulumnIcon";
import ContentIcon from "@/components/icons/ContentIcon";
import ManageRoleIcon from "@/components/icons/ManageRoleIcon";
import ManageSubsIcon from "@/components/icons/ManageSubsIcon";
import { FileText, LayoutDashboard, Tag, Users } from "lucide-react";

import type { DashboardNavConfig } from "./types";

export const superAdminNavigation: DashboardNavConfig = {
  role: "super_admin",
  dashboardHref: "/super-admin/dashboard",
  settingsHref: "/super-admin/settings/edit-profile",
  items: [
    {
      id: "dashboard",
      title: "Dashboard",
      href: "/super-admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      id: "manage-dashboard",
      title: "Manage Dashboard",
      href: "/super-admin/manage-dashboard",
      icon: FileText,
    },
    {
      id: "manage-users",
      title: "Manage Users",
      href: "/super-admin/manage-user",
      icon: Users,
    },
    {
      id: "manage-subscription",
      title: "Manage Subscription",
      href: "/super-admin/manage-subscription",
      icon: ManageSubsIcon,
    },
    {
      id: "discounts",
      title: "Discounts & Promotions",
      href: "/super-admin/discount-promotions",
      icon: Tag,
    },
    {
      id: "content",
      title: "Content Management",
      href: "/super-admin/content-management",
      icon: ContentIcon,
    },
    {
      id: "revenue",
      title: "Revenue Analytics",
      href: "/super-admin/revenue-analytics",
      icon: ChartCoulumnIcon,
    },
    {
      id: "manage-role",
      title: "Manage Role",
      href: "/super-admin/manage-role",
      icon: ManageRoleIcon,
    },
  ],
};

/** @deprecated Use superAdminNavigation.items instead */
export const sidebarData = superAdminNavigation.items;
