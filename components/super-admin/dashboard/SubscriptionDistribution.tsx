"use client";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Data matching the plans, percentage distribution, and metrics in the mockup
const data = [
  { name: "Free", value: 35, amount: "$25,000", color: "#8B5CF6" },  // Purple segment
  { name: "Basic", value: 35, amount: "$25,000", color: "#059747" }, // Green segment
  { name: "Pro", value: 30, amount: "$15,000", color: "#335CFF" },   // Blue segment
];

export default function SubscriptionDistribution() {
  return (
    <div className="w-full max-w-[520px] rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-4 shadow-[0_4px_12px_0_rgba(0,0,0,0.02)] md:p-5 h-full">
      
      {/* HEADER TITLE SECTION */}
      <div className="mb-6 flex w-full flex-col gap-1 md:mb-8">
        <h3 className="font-[Archivo] text-xl font-bold tracking-tight text-[#1A1A1A] sm:text-2xl">
          Subscription Distribution
        </h3>
        <span className="text-sm font-[Archivo] text-[#71717A]">
          Current plan breakdown
        </span>
      </div>

      {/* CORE GRAPHICS WRAPPER */}
      <div className="grid w-full grid-cols-1 items-center gap-6 sm:grid-cols-12 md:gap-12">
        
        {/* DONUT VISUALIZATION ENGINE (LEFT) */}
        <div className="relative mx-auto flex h-[200px] w-[200px] items-center justify-center sm:col-span-5 sm:mx-0 sm:h-[220px] sm:w-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}     // Creates distinct separation gaps between plans
                cornerRadius={5}    // Gives segments smooth rounded geometric caps
                dataKey="value"
                startAngle={270}      // Rotates initialization viewpoint to align with mockup positioning
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* ABSOLUTE CENTER TEXT OVERLAY */}
          <div className="absolute text-center flex flex-col pointer-events-none">
            <span className="text-2xl font-medium font-[Archivo] text-[#1A1A1A] tracking-tight">
              $84,750
            </span>
            <span className="text-xs font-medium font-[Archivo] text-[#71717A] mt-0.5">
              Total Subscription
            </span>
          </div>

          {/* CUSTOM STAT FLOATING BADGES MOCKUP */}
          {/* Green Segment (Top-Left Accent) */}
          <div className="absolute top-2 left-1/3 bg-white px-2 py-1 text-xs font-bold font-[Archivo] text-[#1A1A1A] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.08)] border border-solid border-slate-50">
            35%
          </div>
          {/* Purple Segment (Right-Center Accent) */}
          <div className="absolute bottom-1/4 right-3 bg-white px-2 py-1 text-xs font-bold font-[Archivo] text-[#1A1A1A] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.08)] border border-solid border-slate-50">
            35%
          </div>
          {/* Blue Segment (Bottom-Left Accent) */}
          <div className="absolute bottom-6 left-6 bg-white px-2 py-1 text-xs font-bold font-[Archivo] text-[#1A1A1A] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.08)] border border-solid border-slate-50">
            30%
          </div>
        </div>

        {/* METRICS & DETAILS GRID LEGEND (RIGHT) */}
        <div className="flex w-full flex-col divide-y divide-solid divide-[#F4F4F5] sm:col-span-6">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex w-full flex-wrap items-center justify-between gap-2 py-2.5 font-[Archivo] first:pt-0 last:pb-0 sm:flex-nowrap sm:gap-0"
            >
              {/* Plan Color Indicator & Label */}
              <div className="flex items-center gap-2.5 min-w-[90px]">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-base font-medium text-[#252631]">
                  {item.name}
                </span>
              </div>

              {/* Share Percentage */}
              <span className="text-base font-medium text-[#71717A] text-right">
                {item.value}%
              </span>

              {/* Total Financial Accumulation */}
              <span className="text-base  text-[#252631] text-right   text-[14px] font-normal leading-[20px]">
                {item.amount}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}