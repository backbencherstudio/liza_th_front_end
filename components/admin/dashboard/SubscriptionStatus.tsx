"use client";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Data matching the plans, percentage distribution, and metrics in the mockup
const data = [
    { name: "Free", value: 35, amount: "$25,000", color: "#8B5CF6" },  // Purple segment
    { name: "Basic", value: 35, amount: "$25,000", color: "#059747" }, // Green segment
    { name: "Pro", value: 30, amount: "$15,000", color: "#335CFF" },   // Blue segment
];

export default function SubscriptionStatus() {
    return (
        <div className="w-full ] rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-4 shadow-[0_4px_12px_0_rgba(0,0,0,0.02)] md:p-5 h-full">

            <h3 className="text-lg font-semibold text-[#1A1A1A]">Subscription Status</h3>
            <p className="text-sm text-[#71717A] py-6">Current plan breakdown</p>

            <div className="flex flex-col xl:flex-row xl:items-center gap-8">
                {/* Chart */}
                <div className="relative mx-auto flex h-[220px] w-[220px] shrink-0 items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={100}
                                paddingAngle={5}
                                cornerRadius={5}
                                dataKey="value"
                                startAngle={270}
                                endAngle={-270}
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        stroke="none"
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center */}
                    <div className="absolute pointer-events-none flex flex-col text-center">
                        <span className="font-[Archivo] text-2xl font-medium tracking-tight text-[#1A1A1A]">
                            $84,750
                        </span>
                        <span className="mt-0.5 font-[Archivo] text-xs font-medium text-[#71717A]">
                            Total Subscription
                        </span>
                    </div>

                    {/* Badges */}
                    <div className="absolute left-1/3 top-2 rounded-full border border-slate-50 bg-white px-2 py-1 text-xs font-bold text-[#1A1A1A] shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
                        35%
                    </div>

                    <div className="absolute bottom-1/4 right-3 rounded-full border border-slate-50 bg-white px-2 py-1 text-xs font-bold text-[#1A1A1A] shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
                        35%
                    </div>

                    <div className="absolute bottom-6 left-6 rounded-full border border-slate-50 bg-white px-2 py-1 text-xs font-bold text-[#1A1A1A] shadow-[0_4px_10px_rgba(0,0,0,0.08)]">
                        30%
                    </div>
                </div>

                {/* Legend */}
                <div className="w-full xl:flex-1">
                    <div className="divide-y divide-[#F4F4F5]">
                        {data.map((item) => (
                            <div
                                key={item.name}
                                className="flex items-center justify-between gap-4 py-3"
                            >
                                <div className="flex items-center gap-2.5">
                                    <span
                                        className="h-3 w-3 shrink-0 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="font-[Archivo] text-base font-medium text-[#252631]">
                                        {item.name}
                                    </span>
                                </div>

                                <span className="font-[Archivo] text-base font-medium text-[#71717A]">
                                    {item.value}%
                                </span>

                                <span className="font-[Archivo] text-[14px] font-normal leading-[20px] text-[#252631]">
                                    {item.amount}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}