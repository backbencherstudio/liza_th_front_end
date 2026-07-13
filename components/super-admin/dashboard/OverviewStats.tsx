import DashboardStatsIcons from "@/components/icons/SupAdminIcon";
import StatsCard from "@/components/reusable/StatusCard";
import { Share2 } from "lucide-react";
import { IterationCcw } from "lucide-react";

export default function OverviewStats() {

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
        <div className="">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                {/* Left */}
                <div>
                    <h1 className="pb-2 text-2xl font-semibold leading-tight text-[#151513] sm:pb-3 sm:text-[32px] sm:leading-[46px]">
                        Platform Overview
                    </h1>
                    <p className="text-base font-normal leading-[22px] text-[#3D3D3C]">
                        Welcome back! Here's what's happening with your platform today.
                    </p>
                </div>

                {/* Right */}
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                    <select className="w-full rounded-lg border border-[#E5E7EB] px-3 py-2 text-sm text-[#151513] outline-none sm:w-auto">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                        <option>Last 90 days</option>
                    </select>

                    <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E5E7EB] px-4 py-2 text-sm text-[#151513] transition hover:bg-gray-50 sm:w-auto">
                        <span>Share</span>
                        <Share2 size={18} />
                    </button>

                    <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E5E7EB] px-4 py-2 text-sm text-[#151513] transition hover:bg-gray-50 sm:w-auto">
                        <span>Export</span>
                        <IterationCcw size={18} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-6 pb-4 sm:grid-cols-2 lg:grid-cols-4">
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