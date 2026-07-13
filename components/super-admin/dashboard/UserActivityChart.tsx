"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Mock data replicating the dual-metric distribution across the week days
const data = [
  { day: "Sat", logins: 24, signups: 14 },
  { day: "Sun", logins: 24, signups: 14 },
  { day: "Mon", logins: 24, signups: 14 },
  { day: "Tues", logins: 24, signups: 14 },
  { day: "Wed", logins: 24, signups: 14 },
  { day: "Thur", logins: 24, signups: 14 },
  { day: "Fri", logins: 24, signups: 14 },
];

export default function UserActivityChart() {
  return (
    <div className="w-full max-w-full rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-4 shadow-[0_4px_12px_0_rgba(0,0,0,0.02)] sm:p-6">
      
      {/* HEADER SECTION */}
      <div className="mb-4 flex w-full flex-col gap-1">
        <h3 className="font-[Archivo] text-xl font-bold tracking-tight text-[#1A1A1A] sm:text-2xl">
          User Activity
        </h3>
        <span className="text-sm font-[Archivo] text-[#71717A]">
          Weekly login and signup trends
        </span>
      </div>

      {/* CUSTOM LEGEND BAR */}
      <div className="mb-6 flex w-full flex-wrap items-center gap-4 font-[Archivo] text-sm sm:mb-8 sm:gap-5">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#2563EB]" />
          <span className="font-semibold text-[#4B5563]">Logins</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#A8E637]" />
          <span className="font-semibold text-[#4B5563]">Signups</span>
        </div>
      </div>

      {/* CHART CONTAINER CANVAS */}
      <div className="h-[220px] w-full min-w-0 sm:h-[250px] md:h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 0, left: -15, bottom: 0 }}
            barGap={4}
            barSize={12}
          >
            {/* HORIZONTAL DASHED LINES GRID LAYER */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#F4F4F5"
              vertical={false}
              horizontal={true}
            />

            {/* X-AXIS */}
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#1A1A1A", fontSize: 13, fontFamily: "Archivo", fontWeight: 500 }}
              dy={10}
            />

            {/* Y-AXIS */}
            <YAxis
              domain={[0, 50]}
              ticks={[0, 10, 20, 30, 40, 50]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#1A1A1A", fontSize: 13, fontFamily: "Archivo", fontWeight: 500 }}
              dx={-5}
            />

            {/* INTERACTIVE HOVER TOOLTIP */}
            <Tooltip
              cursor={{ fill: "transparent" }} // Avoids standard grey box canvas block on row hover
              contentStyle={{
                backgroundColor: "#1A1A1A",
                border: "none",
                borderRadius: "12px",
                color: "#FFFFFF",
                fontFamily: "Archivo",
                fontSize: "12px",
              }}
              itemStyle={{ color: "#FFFFFF" }}
            />

            {/* SIGNUPS BAR WITH SUBTLE LIGHT GREEN BACKGROUND TANK FILL */}
            <Bar
              dataKey="signups"
              fill="#A8E637" // Vibrant lime/green trace tone
              radius={[0, 0, 0, 0]}
              background={{ fill: "#EFF8E2", radius: [0, 0, 0, 0] as any }} // The muted translucent track wrapper
            />

            {/* LOGINS BAR WITH SUBTLE LIGHT BLUE BACKGROUND TANK FILL */}
            <Bar
              dataKey="logins"
              fill="#2563EB" // Solid modern enterprise corporate blue
              radius={[0, 0, 0, 0]}
              background={{ fill: "#EEF2F6", radius: [0, 0, 0, 0] as any }} // The muted translucent track wrapper
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}