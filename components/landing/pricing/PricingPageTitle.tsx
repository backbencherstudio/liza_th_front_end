import TwoStarIcon from '@/components/icons/TwoStarIcon'
import React from 'react'

export default function PriceingPageTitle() {
    return (
        <div>
            {/* Top Badge/Pill */}
            <div className="flex items-center justify-center gap-2.5 border border-white/40 bg-[#F4F8FF] px-4 py-1.5 rounded-full mb-4 w-max mx-auto">
                <span>
                    <TwoStarIcon />
                </span>
                <span className="text-[#151513] font-['Archivo'] text-sm font-medium">
                    Pricing
                </span>
            </div>

            {/* Responsive Heading */}
            <h1 className="self-stretch mx-auto text-center text-[#151513] font-['Archivo'] font-semibold mb-4 text-3xl leading-[50px] sm:text-5xl sm:leading-[56px]">
                Simple Plans for Every Stage of Growth
            </h1>

            {/* Responsive Subtext / Description */}
            <p className="self-stretch max-w-[757px] mx-auto text-center text-[#3D3D3C] font-['Archivo'] font-normal text-base leading-[22px]">
                Start with a free trial and upgrade when you are ready to unlock more financial intelligence.
            </p>
        </div>
    )
}
