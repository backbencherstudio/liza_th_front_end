// types/dashboard.ts
export type DashboardType = "EXEC" | "FIN" | "OPS";

export interface GeneratedDashboard {
  id: string;
  title: string;
  type: DashboardType;          // ← this decides which UI to render
  fileName: string;
  mappings: { period: string; location: string; expenses: string; revenue: string };
  goals: string[];
  createdAt: string;
  thumbnailUrl: string;
}