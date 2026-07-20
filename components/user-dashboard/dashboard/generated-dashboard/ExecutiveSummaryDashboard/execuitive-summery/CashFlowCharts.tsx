"use client";
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

const data = [
    { name: "Jan", actual: 15, baseline: 180 },
    { name: "Feb", actual: 55, baseline: 210 },
    { name: "Mar", actual: 80, baseline: 220 },
    { name: "Apr", actual: 70, baseline: 225 },
    { name: "May", actual: 110, baseline: 225 },
    { name: "Jun", actual: 108, baseline: 220 },
    { name: "Jul", actual: 220, baseline: 215 },
    { name: "Aug", actual: 105, baseline: 210 },
    { name: "Sep", actual: 115, baseline: 208 },
    { name: "Oct", actual: 130, baseline: 208 },
    { name: "Nov", actual: 60, baseline: 211 },
    { name: "Dec", actual: 110, baseline: 215 },
    { name: "Jan", actual: 220, baseline: 225 },
    { name: "Feb", actual: 150, baseline: 235 },
];

export default function CashFlowCharts() {
    return (
        <div className="w-full h-full rounded-[24px] border border-[#E9E9EA] bg-white p-6 md:p-8 shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
            <h3 className="font-[Archivo] text-[#1C1C1E] text-[18px] sm:text-[20px] font-medium leading-[24px] sm:leading-[26px] mb-8">
                Cash Flow Forecast
            </h3>
            <div className="h-[360px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 10, left: -20, bottom: 10 }}
                    >
                        <defs>
                            <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1D4ED8" stopOpacity={0.1} />
                                <stop offset="95%" stopColor="#1D4ED8" stopOpacity={0.0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid
                            vertical={false}
                            stroke="#E4E4E7"
                            strokeDasharray="4 4"
                        />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "#A1A1AA",
                                fontSize: 14,
                                fontFamily: "sans-serif"
                            }}
                            dy={8}           // ← এটাকে কমানো হয়েছে (আগে 15 ছিল)
                            angle={0}        // চাইলে এখানে -45/-30 দিতে পারেন
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "#71717A",
                                fontSize: 14,
                                fontFamily: "sans-serif"
                            }}
                            domain={[0, 250]}
                            ticks={[0, 50, 100, 150, 200, 250]}
                            tickFormatter={(val) => `$${val}`}
                        />

                        {/* Blue Solid Line with Gradient Area */}
                        <Area
                            type="monotone"
                            dataKey="actual"
                            stroke="#0A206D"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorActual)"
                            dot={false}
                            activeDot={false}
                        />

                        {/* Black Dotted Line */}
                        <Line
                            type="monotone"
                            dataKey="baseline"
                            stroke="#000000"
                            strokeWidth={2}
                            strokeDasharray="3 3"
                            dot={false}
                            activeDot={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}