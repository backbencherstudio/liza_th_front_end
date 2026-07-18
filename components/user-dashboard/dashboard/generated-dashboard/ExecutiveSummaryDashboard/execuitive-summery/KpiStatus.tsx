"use client";

import { ExecuitiveCard } from "@/components/reusable/ExecuitiveCard";
import { TrendingUp, TrendingDown } from "lucide-react";

const kpiData = [
    {
        title: "TOTAL REVENUE",
        value: "$267,100",
        change: "12.3% Vs March 2025",
        trend: "up",
        // themeColor: "#1E40AF",
        badgeBg: "bg-[#E8F7F0]",
        badgeColor: "text-[#10B981]",
    },
    {
        title: "NET PROFIT",
        value: "$42,680",
        change: "5.1% Decrease",
        trend: "down",
        tag: "After all expenses",
        badgeBg: "bg-red-50",
        badgeColor: "text-red-600",
    },
    {
        title: "GROSS MARGIN",
        value: "8.3%",
        change: "1.2% Growth",
        trend: "up",
        tag: "Blended avg",
        badgeBg: "bg-[#E8F7F0]",
        badgeColor: "text-[#10B981]",
    },
    {
        title: "BURN RATE",
        value: "$16,145",
        change: "Cash Runway: 12.4 Months",
        trend: "up",
        tag: "Monthly avg",
        badgeBg: "bg-[#E8F7F0]",
        badgeColor: "text-[#10B981]",
    },
];



export default function KpiCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 w-full p-3">
            {kpiData.map((item, index) => (
                <ExecuitiveCard
                    key={index}
                    title={item.title}
                    value={item.value}
                    change={item.change}
                    trend={item.trend}
                    tag={item.tag}
                    badgeBg={item.badgeBg}
                    badgeColor={item.badgeColor}
                />
            ))}
        </div>
    );
}