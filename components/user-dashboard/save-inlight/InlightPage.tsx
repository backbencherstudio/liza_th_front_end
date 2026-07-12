"use client"
import SaveInlightIcon from '@/components/icons/SaveInlightIcon';
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle';
import Image from 'next/image';
import React, { useState } from 'react'

export default function InlightPage() {
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const templateAnalyticsData = [
        {
            id: 1,
            title: "xxxxxxxx",
            img: "/assets/SuperAdmin/SuperAnalytic.png",
            description: "Executive Summary Dashboard",
            industry: "Industry: General",
            date: "20/6/2026"
        },
        {
            id: 2,
            title: "xxxxxxxx",
            img: "/assets/SuperAdmin/SuperAnalytic.png",
            description: "Executive Summary Dashboard",
            industry: "Industry: General",
            date: "20/6/2026"
        },
        {
            id: 3,
            title: "xxxxxxxx",
            img: "/assets/SuperAdmin/SuperAnalytic.png",
            description: "Executive Summary Dashboard",
            industry: "Industry: General",
            date: "20/6/2026"
        },
        {
            id: 4,
            title: "xxxxxxxx",
            img: "/assets/SuperAdmin/SuperAnalytic.png",
            description: "Executive Summary Dashboard",
            industry: "Industry: General",
            date: "20/6/2026",
        },
        {
            id: 5,
            title: "xxxxxxxx",
            img: "/assets/SuperAdmin/SuperAnalytic.png",
            description: "Executive Summary Dashboard",
            industry: "Industry: General",
            date: "20/6/2026"
        },
        {
            id: 6,
            title: "xxxxxxxx",
            img: "/assets/SuperAdmin/SuperAnalytic.png",
            description: "Executive Summary Dashboard",
            industry: "Industry: General",
            date: "20/6/2026"
        },

    ];
    return (
        <div>
            <DashboardPageTitle title="Save Inlight" />

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
                            <div className='relative'>
                                <Image src={item.img} alt="" width={328} height={158} className='w-full h-[158px]' />
                                <div className='absolute top-0 right-0 bg-white rounded-sm border border-[#BBCFF9] p-2 object-contain'>
                                    <SaveInlightIcon.DotIcon />
                                </div>
                            </div>
                            <div className='py-5'>
                                <p className='text-[#151513] text-[20px] font-medium leading-[26px] pb-2'>{item.title}</p>
                                <div className='space-y-1.5'>
                                    <p className='text-[#3D3D3C] font-archivo text-[14px] font-normal leading-[20px]'>{item.description}


                                    </p>
                                    <p className='text-[#3D3D3C] font-archivo text-[14px] font-normal leading-[20px]'>{item.industry}</p>

                                    <p className='text-[#3D3D3C] font-archivo text-[14px] font-normal leading-[20px]'>{item.date}</p>
                                </div>
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
