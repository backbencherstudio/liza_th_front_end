"use client";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Fixed data - percentages sum to 100
const data = [
    { name: "Active", value: 74, color: "#18A42B" },
    { name: "Trial", value: 8, color: "#8B9DFC" },
    { name: "Cancel", value: 30, color: "#F24822" },
    { name: "ProExpired", value: 10, color: "#FFBE70" },
];

// Custom Inside Label Renderer: places the percentage directly inside the pie slices
const renderInsideLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }: any) => {
    const RADIAN = Math.PI / 180;

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);


    const fontSize = value > 10 ? "13px" : "10px";

    return (
        <text
            x={x}
            y={y}
            fill="#FFFFFF" // White text color inside progress slices
            textAnchor="middle"
            dominantBaseline="central"
            className="font-[Archivo] font-bold pointer-events-none"
            style={{ fontSize }}
        >
            {`${value}%`}
        </text>
    );
};

export default function SubscriptionStatus() {
    return (
        <div className="w-full rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-4 shadow-[0_4px_12px_0_rgba(0,0,0,0.02)] md:p-5 h-full">
            <h3 className="font-archivo text-[#151513] text-lg md:text-[20px] font-medium leading-[32px] tracking-[-0.48px]">Subscription Status</h3>
            <p className="text-sm text-[#71717A] pt-1 pb-6">Current plan breakdown</p>

            <div className="flex flex-col xl:flex-row xl:items-center gap-8 2xl:gap-0">
                {/* Chart */}
                <div className="relative mx-auto flex h-[220px] w-[200px] shrink-0 items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={65} // Balanced inner radius for better text fit
                                outerRadius={100} // Outer boundary of the slice
                                paddingAngle={4}
                                cornerRadius={6}
                                dataKey="value"
                                startAngle={270}
                                endAngle={-270}
                                label={renderInsideLabel} // Dynamic inside rendering
                                labelLine={false} // Hidden lines
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

                    {/* Center Content */}
                    <div className="absolute pointer-events-none flex flex-col items-center text-center">
                        <span className="font-[Archivo] text-2xl font-medium tracking-tight text-[#1A1A1A]">
                            $84,750
                        </span>
                        <span className="mt-0.5 font-[Archivo] text-[10px] font-medium text-[#71717A] max-w-[80px]">
                            Total Subscription
                        </span>
                    </div>
                </div>

                {/* Legend */}
                <div className="w-full xl:flex-2">
                    <div className="divide-y divide-[#F4F4F5]">
                        {data.map((item) => (
                            <div
                                key={item.name}
                                className="flex items-center justify-between max-w-[277px] mx-auto py-3"
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}