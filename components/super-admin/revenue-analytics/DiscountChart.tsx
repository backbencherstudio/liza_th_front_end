"use client";

import { ChevronDown } from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Data mapping the specific categories and values from the layout
const data = [
  { name: "Subscription", value: 450 },
  { name: "Winter", value: 280 },
  { name: "Summer", value: 180 },
  { name: "Premium", value: 120 },
  { name: "Welcome50", value: 45 },
];

export default function DiscountChart() {
  return (
    <div className="w-full  bg-white p-6 rounded-[20px] border border-solid border-[#E9E9EA] shadow-[0_4px_12px_0_rgba(0,0,0,0.02)]">
      
      {/* HEADER CONTROLS SECTION */}
      <div className="flex items-center justify-between w-full mb-6">
        <h3 className="text-2xl font-bold font-[Archivo] text-[#1A1A1A] tracking-tight">
          Discount
        </h3>

        {/* COMPACT FILTER DROPDOWN */}
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
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            barSize={60} // Chunky bar aesthetic matching your layout guidelines
          >
            {/* DASHED GRID LAYER */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E4E4E7"
              vertical={true}
              horizontal={true}
            />

            {/* X-AXIS CONTROLS */}
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={{ stroke: "#A1A1AA" }}
              tick={{ fill: "#71717A", fontSize: 13, fontFamily: "Archivo" }}
              dy={10}
            />

            {/* Y-AXIS CONTROLS */}
            <YAxis
              domain={[0, 600]}
              ticks={[0, 150, 300, 450, 600]}
              tickLine={true}
              axisLine={{ stroke: "#A1A1AA" }}
              tick={{ fill: "#71717A", fontSize: 13, fontFamily: "Archivo" }}
              dx={-5}
            />

            {/* MODERN TOOLTIP POPUP */}
            <Tooltip
              cursor={{ fill: "#F4F4F5", opacity: 0.4 }}
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
              formatter={(value: any) => [`${value} Uses`]}
            />

            {/* BAR COMPONENT WITH CUSTOM GEOMETRIC CORNER RADIUS */}
            <Bar
              dataKey="value"
              fill="#2563EB" // Solid vibrant blue accent
              radius={[12, 12, 0, 0]} // Distinct chunky radius on top edges only
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}