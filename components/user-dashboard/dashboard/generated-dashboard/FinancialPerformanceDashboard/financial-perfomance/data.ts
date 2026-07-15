export interface MonthlyData {
    month: string;
    operations: number;
    marketing: number;
    payroll: number;
  }
   
  export const CATEGORY_COLORS = {
    operations: "#f5a962",
    marketing: "#7ed9a4",
    payroll: "#8f9bf5",
  };
   
  export const CATEGORY_LABELS: { key: keyof typeof CATEGORY_COLORS; label: string }[] = [
    { key: "operations", label: "Operations" },
    { key: "marketing", label: "Marketing" },
    { key: "payroll", label: "Payroll" },
  ];
   
  export const monthlyData: MonthlyData[] = [
    { month: "Jan -26", operations: 142145, marketing: 122145, payroll: 121450 },
    { month: "Feb -26", operations: 110454, marketing: 121454, payroll: 114544 },
    { month: "Mar -26", operations: 124012, marketing: 125012, payroll: 122012 },
    { month: "Apr -26", operations: 113457, marketing: 134457, payroll: 133457 },
    { month: "May -26", operations: 154514, marketing: 145019, payroll: 144514 },
    { month: "Jun -26", operations: 104154, marketing: 141540, payroll: 144154 },
  ];
   