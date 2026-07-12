"use client";

import { ChevronDown, ArrowUpRight } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Mock data mapping the revenue progression shown in the mockup
const data = [
  { month: "Jan", revenue: 1200 },
  { month: "Feb", revenue: 1450 },
  { month: "Mar", revenue: 1850 },
  { month: "Apr", revenue: 2200 },
  { month: "May", revenue: 2700 },
  { month: "Jun", revenue: 3100 },
];

export default function RevenueGrowthChart() {
  return (
    <div className="flex flex-col items-start gap-8 flex-[1_0_0] self-stretch border [background:var(--W,#FFF)] p-6 rounded-2xl border-solid border-[#EDEDED]">
      
      {/* HEADER CONTROLS SECTION */}
      <div className="flex items-start justify-between w-full mb-6">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold font-[Archivo] text-[#1A1A1A] tracking-tight">
            Revenue Growth
          </h3>
          
          {/* GROWTH TREND BADGE */}
          <div className="flex items-center gap-1.5 text-sm font-[Archivo]">
            <span className="inline-flex items-center font-semibold text-[#2563EB]">
              <ArrowUpRight size={16} className="mr-0.5" />
              12%
            </span>
            <span className="text-[#71717A]">vs last month</span>
          </div>
        </div>

        {/* COMPACT FILTER DROPDOWN */}
        <button
          type="button"
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium font-[Archivo] text-[#2563EB] bg-white border border-solid border-[#2563EB] rounded-xl hover:bg-blue-50 transition-colors shadow-sm"
        >
          <span>This month</span>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* CHART CANVAS ENGINE */}
      <div className="w-full h-[280px] -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            {/* DEFINING THE GRADIENT FILL */}
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.01} />
              </linearGradient>
            </defs>

            {/* DASHED GRID LAYER */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E4E4E7"
              vertical={true}
              horizontal={true}
            />

            {/* X-AXIS CONTROLS */}
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={{ stroke: "#A1A1AA" }}
              tick={{ fill: "#71717A", fontSize: 12, fontFamily: "Archivo" }}
              dy={10}
            />

            {/* Y-AXIS CONTROLS */}
            <YAxis
              domain={[0, 3200]}
              ticks={[0, 800, 1600, 2400, 3200]}
              tickLine={true}
              axisLine={{ stroke: "#A1A1AA" }}
              tick={{ fill: "#71717A", fontSize: 12, fontFamily: "Archivo" }}
              dx={-5}
            />

            {/* MODERN ACCENT TOOLTIP POPUP */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#1A1A1A",
                border: "none",
                borderRadius: "12px",
                color: "#FFFFFF",
                fontFamily: "Archivo",
                fontSize: "12px",
              }}
              labelStyle={{ display: "none" }}
              itemStyle={{ color: "#FFFFFF", padding: "2px 4px" }}
              formatter={(value: any) => [`$${value}`]}
            />

            {/* LIVE AREA PLOT ENGINE */}
            <Area
              type="linear"
              dataKey="revenue"
              stroke="#3B82F6" // Modern abstract blue stroke line
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#revenueGradient)" // Referencing the gradient definition wrapper above
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}