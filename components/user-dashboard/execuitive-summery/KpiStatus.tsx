"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

const kpiData = [
    {
        title: "TOTAL REVENUE",
        value: "$267,100",
        change: "12.3%",
        trend: "up",
        subtext: "",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        title: "NET PROFIT",
        value: "$42,680",
        change: "5.1%",
        trend: "down",
        subtext: "After all expenses",
        color: "text-red-600",
        bg: "bg-red-50",
    },
    {
        title: "GROSS MARGIN",
        value: "8.3%",
        change: "12.3%",
        trend: "up",
        subtext: "Blended avg",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        title: "BURN RATE",
        value: "$16,145",
        change: "",
        trend: "up",
        subtext: "Monthly avg",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
    },
];

export default function KpiCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((item, index) => (
                <div
                    key={index}
                    className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow transition-all"
                >
                    <p className="font-archivo text-[12px] font-bold leading-[16px] text-[#4A4C56]">
                        {item.title}
                    </p>

                    <div className="py-1.5 ">
                        <span className="font-archivo text-[24px] font-medium leading-[32px] text-[#070707]">
                            {item.value}
                        </span>
                    </div>
                    <div className="pb-1.5">
                        <span className="text-sm text-gray-500">{item.subtext}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        {item.trend === "up" ? (
                            <div className={`flex items-center gap-1 text-sm font-medium ${item.color} ${item.bg} px-2.5 py-1 rounded-full`}>
                                <TrendingUp size={16} />
                                <span>{item.change}</span>
                            </div>
                        ) : (
                            <div className={`flex items-center gap-1 text-sm font-medium ${item.color} bg-red-50 px-2.5 py-1 rounded-full`}>
                                <TrendingDown size={16} />
                                <span>{item.change}</span>
                            </div>
                        )}


                    </div>


                </div>
            ))}
        </div>
    );
}