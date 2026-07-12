import DashboardStatsIcons from '@/components/icons/SupAdminIcon';
import StatsCard from '@/components/reusable/StatusCard';
import React from 'react'
import DiscountTable from './DiscountTable';
import CustomerServiceIcon from '@/components/icons/CustomerService';

export default function DiscountPage() {
    const accountStats = [
        {
            id: 1,
            title: "Active Accounts",
            value: "183",
            description: "+4 this month",
            icon: CustomerServiceIcon.ActiveAcount
        },
        {
            id: 2,
            title: "Total Usage",
            value: "183",
            description: "+12.5%",
            icon: CustomerServiceIcon.Arrow
        },
        {
            id: 3,
            title: "Expiring Soon",
            value: "183",
            description: "Within 7 days",
            icon: CustomerServiceIcon.Expering
        },
    ];
    return (
        <div>
            <div className='mt-6'>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
                    {
                        accountStats.map((item) => (
                            <StatsCard
                                title={item.title}
                                value={item.value}
                                description={item.description}
                                icon={item.icon}
                            />
                        ))
                    }
                </div>
            </div>

            <div>
                <DiscountTable />
            </div>
        </div>
    )
}
