"use client";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Labour", value: 35, color: "#8CDAAA" },
    { name: "Rent", value: 25, color: "#8C9EFD" },
    { name: "software licence", value: 30, color: "#3B69D0" },
    { name: "Utilities", value: 10, color: "#FFBE70" },
];

export default function ExpenseCategory() {
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }: any) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <g>
                <circle cx={x} cy={y} r="18" fill="white" filter="drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.08))" />
                <text
                    x={x}
                    y={y}
                    fill="#1A1A1A"
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="font-[Archivo] text-xs font-bold"
                >
                    {`${value}%`}
                </text>
            </g>
        );
    };

    return (
        <div className="w-full rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-4 shadow-[0_4px_12px_0_rgba(0,0,0,0.02)] md:p-5 h-full">

            <div className="mb-6 flex w-full flex-col gap-1 md:mb-8">
                <h3 className="font-[Archivo] text-[#1C1C1E] text-[18px] sm:text-[20px] font-medium leading-[24px] sm:leading-[26px] mb-8">
                    Subscription Distribution
                </h3>
                <span className="text-sm font-[Archivo] text-[#71717A]">
                    Current plan breakdown
                </span>
            </div>

            <div className="w-full flex flex-col xl:flex-row items-center gap-6 md:gap-12">

                <div className="relative flex mx-auto h-[220px] w-full max-w-[420px] items-center justify-center sm:col-span-5 sm:mx-0 sm:h-[220px] sm:w-[220px]">
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
                                endAngle={-90}
                                labelLine={false}
                                label={renderCustomizedLabel}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="absolute text-center flex flex-col pointer-events-none">
                        <span className="text-2xl font-medium font-[Archivo] text-[#1A1A1A] tracking-tight">
                            $84,750
                        </span>
                        <span className="text-xs font-medium font-[Archivo] text-[#71717A] mt-0.5">
                            Total Subscription
                        </span>
                    </div>
                </div>

                <div className="flex w-full flex-col max-w-[300px] divide-y divide-solid divide-[#F4F4F5] sm:col-span-6">
                    {data.map((item) => (
                        <div
                            key={item.name}
                            className="flex w-full flex-wrap items-center justify-between gap-2 py-2.5 font-[Archivo] first:pt-0 last:pb-0 sm:flex-nowrap sm:gap-0"
                        >
                            <div className="flex items-center gap-2.5 min-w-[120px]">
                                <span
                                    className="w-3 h-3 rounded-full shrink-0"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-base font-medium text-[#252631] capitalize">
                                    {item.name}
                                </span>
                            </div>

                            <span className="text-base font-medium text-[#71717A] text-right">
                                {item.value}%
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}