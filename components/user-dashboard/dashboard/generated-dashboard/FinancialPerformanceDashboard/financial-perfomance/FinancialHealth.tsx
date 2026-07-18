"use client";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Data precisely matching the mockup
const data = [
    { name: "Expense", value: 39, color: "#74D69D" }, // Green segment
    { name: "Revenue", value: 61, color: "#8194F3" }, // Blue segment
];

export default function FinancialHealth() {
    return (
        <div className="w-full  rounded-[24px] border border-solid border-[#E9E9EA] bg-white p-6 shadow-[0_4px_20px_0_rgba(0,0,0,0.02)] h-full flex flex-col justify-between md:max-h-[490px]">
            <div>
                {/* HEADER TITLE SECTION */}
                <div className="mb-4 flex w-full flex-col gap-1">
                    <h3 className="font-[Archivo] font-medium text-[#1C1C1E] text-[18px] leading-[24px] md:text-[20px] md:leading-[26px]">
                        Financial Health
                    </h3>
                    <span className="font-[Archivo] font-normal text-[#3D3D3C] text-[13px] leading-[18px] sm:text-[14px] sm:leading-[20px]">
                        Current plan breakdown
                    </span>
                </div>

                {/* CORE GRAPHICS WRAPPER */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6 py-4">

                    {/* DONUT VISUALIZATION ENGINE (LEFT) */}
                    <div className="relative flex h-[200px] w-[200px] shrink-0 items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={92}
                                    paddingAngle={6}     // Gaps matching the split ring
                                    cornerRadius={8}     // Smooth pill caps
                                    dataKey="value"
                                    startAngle={140}     // Angled start to match top-left/bottom split
                                    endAngle={-220}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>

                        {/* FLOATING STAT BADGES OVER PIE */}
                        {/* 39% Badge (Top-Left) */}
                        <div className="absolute top-[8%] left-[24%] bg-white px-2.5 py-1 text-xs font-bold font-[Archivo] text-[#1A1A1A] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-solid border-slate-50">
                            39%
                        </div>
                        {/* 61% Badge (Bottom) */}
                        <div className="absolute bottom-[6%] left-[40%] bg-white px-2.5 py-1 text-xs font-bold font-[Archivo] text-[#1A1A1A] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-solid border-slate-50">
                            61%
                        </div>
                    </div>

                    {/* METRICS LEGEND (RIGHT) */}
                    <div className="flex w-full flex-col divide-y divide-solid divide-[#F4F4F5] max-w-[220px]">
                        {data.map((item) => (
                            <div
                                key={item.name}
                                className="flex w-full items-center justify-between py-3 font-[Archivo] first:pt-0 last:pb-0"
                            >
                                {/* Color Indicator & Label */}
                                <div className="flex items-center gap-3">
                                    <span
                                        className="w-3 h-3 rounded-full shrink-0"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="text-base font-medium text-[#1A1A1A]">
                                        {item.name}
                                    </span>
                                </div>

                                {/* Share Percentage */}
                                <span className="text-base font-medium text-[#1A1A1A]">
                                    {item.value}%
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* BOTTOM RISK INSIGHT BANNER */}
            <div className="mt-4 w-full rounded-lg bg-[#EBF9F1] px-4 py-3 text-center font-[Archivo] text-[15px] leading-relaxed text-[#1A1A1A]">
                <strong className="font-bold text-[#1A1A1A]">Low Risk:</strong> Your expenses use 39% of your revenue each month
            </div>
        </div>
    );
}