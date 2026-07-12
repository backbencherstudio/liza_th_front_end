"use client"
import DashboardStatsIcons from '@/components/icons/SupAdminIcon';
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import StatsCard from '@/components/reusable/StatusCard';
import React from 'react'
import ManageSubscriptionTable from './ManageSubscriptionTable';
import CustomerServiceIcon from '@/components/icons/CustomerService';
import SubscriptionCard from './SubscriptionCard';

export default function ManageSubscriptionPage() {
    const dashboardStats = [
        {
            id: 1,
            title: "Total Plans",
            value: "5",
            change: "+24 this month",
            icon: CustomerServiceIcon.TotalPlans
        },
        {
            id: 2,
            title: "Active Plans",
            value: "3",
            change: "+14.2%",
            icon: CustomerServiceIcon.ActivePlans
        },
        {
            id: 3,
            title: "Total Subscribers",
            value: "4,658",
            change: "+12% vs last",
            icon: CustomerServiceIcon.TotalSubsCriber
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
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
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
                <SubscriptionCard />
            </div>

            <div>
                <ManageSubscriptionTable />
            </div>


        </div>
    )
}
