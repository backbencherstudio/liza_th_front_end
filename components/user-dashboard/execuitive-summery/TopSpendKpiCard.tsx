"use client";

import DashboardStatsIcons from "@/components/icons/SupAdminIcon";
import UserDashboardIcons from "@/components/icons/UserDashboardIcons";
import { TrendingDown, DollarSign, Clock } from "lucide-react";

const burnRateData = {
    title: "BURN RATE",
    description: "The amount of cash your business spends each month to operate. It shows how quickly you are using cash.",
    points: [
        {
            icon: UserDashboardIcons.RunwayIcon,
            title: "RUNWAY KPI",
            description: "Estimated months you can operate before cash runs out based on current burn rate trends."
        },
        {
            icon: UserDashboardIcons.BrunIcon,
            title: "BURN RATE",
            description: "The amount of cash your business spends each month to operate. It shows how quickly you are using cash."
        },
        {
            icon: UserDashboardIcons.CashFlowIcon,
            title: "Cash Flow Forecast:",
            description: " Estimates future cash balances under different business conditions using projected cash received and cash spent."
        }
    ]
};

export default function TopSpendKpiCard() {


    return (
        <div className="py-4">
            <div className="flex items-start gap-4">


                <div className="flex-1">


                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
                        {burnRateData.points.map((point, index) => (
                            <div key={index} className=" gap-3 bg-[#F2F4F6] p-3 rounded-sm">
                                <div className="flex gap-1.5 ">
                                    {/* <div className="w-8 h-8  rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                                        {point.icon === "dollar" && <DollarSign className="w-5 h-5 text-blue-600" />}
                                        {point.icon === "clock" && <Clock className="w-5 h-5 text-amber-600" />}
                                        {point.icon === "trend" && <TrendingDown className="w-5 h-5 text-red-600" />}
                                    </div> */}
                                    <div>
                                        {point.icon && <point.icon />}
                                    </div>
                                    <p className="font-inter text-[10.575px] font-bold leading-[14.1px] tracking-[0.529px] text-[#00386C]">{point.title}</p>
                                </div>
                                <p className="font-archivo text-[12px] font-normal leading-[16px] text-[#424750]">{point.description}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}