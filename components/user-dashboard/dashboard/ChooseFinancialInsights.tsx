import React from "react";
import * as FinancialInsights from "@/components/icons/FinancialInsights";

interface InsightCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
}

const insightCards: InsightCardProps[] = [
  {
    title: "Executive Summary",
    description:
      "Your AI CFO overview of business performance, featuring cash flow, cash flow forecast, burn rate, profit margin, net profit and top spend drivers.",
    Icon: FinancialInsights.ExecutiveSummary,
  },
  {
    title: "Financial Performance",
    description:
      "Understand your financial health through revenue, spend, cash balance, financial health score, category spend variance, and budget vs spend trends.",
    Icon: FinancialInsights.FinancialPerformance,
  },
  {
    title: "Operational KPI",
    description:
      "Understand your monthly operating performance with clear visibility into expenses by department and vendor, while creating custom status updates to keep leadership informed.",
    Icon: FinancialInsights.OperationalKPI,
  },
];

export default function ChooseFinancialInsights() {
  return (
    <section className="mt-8">
      <h2 className="mb-6 text-[26px] font-medium leading-[34px] text-gray-900">
        Choose Financial Insights
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {insightCards.map(({ title, description, Icon }) => (
          <InsightCard
            key={title}
            title={title}
            description={description}
            Icon={Icon}
          />
        ))}
      </div>
    </section>
  );
}

function InsightCard({
  title,
  description,
  Icon,
}: InsightCardProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
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