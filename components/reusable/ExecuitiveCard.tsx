import React from 'react'
import { TrendingUp, TrendingDown, Play } from "lucide-react";
import UserDashboardIcons from '../icons/UserDashboardIcons';

export function ExecuitiveCard({ title, value, change, tag, trend, themeColor = "#1E40AF", badgeBg, badgeColor }: any) {
    return (
        <div
            style={{ borderColor: themeColor }}
            className="w-full rounded-[24px] border-t-[6px] border-b-[2.5px] border-x-[1.2px] border-solid bg-white p-5 font-sans shadow-sm "
        >
            <div className="flex flex-col gap-1.5 ">
                <span className="text-[#4A4C56] font-[Archivo] text-[12px] font-bold leading-[16px]">
                    {title}
                </span>

                <h2 className="font-[Archivo] text-[#070707] text-[20px] sm:text-[22px] lg:text-[24px] font-medium leading-[28px] sm:leading-[30px] lg:leading-[32px]">
                    {value}
                </h2>
                <h4 className="font-[Archivo] text-xs font-normal leading-4 text-[#4A4C56] ">
                    {tag}
                </h4>

                {change && (
                    <div className={` flex w-max items-center gap-1.5 rounded-lg ${badgeBg} px-3.5 py-1 text-[14px] font-semibold ${badgeColor}`}>
                        {trend === "up" ? (
                            <UserDashboardIcons.ArrowUp className="h-4 w-4 shrink-0 " />
                        ) : trend === "down" ? (
                            <UserDashboardIcons.ArrowDown className="h-4 w-4 shrink-0  rotate-90" />
                        ) : null}
                        <span className="font-[Archivo] text-[12px] font-normal leading-[16px] ">{change}</span>
                    </div>
                )}
            </div>
        </div>
    );
}