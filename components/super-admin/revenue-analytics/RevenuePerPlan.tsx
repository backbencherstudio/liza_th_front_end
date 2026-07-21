"use client";

import { ChevronDown, TrendingUp } from "lucide-react";

interface PlanRevenueItem {
  rank: number;
  name: string;
  percentageFill: number; // The visual filling width of the track
  trend: string;
  value: string;
}

export default function RevenuePerPlan() {
  // Ordered mapping matching the exact text states and metrics of your wireframe
  const planData: PlanRevenueItem[] = [
    {
      rank: 1,
      name: "Premium",
      percentageFill: 90,
      trend: "+23.5%",
      value: "$48,300",
    },
    {
      rank: 2,
      name: "Growth Plan",
      percentageFill: 90,
      trend: "+23.5%",
      value: "$48,300",
    },
    {
      rank: 3,
      name: "Enterprise",
      percentageFill: 90,
      trend: "+23.5%",
      value: "$48,300",
    },
  ];

  return (
    <div className="w-full  bg-white p-6 md:p-8 rounded-[20px] border border-solid border-[#E9E9EA] shadow-[0_4px_12px_0_rgba(0,0,0,0.02)] h-full">

      {/* HEADER CONTROLS SECTION */}
      <div className="flex items-center justify-between w-full mb-8">
        <h3 className="text-2xl font-bold font-[Archivo] text-[#1A1A1A] tracking-tight">
          Revenue Per Plan
        </h3>

        {/* TIME FRAME RANGE SELECTOR DROPDOWN */}
        <div>

          <div className="relative ">
            <select className="appearance-none w-full h-12 pl-4 pr-10 border border-[#2563EB] rounded-lg text-[#2563EB] bg-white">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>

            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none text-[#2563EB]" />
          </div>

        </div>
      </div>

      {/* PLAN LIST GRID LAYOUT */}
      <div className="flex flex-col gap-6">
        {planData.map((item) => (
          <div key={item.rank} className="flex items-start gap-4 w-full">

            {/* COMPACT BOLD CIRCLE RANK BADGE */}
            <div className="flex items-center justify-center h-10 w-10 shrink-0 rounded-full bg-[#EFF6FF] text-[#2563EB] text-base font-bold font-[Archivo]">
              {item.rank}
            </div>

            {/* METRICS DISPATCH INNER WRAPPER */}
            <div className="flex flex-col w-full gap-1.5 pt-0.5">

              {/* TOP METRICS TYPOGRAPHY ROW */}
              <div className="flex items-center justify-between w-full">
                <span className="text-base font-semibold font-[Archivo] text-[#1A1A1A]">
                  {item.name}
                </span>

                <div className="flex items-center gap-4">
                  {/* INLINE TREND FLAGGING SYSTEM */}
                  <span className="inline-flex items-center gap-1 text-sm font-semibold font-[Archivo] text-[#16A34A]">
                    <TrendingUp size={16} />
                    {item.trend}
                  </span>

                  {/* ABSOLUTE VALUE ACCENT COLOR */}
                  <span className="text-lg font-bold font-[Archivo] text-[#1A1A1A]">
                    {item.value}
                  </span>
                </div>
              </div>

              {/* HIGH-CONTRAST CHUNKY PROGRESSIVE BAR BASE */}
              <div className="w-full h-3 bg-[#E9E9EA] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#2563EB] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${item.percentageFill}%` }}
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}