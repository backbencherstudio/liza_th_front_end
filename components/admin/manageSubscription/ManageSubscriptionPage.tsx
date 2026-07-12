import DashboardStatsIcons from '@/components/icons/SupAdminIcon';
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import StatsCard from '@/components/reusable/StatusCard';
import React from 'react'
import ManageSubscriptionTable from './ManageSubscriptionTable';

export default function ManageSubscriptionPage() {
    const dashboardStats = [
        {
            id: 1,
            title: "Total Plans",
            value: "5",
            change: "+24 this month",
            icon: DashboardStatsIcons.TotalUser
        },
        {
            id: 2,
            title: "Active Plans",
            value: "3",
            change: "+14.2%",
            icon: DashboardStatsIcons.TotalUser
        },
        {
            id: 3,
            title: "Total Subscribers",
            value: "4,658",
            change: "+12% vs last",
            icon: DashboardStatsIcons.TotalUser
        },
        {
            id: 4,
            title: "Revenue",
            value: "$68.3K",
            change: "+14.2%",
            icon: DashboardStatsIcons.TotalUser
        },
    ];
    return (
        <div>
            <div>
                <DashboardPageTitle title='Manage Subscription'
                    description='Monitor and manage all subscription plans'
                />
            </div>

            <div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
                    {
                        dashboardStats.map((item) => (
                            <StatsCard
                                title={item.title}
                                value={item.value}
                                description={item.change}
                                icon={item.icon}
                            />
                        ))
                    }
                </div>
            </div>

            <div>
                <ManageSubscriptionTable />
            </div>
        </div>
    )
}
