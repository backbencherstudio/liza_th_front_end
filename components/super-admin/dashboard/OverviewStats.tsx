// components/OverviewStats.tsx
"use client";

import { useState } from "react";
import { Share2, IterationCcw } from "lucide-react";
import { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { DateRangePicker } from "@/components/reusable/DateRangePicker";
import DashboardStatsIcons from "@/components/icons/SupAdminIcon";
import StatsCard from "@/components/reusable/StatusCard";

export default function OverviewStats() {
    const [date, setDate] = useState<DateRange | undefined>(undefined);

    const overviewData = [
        {
            id: 1,
            icon: DashboardStatsIcons.User,
            title: "Total Users",
            value: "12,453",
            description: "+12.5% from last month",
            trend: "up",
        },
        {
            id: 2,
            icon: DashboardStatsIcons.Revenue,
            title: "Monthly Revenue",
            value: "$75,340",
            description: "+8.2% from last month",
            trend: "up",
        },
        {
            id: 3,
            icon: DashboardStatsIcons.ActiveInsight,
            title: "Active Insights",
            value: "1,247",
            description: "+5.1% from last month",
            trend: "up",
        },
        {
            id: 4,
            icon: DashboardStatsIcons.Conversesion,
            title: "Conversion Rate",
            value: "3.2%",
            description: "-0.3% from last month",
            trend: "down",
        },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between ">
                {/* Left */}
                <div>
                    <h1 className="pb-2 text-2xl font-semibold leading-tight text-[#151513] sm:pb-3 sm:text-[32px] sm:leading-11.5">
                        Platform Overview
                    </h1>
                    <p className="text-base font-normal leading-5.5 text-[#3D3D3C]">
                        Welcome back! Here's what's happening with your platform today.
                    </p>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 ">
                    <DateRangePicker date={date} setDate={setDate} />

                    <Button
                        variant="outline"
                        className="flex w-full items-center justify-center gap-2 border-[#E5E7EB] px-4 py-2 text-sm text-[#151513] hover:bg-gray-50 sm:w-auto"
                    >
                        <span>Share</span>
                        <Share2 size={18} className="shrink-0" />
                    </Button>

                    <Button
                        variant="outline"
                        className="flex w-full items-center justify-center gap-2 border-[#E5E7EB] px-4 py-2 text-sm text-[#151513] hover:bg-gray-50 sm:w-auto"
                    >
                        <span>Export</span>
                        <IterationCcw size={18} className="shrink-0" />
                    </Button>
                </div>
            </div>

            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {overviewData.map((item) => (
                    <StatsCard
                        key={item.id}
                        title={item.title}
                        value={item.value}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
}