"use client";

import { ArrowUpRight } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// High-granularity mock data to capture the weekly fluctuations across the 12 months
const generateGranularData = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const baseTrend = [0, 5000, 4500, 6000, 9500, 11500, 8500, 7500, 11000, 12500, 11500, 12500];
  
  let dataPoints: Array<{ month: string; displayMonth: string; revenue: number; rawDate: string }> = [];
  
  months.forEach((m, idx) => {
    const base = baseTrend[idx];
    // Generate 4 weekly data points per month to recreate the organic jagged trace
    for (let w = 1; w <= 4; w++) {
      const variance = Math.sin(w * 1.5) * 1200 + (Math.random() - 0.5) * 800;
      const revenue = Math.max(0, Math.min(14500, Math.round(base + variance)));
      dataPoints.push({
        month: m,
        displayMonth: w === 1 ? m : "", // Only display month label on the first week to keep X-axis clean
        revenue: revenue,
        rawDate: `${m} ${w * 7 - 4}`,
      });
    }
  });
  return dataPoints;
};

const data = generateGranularData();

// Custom high-fidelity tooltip element matching your exact visual design specs
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="relative bg-white border border-solid border-[#D1E2FF] rounded-xl px-4 py-2 text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-solid after:border-transparent after:border-t-white before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:border-[9px] before:border-solid before:border-transparent before:border-t-[#D1E2FF] before:-z-10">
        <p className="text-sm font-semibold font-[Archivo] text-[#2563EB]">
          {payload[0].payload.rawDate} - ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function RevenueTrendChart() {
  return (
    <div className="w-full max-w-full rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-4 shadow-[0_4px_12px_0_rgba(0,0,0,0.02)] sm:p-6">
      
      {/* HEADER LABEL BLOCK */}
      <div className="mb-4 flex w-full flex-col gap-1 sm:mb-6">
        <h3 className="font-[Archivo] text-xl font-bold tracking-tight text-[#1A1A1A] sm:text-2xl">
          Revenue Trend
        </h3>
        
        <div className="flex items-center gap-1.5 text-sm font-[Archivo]">
          <span className="inline-flex items-center font-semibold text-[#2563EB]">
            <ArrowUpRight size={16} className="mr-0.5" />
            12%
          </span>
          <span className="text-[#71717A]">vs last month</span>
        </div>
      </div>

      {/* CHART ENGINE FRAME */}
      <div className="h-[240px] w-full min-w-0 sm:h-[280px] md:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 5, left: -10, bottom: 0 }}
          >
            {/* GRADIENT SHADING DEFINITION */}
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.18} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.00} />
              </linearGradient>
            </defs>

            {/* HIGH-CONTRAST LIGHT DOT GRID SYSTEM */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#F4F4F5"
              vertical={true}
              horizontal={true}
            />

            {/* X-AXIS SCALE SYSTEM */}
            <XAxis
              dataKey="displayMonth"
              interval={0} // Forces Recharts to evaluate every block mapped by our display month filter
              tickLine={false}
              axisLine={{ stroke: "#E4E4E7" }}
              tick={{ fill: "#71717A", fontSize: 11, fontFamily: "Archivo" }}
              dy={10}
            />

            {/* Y-AXIS SCALE SYSTEM */}
            <YAxis
              domain={[0, 15000]}
              ticks={[0, 3000, 6000, 9000, 12000, 15000]}
              tickFormatter={(value) => `$${value}`}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#71717A", fontSize: 11, fontFamily: "Archivo" }}
              dx={-10}
            />

            {/* FLOATING HOVER TOOLTIP DEFINITION */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#A1A1AA",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
              offset={-15}
            />

            {/* AREA PLOT ELEMENT TRACE */}
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#trendGradient)"
              activeDot={{
                stroke: "#1A1A1A",
                strokeWidth: 2,
                fill: "#FFFFFF",
                r: 5,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}