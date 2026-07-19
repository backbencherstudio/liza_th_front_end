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
    { name: "Jan", spend: 110, profit: 320 },
    { name: "Feb", spend: 45, profit: 120 },
    { name: "Mar", spend: 115, profit: 340 },
    { name: "Apr", spend: 45, profit: 130 },
    { name: "May", spend: 135, profit: 410 },
    { name: "Jun", spend: 260, profit: 720 },
    { name: "Jul", spend: 200, profit: 580 },
    { name: "Aug", spend: 230, profit: 640 },
    { name: "Sep", spend: 280, profit: 890 },
    { name: "Oct", spend: 180, profit: 510 },
    { name: "Nov", spend: 110, profit: 310 },
    { name: "Dec", spend: 160, profit: 460 },
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const currentData = payload[0].payload;
        return (
            <div className="relative bg-white px-6 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-50 flex flex-col items-start min-w-[160px]">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
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
        <div className="w-full max-w-3xl h-full bg-white p-5 rounded-3xl border border-gray-100 font-sans shadow-sm">
            <h2 className="font-[Archivo] text-[#1C1C1E] text-[18px] md:text-[20px] font-medium leading-[24px] sm:leading-[26px] mb-8">Monthly Spend</h2>

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
                            dataKey="spend"
                            radius={[5, 5, 5, 5]}
                            barSize={18}
                        >
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







// "use client";

// import React, { useState } from "react";
// import {
//     BarChart,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     ResponsiveContainer,
//     Cell,
// } from "recharts";

// const rawData = [
//     { name: "Jan", spend: 110, profit: 320 },
//     { name: "Feb", spend: 45, profit: 120 },
//     { name: "Mar", spend: 115, profit: 340 },
//     { name: "Apr", spend: 45, profit: 130 },
//     { name: "May", spend: 135, profit: 410 },
//     { name: "Jun", spend: 260, profit: 720 },
//     { name: "Jul", spend: 200, profit: 580 },
//     { name: "Aug", spend: 230, profit: 640 },
//     { name: "Sep", spend: 280, profit: 890 },
//     { name: "Oct", spend: 180, profit: 510 },
//     { name: "Nov", spend: 110, profit: 310 },
//     { name: "Dec", spend: 160, profit: 460 },
// ];

// // The light gray "cap" sits on top of each colored bar and is only a small,
// // fixed amount taller than that bar's own spend value — NOT a uniform total
// // height across all bars (that made every bar look "full"/equal height).
// // remainder is stacked ON TOP of spend with the same stackId, so the colored
// // segment reads as a bar nested inside a slightly taller gray bar.
// const GRAY_CAP = 40;
// const data = rawData.map((d) => ({
//     ...d,
//     remainder: GRAY_CAP,
// }));

// const CustomTooltip = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//         const currentData = payload[0].payload;
//         return (
//             <div className="relative bg-white px-6 py-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-slate-50 flex flex-col items-start min-w-[160px]">
//                 <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" />
//                 <div className="flex items-center gap-2">
//                     <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]" />
//                     <span className="text-gray-500 font-medium text-sm">Profit</span>
//                 </div>
//                 <div className="text-2xl font-bold text-gray-900 mt-1">
//                     ${currentData.profit.toFixed(2)}
//                 </div>
//             </div>
//         );
//     }
//     return null;
// };

// export default function MonthlySpendChart() {
//     const [activeIndex, setActiveIndex] = useState(5);

//     const handleMouseMove = (state) => {
//         if (state && state.activeTooltipIndex !== undefined) {
//             setActiveIndex(state.activeTooltipIndex);
//         }
//     };

//     const handleMouseLeave = () => {
//         setActiveIndex(5);
//     };

//     const getDotPositionX = (index) => {
//         const startPos = 5.2;
//         const step = 8.08;
//         return `${startPos + index * step}%`;
//     };

//     return (
//         <div className="w-full max-w-3xl h-full bg-white rounded-3xl border border-gray-100 font-sans shadow-sm overflow-hidden">
//             {/* Light background band across the top of the card */}
//             <div className="bg-gradient-to-b from-blue-50/70 to-transparent px-5 pt-5 pb-8">
//                 <h2 className="font-[Archivo] text-[#1C1C1E] text-[18px] md:text-[20px] font-medium leading-[24px] sm:leading-[26px]">
//                     Monthly Spend
//                 </h2>
//             </div>

//             {/* Gradient + diagonal stripe pattern for the colored (spend) segment */}
//             <svg width="0" height="0" className="absolute">
//                 <defs>
//                     <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8" />
//                         <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.5" />
//                     </linearGradient>

//                     <pattern
//                         id="barPattern"
//                         width="12"
//                         height="12"
//                         patternUnits="userSpaceOnUse"
//                         patternTransform="rotate(45)"
//                     >
//                         <rect width="12" height="12" fill="url(#barGradient)" />
//                         <line
//                             x1="0"
//                             y1="0"
//                             x2="0"
//                             y2="12"
//                             stroke="#3b82f6"
//                             strokeWidth="2.5"
//                             style={{ opacity: 0.35 }}
//                         />
//                     </pattern>
//                 </defs>
//             </svg>

//             <div className="w-full h-[320px] relative px-5 pb-5">
//                 {activeIndex !== null && data[activeIndex] && (
//                     <div
//                         className="absolute top-[23%] -translate-x-1/2 z-20 pointer-events-none transition-all duration-200 ease-out"
//                         style={{ left: getDotPositionX(activeIndex) }}
//                     >
//                         <div className="w-5 h-5 bg-[#3b82f6] rounded-full border-4 border-white shadow-[0_0_10px_rgba(59,130,246,0.5)] flex items-center justify-center">
//                             <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
//                         </div>
//                     </div>
//                 )}

//                 <ResponsiveContainer width="100%" height="100%">
//                     <BarChart
//                         data={data}
//                         margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
//                         onMouseMove={handleMouseMove}
//                         onMouseLeave={handleMouseLeave}
//                     >
//                         <XAxis
//                             dataKey="name"
//                             axisLine={false}
//                             tickLine={false}
//                             tick={{ fill: "#94a3b8", fontSize: 13, fontWeight: 500 }}
//                             dy={10}
//                         />
//                         <YAxis
//                             domain={[0, 400]}
//                             ticks={[0, 50, 100, 150, 200, 250, 300, 400]}
//                             axisLine={false}
//                             tickLine={false}
//                             tick={{ fill: "#94a3b8", fontSize: 13 }}
//                             tickFormatter={(value) => `$${value}`}
//                         />
//                         <Tooltip
//                             content={<CustomTooltip />}
//                             cursor={false}
//                             defaultIndex={5}
//                         />

//                         {/* Bottom segment: the actual spend value, striped/gradient fill */}
//                         <Bar dataKey="spend" stackId="a" barSize={18} radius={[0, 0, 5, 5]}>
//                             {data.map((entry, index) => (
//                                 <Cell key={`spend-${index}`} fill="url(#barPattern)" stroke="none" />
//                             ))}
//                         </Bar>

//                         {/* Top segment: fills the rest of the track in light gray, so the
//                             colored bar reads as nested inside the taller gray bar */}
//                         <Bar
//                             dataKey="remainder"
//                             stackId="a"
//                             fill="#EEF1F5"
//                             stroke="none"
//                             barSize={18}
//                             radius={[5, 5, 0, 0]}
//                             isAnimationActive={false}
//                         />
//                     </BarChart>
//                 </ResponsiveContainer>
//             </div>
//         </div>
//     );
// }