"use client";

import React from "react";
import { useRouter } from "next/navigation";
import * as FinancialInsights from "@/components/icons/FinancialInsights";

interface InsightCardProps {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
}

const insightCards: InsightCardProps[] = [
  {
    id: "EXEC",
    title: "Executive Summary",
    description:
      "Your AI CFO overview of business performance, featuring cash flow, cash flow forecast, burn rate, profit margin, net profit and top spend drivers. Recommended reports: Profit & Loss, Balance Sheet, General Ledger.",
    Icon: FinancialInsights.ExecutiveSummary,
  },
  {
    id: "FIN",
    title: "Financial Performance",
    description:
      "Understand your financial health through revenue, spend, cash balance, financial health score, category spend variance, and budget vs spend trends. Recommended reports: Profit & Loss, Monthly Budget, Monthly Spend, Bank Statement, Balance Sheet.",
    Icon: FinancialInsights.FinancialPerformance,
  },
  {
    id: "OPS",
    title: "Operational KPI",
    description:
      "Understand your financial health through revenue, spend, cash balance, financial health score, category spend variance, and budget vs spend trends. Recommended reports: Custom KPI Tracker, Status Update, Monthly Trend.",
    Icon: FinancialInsights.OperationalKPI,
  },
];

export default function ChooseFinancialInsights() {
  const router = useRouter();

  const handleSelectDashboard = (dashboardId: string) => {
    router.push(
      `/user-dashboard/generate-insight?dashboard=${dashboardId}`
    );
  };

  return (
    <section className="mt-8">
      <h2 className="mb-6 text-[26px] font-medium leading-[34px] text-gray-900">
        Choose Financial Insights
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {insightCards.map(({ id, title, description, Icon }) => (
          <InsightCard
            key={id}
            id={id}
            title={title}
            description={description}
            Icon={Icon}
            onClick={() => handleSelectDashboard(id)}
          />
        ))}
      </div>
    </section>
  );
}

interface InsightCardComponentProps {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
  onClick: () => void;
}

function InsightCard({
  title,
  description,
  Icon,
  onClick,
}: InsightCardComponentProps) {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50">
        <Icon />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-base leading-7 text-gray-600">
        {description}
      </p>
    </div>
  );
}