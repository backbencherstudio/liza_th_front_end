// types/dashboard.ts
export type DashboardType = "EXEC" | "FIN" | "OPS";

export interface GeneratedDashboard {
  id: string;
  title: string;
  type: DashboardType;          // ← this decides which UI to render
  fileName: string;
  mappings: Record<string, string>;
  goals: string[];
  createdAt: string;
  thumbnailUrl: string;
}