// GeneratedDashboardView.tsx
import { GeneratedDashboard } from "@/types/dashboard";
import ExecutiveSummaryDashboard from "./ExecutiveSummaryDashboard/ExecutiveSummaryDashboard";
import FinancialPerformanceDashboard from "./FinancialPerformanceDashboard/FinancialPerformanceDashboard";
import OperationalKPIDashboard from "./OperationalKPIDashboard/OperationalKPIDashboard";

export default function GeneratedDashboardView({ dashboard }: { dashboard: GeneratedDashboard }) {
  switch (dashboard.type) {
    case "EXEC": return <ExecutiveSummaryDashboard dashboard={dashboard} />;
    case "FIN": return <FinancialPerformanceDashboard dashboard={dashboard} />;
    case "OPS": return <OperationalKPIDashboard dashboard={dashboard} />;
  }
}