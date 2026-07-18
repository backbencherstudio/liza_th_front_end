import { ExecuitiveCard } from '@/components/reusable/ExecuitiveCard'
import React from 'react'

interface OperationalSatusCardProps {
    title: string;
    value: string;
    change: string;
    tag: string;
    trend: string;
    themeColor?: string;
    badgeBg?: string;
    badgeColor?: string;
}
const StausData: OperationalSatusCardProps[] = [
    {
        title: "Number of Departments",
        value: "$54,400",
        change: "",
        tag: "",
        trend: "",

    },
    {
        title: "Avg Spend Per Department",
        value: "$65,412",
        change: "",
        tag: "",
        trend: "",

    },
    {
        title: "Number of Departments",
        value: "18",
        change: "",
        tag: "",
        trend: "",

    },
    {
        title: "Total Expenses",
        value: "$245,412",
        change: "Target $245K",
        badgeBg: "bg-[#E8F7F0]",
        badgeColor: "text-[#10B981]",
        tag: "",
        trend: "",

    },
]

export default function OperationalSatusCard() {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3'>
                {
                    StausData.map((item, index) => {
                        return (
                            <ExecuitiveCard
                                key={index}
                                title={item.title}
                                value={item.value}
                                change={item.change}

                                badgeBg={item.badgeBg}
                                badgeColor={item.badgeColor}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
