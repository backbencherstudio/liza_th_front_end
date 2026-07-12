import type { ComponentType } from "react";

export type DashboardRole = "super_admin" | "admin" | "user";

export type NavIcon = ComponentType<{ size?: number; className?: string }>;

export interface DashboardNavItem {
  id: string | number;
  title: string;
  href: string;
  icon: NavIcon;
}

export interface DashboardNavConfig {
  role: DashboardRole;
  items: DashboardNavItem[];
  settingsHref: string;
  /** Used to avoid prefix-matching the root dashboard link for every nested route */
  dashboardHref: string;
  /** Show settings + logout footer. Defaults to true. */
  showSidebarFooter?: boolean;
  /** Accent border on the sidebar left edge */
  showSidebarAccent?: boolean;
}

export interface DashboardUser {
  name: string;
  roleLabel: string;
  avatarSrc: string;
}
