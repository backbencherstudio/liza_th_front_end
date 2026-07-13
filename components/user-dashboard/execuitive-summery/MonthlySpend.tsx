"use client";

import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";

const data = [
    { name: "Jan", spend: 110, total: 130, profit: 320 },
    { name: "Feb", spend: 45, total: 60, profit: 120 },
    { name: "Mar", spend: 115, total: 130, profit: 340 },
    { name: "Apr", spend: 45, total: 65, profit: 130 },
    { name: "May", spend: 135, total: 155, profit: 410 },
    { name: "Jun", spend: 260, total: 280, profit: 720 },
    { name: "Jul", spend: 200, total: 220, profit: 580 },
    { name: "Aug", spend: 230, total: 255, profit: 640 },
    { name: "Sep", spend: 280, total: 320, profit: 890 },
    { name: "Oct", spend: 180, total: 210, profit: 510 },
    { name: "Nov", spend: 110, total: 125, profit: 310 },
    { name: "Dec", spend: 160, total: 175, profit: 460 },
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const currentData = payload[0].payload;
        return (
            <div className="relative bg-white px-6 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-50 flex flex-col items-start min-w-[160px]">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#60a5fa]" />
                    <span className="text-gray-500 font-medium text-sm">Profit</span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mt-1">
                    ${currentData.profit.toFixed(2)}
                </div>
            </div>
        );
    }
    return null;
};

export default function MonthlySpendChart() {
    const [activeIndex, setActiveIndex] = useState(5);

    const handleMouseMove = (state: any) => {
        if (state && state.activeTooltipIndex !== undefined) {
            setActiveIndex(state.activeTooltipIndex);
        }
    };

    const handleMouseLeave = () => {
        setActiveIndex(5);
    };

    const getDotPositionX = (index: any) => {
        const startPos = 5.2;
        const step = 8.08;
        return `${startPos + index * step}%`;
    };

    return (
        <div className="w-full max-w-3xl bg-white p-8 rounded-3xl shadow-sm border border-gray-100 font-sans">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Monthly Spend</h2>

            <svg width="0" height="0" className="absolute">
                <defs>
                    <pattern
                        id="stripes"
                        width="12"
                        height="12"
                        patternUnits="userSpaceOnUse"
                        patternTransform="rotate(45)"
                    >
                        <line
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="12"
                            stroke="#3b82f6"
                            strokeWidth="2.5"
                            style={{ opacity: 0.35 }}
                        />
                    </pattern>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.5" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="w-full h-[320px] relative">
                {activeIndex !== null && data[activeIndex] && (
                    <div
                        className="absolute top-[23%] -translate-x-1/2 z-20 pointer-events-none transition-all duration-200 ease-out"
                        style={{ left: getDotPositionX(activeIndex) }}
                    >
                        <div className="w-5 h-5 bg-[#3b82f6] rounded-full border-4 border-white shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                    </div>
                )}

                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
                        barGap={-18}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <CartesianGrid
                            strokeDasharray="4 4"
                            vertical={false}
                            stroke="#e2e8f0"
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 13, fontWeight: 500 }}
                            dy={10}
                        />
                        <YAxis
                            domain={[0, 400]}
                            ticks={[0, 50, 100, 150, 200, 250, 300, 400]}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#94a3b8", fontSize: 13 }}
                            tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={false}
                            defaultIndex={5}
                        />
                        <Bar
                            dataKey="total"
                            fill="#f1f5f9"
                            radius={[10, 10, 10, 10]}
                            maxBarSize={18}
                            isAnimationActive={false}
                        />
                        <Bar dataKey="spend" radius={[10, 10, 10, 10]} maxBarSize={18}>
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill="url(#barGradient)"
                                    style={{
                                        maskImage: "url(#stripes)",
                                        WebkitMaskImage: "url(#stripes)",
                                        background: "url(#stripes)",
                                        backgroundColor: "rgba(147, 197, 253, 0.45)",
                                    }}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}