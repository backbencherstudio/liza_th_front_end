import { GeneratedDashboard, DashboardType } from "@/types/dashboard";

const KEY = "user-dashboards";

export const DASHBOARD_LABELS: Record<DashboardType, string> = {
  EXEC: "Executive Summary",
  FIN: "Financial Performance",
  OPS: "Operational KPI",
};

export const DASHBOARD_THUMBNAILS: Record<DashboardType, string> = {
  EXEC: "/assets/SuperAdmin/SuperAnalytic.png",
  FIN: "/assets/SuperAdmin/SuperAnalytic.png",
  OPS: "/assets/SuperAdmin/SuperAnalytic.png",
};

export function getDashboards(): GeneratedDashboard[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getDashboardById(id: string): GeneratedDashboard | null {
  return getDashboards().find((d) => d.id === id) ?? null;
}

export function saveDashboard(dashboard: GeneratedDashboard): void {
  const all = getDashboards();
  localStorage.setItem(KEY, JSON.stringify([dashboard, ...all]));
}

export function removeDashboard(id: string): void {
  const all = getDashboards().filter((d) => d.id !== id);
  localStorage.setItem(KEY, JSON.stringify(all));
}
