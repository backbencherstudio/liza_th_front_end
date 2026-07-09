"use client"
import DashboardStatsIcons from '@/components/icons/SupAdminIcon';
import StatsCard from '@/components/reusable/StatusCard';

import { Calendar, Menu, Plus, Search } from 'lucide-react'
import Image from 'next/image';
import React, { useState } from 'react'

export default function page() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const templateOverviewData = [
        {
            id: 1,
            title: "Total Templates",
            icon: DashboardStatsIcons.ActiveInsight,
            value: "12,453",
            description: "+12.5% from last month",
            trend: "up",
        },
        {
            id: 2,
            title: "Published",
            icon: DashboardStatsIcons.Published,
            value: "5,340",
            description: "+8.2% from last month",
            trend: "up",
        },
        {
            id: 3,
            title: "Drafts",
            icon: DashboardStatsIcons.Draft,
            value: "1,247",
            description: "+5.1% from last month",
            trend: "up",
        },
        {
            id: 4,
            title: "Total Usage",
            icon: DashboardStatsIcons.TotalUser,
            value: "63.2%",
            description: "-0.3% from last month",
            trend: "down",
        },
    ];


    const templateAnalyticsData = [
        {
            id: 1,
            title: "Financial Performance Dashboard",
            img: "/assets/SuperAdmin/SuperAnalytic.png",
            description: "1245 uses",
        },
        {
            id: 2,
            title: "Financial Performance Dashboard",
            img: "/assets/SuperAdmin/SuperAnalytic.png",
            description: "1245 uses"
        },
        {
            id: 3,
            title: "Financial Performance Dashboard",
            img: "/assets/SuperAdmin/SuperAnalytic.png",
            description: "1245 uses"
        },

    ];
    return (
        <div>
            <div>
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    {/* Left */}
                    <div>
                        <h1 className="pb-3 text-[32px] font-semibold leading-[46px] text-[#151513]">
                            Platform Overview
                        </h1>
                        <p className="text-base font-normal leading-[22px] text-[#3D3D3C]">
                            Welcome back! Here's what's happening with your platform today.
                        </p>
                    </div>

                    {/* Right */}
                    <button className="flex items-center gap-2 rounded-lg bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] px-6 py-3.5 text-sm font-medium text-white transition  cursor-pointer">
                        <Plus size={18} />
                        Template Step
                    </button>
                </div>
            </div>

            <div className="py-6">
                <div className="flex flex-col gap-4 rounded-xl bg-[#F5F5F5] p-4 lg:flex-row lg:items-center lg:justify-between">
                    {/* Search */}
                    <div className="relative w-full lg:flex-1">
                        <Search
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]"
                        />

                        <input
                            type="text"
                            placeholder="Search"
                            className="h-12 w-full rounded-lg border border-[#E5E7EB] bg-white pl-11 pr-4 outline-none focus:border-[#bfc1c4]"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <select className="h-12 rounded-lg border border-[#E5E7EB] bg-white px-4 outline-none">
                            <option>All category</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>

                        <button className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white hover:bg-gray-50">
                            <Calendar size={18} />
                        </button>

                        <button className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white hover:bg-gray-50">
                            <Menu size={18} />
                        </button>
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4'>
                {templateOverviewData.map((item) => (
                    <StatsCard
                        key={item.id}
                        title={item.title}
                        value={item.value}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>

            {/* analytic data */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 py-8 '>
                {
                    templateAnalyticsData.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            className={`cursor-pointer rounded-xl p-4 transition-all
            ${selectedId === item.id
                                    ? "border-2 border-[#2563EB] bg-[#F2F5FB]"
                                    : "border-2 border-transparent bg-[#F2F5FB] "
                                }`}
                        >
                            <Image src={item.img} alt="" width={328} height={216} className='w-full ' />
                            <div className='py-5'>
                                <p className='text-xl font-medium leading-[22px] text-[#151513] pb-2'>{item.title}</p>
                                <p className='text-base font-normal leading-[26px] text-[#3D3D3C]'>{item.description}</p>
                            </div>
                            <div className='border border-[#2563EB] rounded-lg '>
                                <button className='text-base font-semibold py-3.5 px-6 leading-[14px] text-center items-center flex  justify-center mx-auto cursor-pointer text-[#2563EB]'>View Dashboard</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
