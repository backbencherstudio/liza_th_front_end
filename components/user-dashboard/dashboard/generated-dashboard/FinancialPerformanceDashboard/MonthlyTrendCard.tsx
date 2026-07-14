import React from "react";
import TrendBarChart from "./TrendBarChart";
import CategoryTable from "./CategoryTable";
import { monthlyData } from "./data";

const MonthlyTrendCard: React.FC = () => {
  return (
    <div className="w-full  rounded-3xl bg-white p-7 pb-5  font-sans border [background:var(--W,#FFF)] px-4 py-5 rounded-2xl border-solid border-[#EDEDED]">
      <h2 className="mb-6 mt-1 text-xl font-bold text-slate-900">
        Monthly Trend by Category
      </h2>

      <TrendBarChart data={monthlyData} />

      <div className="mt-5">
        <CategoryTable data={monthlyData} />
      </div>
    </div>
  );
};

export default MonthlyTrendCard;