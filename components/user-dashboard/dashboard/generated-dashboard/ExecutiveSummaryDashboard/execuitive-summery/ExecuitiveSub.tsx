"use client";

import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
    { name: "Labor", value: 35, color: "#8CDAAA" },
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

            <h3 className="font-[Archivo] text-[#1C1C1E] text-[18px] sm:text-[20px] font-medium leading-[24px] sm:leading-[26px] mb-2">Expense Categories</h3>
            <h4 className="font-[Archivo] text-[#1C1C1E] text-[14px] sm:text-[14px]  leading-[24px] sm:leading-[14px] mb-8">Current plan breakdown</h4>

            <div className="flex flex-col xl:flex-row items-start gap-8">

                {/* Chart */}
                <div className="relative flex h-[220px] w-[220px] shrink-0 items-center justify-center">
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
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        stroke="none"
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="absolute pointer-events-none flex flex-col text-center">
                        <span className="font-[Archivo] text-2xl font-medium tracking-tight text-[#1A1A1A]">
                            $84,750
                        </span>
                        <span className="mt-0.5 font-[Archivo] text-xs font-medium text-[#71717A]">
                            Expense Categories
                        </span>
                    </div>
                </div>

                {/* Legend */}
                <div className="w-full 2xl:w-fit min-w-[180px] divide-y divide-[#F4F4F5]">
                    {data.map((item) => (
                        <div
                            key={item.name}
                            className="flex items-center justify-between gap-8 py-3"
                        >
                            <div className="flex items-center gap-2.5 whitespace-nowrap">
                                <span
                                    className="h-3 w-3 shrink-0 rounded-full"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="font-[Archivo] text-base font-medium capitalize text-[#252631]">
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
    );
}