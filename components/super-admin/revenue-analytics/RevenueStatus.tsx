import React from 'react'
import { ChartNoAxesCombined, Crown, Database, DollarSign, TrendingDown, Users, Wallet } from 'lucide-react';

import StatsCard from '@/components/reusable/StatusCard';

export default function RevenueStatus() {

    const dashboardStats = [
        {
            title: "Total Revenue",
            value: "$75,340",
            change: "+182% from last month",
            icon: Database,
        },
        {
            title: "Net Profit",
            value: "$37,000",
            change: "+12% from last month",
            icon: ChartNoAxesCombined,
        },
        {
            title: "Active Subscriptions",
            value: "502",
            change: "+18 this month",
            icon: Crown,
        },
        {
            title: "Churn Rate",
            value: "2.4%",
            change: "-0.5% from last month",
            icon: TrendingDown,
        },
    ];
    return (
        <div>
            <div className='pb-12'>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {dashboardStats.map((item) => (
                        <StatsCard
                            key={item.title}
                            title={item.title}
                            value={item.value}
                            description={item.change}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
