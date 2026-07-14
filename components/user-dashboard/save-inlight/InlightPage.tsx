"use client"
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle';
import { useState } from 'react';
import { InlightCard } from '@/components/user-dashboard/save-inlight/InlightCard';

const templateAnalyticsData = [
    {
        id: "1",
        title: "xxxxxxxx",
        img: "/assets/SuperAdmin/SuperAnalytic.png",
        description: "Executive Summary Dashboard",
        industry: "Industry: General",
        date: "20/6/2026"
    },
    // ... rest of your data
];

export default function InlightPage() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <div>
            <DashboardPageTitle title="Save Inlight" />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 py-8'>
                {templateAnalyticsData.map((item) => (
                    <InlightCard
                        key={item.id}
                        {...item}
                        isSelected={selectedId === item.id}
                        onSelect={setSelectedId}
                    />
                ))}
            </div>
        </div>
    );
}