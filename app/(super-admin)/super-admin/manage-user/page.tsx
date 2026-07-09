import DashboardStatsIcons from '@/components/icons/SupAdminIcon';
import StatsCard from '@/components/reusable/StatusCard';
import React from 'react'

export default function page() {
    const usersOverviewData = [
        {
            id: 1,
            title: "Total Users",
            icon: DashboardStatsIcons.User,
            value: "2,453",
            description: "+245 this month",

        },
        {
            id: 2,
            title: "Active Now",
            icon: DashboardStatsIcons.ActiveNow,

            value: "340",
            description: "Currently active users",

        },
        {
            id: 3,
            title: "Suspended",
            icon: DashboardStatsIcons.Suspends,

            value: "3.2%",
            description: "Needs review",

        },
        {
            id: 4,
            title: "New Users",
            icon: DashboardStatsIcons.ManageNewUser,

            value: "7",
            description: "+2% this month",

        },
    ];
    return (
        <div>
            <div>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    {/* Left */}
                    <div>
                        <h1 className="pb-3 text-[32px] font-semibold leading-[46px] text-[#151513]">
                            Manage Users
                        </h1>
                        <p className="text-base font-normal leading-[22px] text-[#3D3D3C]">
                            View and manage all user accounts
                        </p>
                    </div>

                    {/* Right */}

                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-6 pb-4 sm:grid-cols-2 lg:grid-cols-4">
                {
                    usersOverviewData.map((item) => (
                        <StatsCard
                            key={item.id}
                            title={item.title}
                            value={item.value}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))
                }
            </div>
        </div>
    )
}
