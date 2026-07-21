import React from "react";

interface StatsCardProps {
    title: string;
    value: string;
    description: string;
    icon: React.ElementType;

}

export default function StatsCard({
    title,
    value,
    description,
    icon: Icon,

}: StatsCardProps) {
    return (
        <div className="flex justify-between rounded-xl border border-[#E5E7EB] p-5">
            <div>
                <p className="pb-1.5 text-base font-normal leading-[22px] text-[#4A4C56]">
                    {title}
                </p>

                <h2 className="pb-1.5 text-2xl font-medium leading-[32px] text-[#070707]">
                    {value}
                </h2>

                <p className="text-[12px] text-[#4A4C56] font-normal leading-[16px]">
                    {description}
                </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E9EFFD]">
                <Icon className="h-5 w-5 text-[#2563EB]" />
            </div>
        </div>
    );
}