import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import { MonthlyData, CATEGORY_COLORS } from "./TableDataVendor";

interface TrendBarChartProps {
    data: MonthlyData[];
}

const VendorMonthyTrendChart: React.FC<TrendBarChartProps> = ({ data }) => {
    return (
        <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                    barCategoryGap="32%"
                >
                    <CartesianGrid vertical={false} strokeDasharray="4 6" stroke="#e5e9f0" />

                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 13, fill: "#94a3b8" }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 13, fill: "#94a3b8" }}
                        tickFormatter={(v) => (v === 0 ? "0" : `$${v / 1000}00K`)}
                        domain={[0, 500000]}
                        ticks={[0, 100000, 200000, 300000, 400000, 500000]}
                        width={56}
                    />

                    {/* Stack order bottom -> top: Payroll, Marketing, Operations */}
                    <Bar
                        dataKey="payroll"
                        stackId="a"
                        fill={CATEGORY_COLORS.payroll}
                        radius={[0, 0, 0, 0]}
                        maxBarSize={48}
                    />
                    <Bar
                        dataKey="marketing"
                        stackId="a"
                        fill={CATEGORY_COLORS.marketing}
                        radius={[0, 0, 0, 0]}
                        maxBarSize={48}
                    />
                    <Bar
                        dataKey="operations"
                        stackId="a"
                        fill={CATEGORY_COLORS.operations}
                        radius={[1, 1, 0, 0]}
                        maxBarSize={48}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default VendorMonthyTrendChart;