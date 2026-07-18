"use client";

import React from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";


const data = [
    { name: "Jan", Active: 42, Renewals: 69, Cancel: 39 },
    { name: "Feb", Active: 50, Renewals: 17, Cancel: 21 },
    { name: "Mar", Active: 35, Renewals: 32, Cancel: 37 },
    { name: "Apr", Active: 82, Renewals: 20, Cancel: 42 },
    { name: "May", Active: 15, Renewals: 41, Cancel: 70 },
    { name: "Jun", Active: 15, Renewals: 11, Cancel: 98 },
    { name: "July", Active: 53, Renewals: 57, Cancel: 93 },
    { name: "Aug", Active: 36, Renewals: 15, Cancel: 40 },
    { name: "Sep", Active: 94, Renewals: 56, Cancel: 82 },
    { name: "Oct", Active: 94, Renewals: 52, Cancel: 29 },
    { name: "Nov", Active: 54, Renewals: 92, Cancel: 63 },
    { name: "Dec", Active: 15, Renewals: 42, Cancel: 88 },
];


const RenderCustomDot = (props: any) => {
    const { cx, cy, stroke } = props;
    if (!cx || !cy) return null;

    return (
        <g>

            <circle cx={cx} cy={cy} r={8} fill={stroke} fillOpacity={0.2} />

            <circle cx={cx} cy={cy} r={4} fill="#fff" stroke={stroke} strokeWidth={1} />

            <circle cx={cx} cy={cy} r={2.5} fill={stroke} />
        </g>
    );
};

export default function SubscriptionChart() {
    return (
        <div className="w-full h-full max-w-4xl p-6 bg-white rounded-2xl border border-gray-100  font-sans">

            <h2 className="font-[Archivo] text-[#1C1C1E] text-[18px]  md:text-[20px] font-medium leading-[24px] sm:leading-[26px] mb-6 px-2">
                Monthly Subscription Activity
            </h2>

            <div className="w-full h-[300px] ">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{ top: 10, right: 20, left: -20, bottom: 10 }}
                    >
                        <defs>
                            {/* Active (Green) Gradient */}
                            <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4ade80" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#4ade80" stopOpacity={0.01} />
                            </linearGradient>


                            <linearGradient id="colorRenewals" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.01} />
                            </linearGradient>


                            <linearGradient id="colorCancel" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f97316" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#f97316" stopOpacity={0.01} />
                            </linearGradient>
                        </defs>


                        <CartesianGrid
                            strokeDasharray="3 3"
                            vertical={true}
                            horizontal={true}
                            stroke="#cbd5e1"
                        />

                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            axisLine={{ stroke: '#64748b' }}
                            tick={{ fill: '#64748b', fontSize: 13 }}
                            dy={10}
                        />

                        <YAxis
                            domain={[0, 100]}
                            tickCount={6}
                            tickLine={false}
                            axisLine={false}
                            tick={{ fill: '#64748b', fontSize: 13 }}
                            dx={-5}
                        />

                        <Tooltip />

                        {/* Active Line & Area */}
                        <Area
                            type="linear"
                            dataKey="Active"
                            stroke="#4ade80"
                            strokeWidth={1.5}
                            fillOpacity={1}
                            fill="url(#colorActive)"
                            dot={<RenderCustomDot />}
                            activeDot={{ r: 6 }}
                        />

                        {/* Renewals Line & Area */}
                        <Area
                            type="linear"
                            dataKey="Renewals"
                            stroke="#3b82f6"
                            strokeWidth={1.5}
                            fillOpacity={1}
                            fill="url(#colorRenewals)"
                            dot={<RenderCustomDot />}
                            activeDot={{ r: 6 }}
                        />

                        {/* Cancel Line & Area */}
                        <Area
                            type="linear"
                            dataKey="Cancel"
                            stroke="#f97316"
                            strokeWidth={1.5}
                            fillOpacity={1}
                            fill="url(#colorCancel)"
                            dot={<RenderCustomDot />}
                            activeDot={{ r: 6 }}
                        />


                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            iconType="circle"
                            iconSize={8}
                            wrapperStyle={{ paddingTop: '20px', fontSize: '14px', color: '#475569' }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}