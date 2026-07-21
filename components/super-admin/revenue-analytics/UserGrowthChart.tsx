"use client";

import { ChevronDown, ArrowUpRight } from "lucide-react";

import TableToolBar from "@/components/reusable/TableToolBar";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Mock data mapping the progression shown in the mockup
const data = [
  { month: "Jan", users: 2650 },
  { month: "Feb", users: 3100 },
  { month: "Mar", users: 3450 },
  { month: "Apr", users: 4000 },
  { month: "May", users: 4400 },
  { month: "Jun", users: 4950 },
];

export default function UserGrowthChart() {
  return (
    <div className="flex  w-full flex-col items-start gap-8 shrink-0 self-stretch border [background:var(--W,#FFF)] p-6 rounded-2xl border-solid border-[#EDEDED]">

      {/* HEADER CONTROLS SECTION */}
      <div className="flex items-start justify-between w-full mb-6">
        {/* Left Side - Title + Growth */}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold font-[Archivo] text-[#1A1A1A] tracking-tight">
            User Growth
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

        {/* Right Side - Filter Dropdown (at the end) */}
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

      {/* CHART CANVAS ENGINE */}
      <div className="w-full h-[280px] -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            {/* GRID LAYER MATCHING MOCKUP PATTERN */}
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
              domain={[0, 6000]}
              ticks={[0, 1500, 3000, 4500, 6000]}
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
              formatter={(value: any) => [`${value} Users`]}
            />

            {/* LIVE DATA PLOT ENGINE */}
            <Line
              type="linear"
              dataKey="users"
              stroke="#10B981" // Dynamic emerald/green tone matching the trace
              strokeWidth={2}
              dot={{
                stroke: "#10B981",
                strokeWidth: 2,
                fill: "#FFFFFF",
                r: 5,
              }}
              activeDot={{
                stroke: "#10B981",
                strokeWidth: 2,
                fill: "#10B981",
                r: 7,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}