import React from "react";
import PricingIcon from "@/components/icons/PricingIcon";
import FeatureIcon from "@/components/icons/FeatureIcon";
import CustomButton from "@/components/reusable/CustomButton";

interface PricingPlan {
    title: string;
    subtext: string;
    price: string | number;
    features: string[];
    isPrimaryCta?: boolean;
    ctaText: string;
}

const pricingData: PricingPlan[] = [
    {
        title: "Premium",
        subtext: "per seat / user",
        price: 59.99,
        features: [
            "Up to 50 dashboards/month",
            "All 4 dashboard types",
            "File upload (CSV, Excel, PDF)",
            "Save & export dashboards",
            "Email support",
        ],
        ctaText: "Edit",
    },
    {
        title: "Pro Plan",
        subtext: "per seat / user",
        price: 99.99,
        features: [
            "Unlimited dashboards",
            "All 4 dashboard types",
            "All file formats supported",
            "Priority generation queue",
            "Advanced analytics insights",
            "Priority support",
        ],
        isPrimaryCta: true,
        ctaText: "Edit",
    },
    {
        title: "Enterprise",
        subtext: "Will be customized based on business need.",
        price: "Custom pricing",
        features: [
            "Everything in Pro",
            "Custom dashboard templates",
            "Dedicated account manager",
            "API access",
            "SSO & team management",
            "Custom integrations",
        ],
        ctaText: "Edit",
    },
];

interface PricingCardProps {
    plan: PricingPlan;
}

function PricingCard({ plan }: PricingCardProps) {
    const isCustom = typeof plan.price === "string";

    return (
        <div className="flex flex-col items-start gap-4 flex-1 w-full max-w-full border 
                    [background:linear-gradient(180deg,rgba(14,105,249,0.10)_0%,rgba(0,147,255,0.00)_38.44%)] 
                    backdrop-blur-[20px] px-4 py-5 rounded-[20px] border-solid border-[#EDEDED]
                    transition-all  hover:border-[#0A206D]/30">

            {/* Header */}
            <div className="flex flex-col items-start w-full">
                <div className="flex items-center gap-2 text-[#0A206D] mb-1">
                    <span className="shrink-0">
                        <PricingIcon />
                    </span>
                    <h3 className="font-['Archivo'] text-2xl font-medium leading-[34px] 
                         bg-gradient-to-br from-[#0A206D] to-[#3B69D0] bg-clip-text text-transparent">
                        {plan.title}
                    </h3>
                </div>

                <p className="self-stretch text-[#3D3D3C] font-['Archivo'] text-base font-normal leading-[22px] mb-4">
                    {plan.subtext}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 font-['Archivo'] h-12">
                    {isCustom ? (
                        <span className="text-[#151513] font-['Archivo'] text-3xl font-semibold leading-[50px]">
                            {plan.price}
                        </span>
                    ) : (
                        <>
                            <span className="text-[#151513] font-['Archivo'] text-3xl font-semibold leading-[50px]">
                                ${Number(plan.price).toFixed(2)}
                            </span>
                            <span className="text-[#151513] font-['Archivo'] text-base font-normal leading-6">
                                /month
                            </span>
                        </>
                    )}
                </div>
            </div>

            <div className="w-full h-px bg-[#EDEDED]" />

            {/* Features */}
            <div className="flex flex-col w-full gap-4 flex-grow mt-3">
                <h4 className="text-[#3D3D3C] font-['Archivo'] text-lg font-medium leading-6">
                    Key Features :
                </h4>

                <div className="flex flex-col gap-3.5 w-full">
                    {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                            <div className="shrink-0 mt-0.5">
                                <FeatureIcon />
                            </div>
                            <span className="flex-1 text-[#3D3D3C] font-['Archivo'] text-sm font-normal leading-[22px]">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <div className="w-full mt-auto pt-4">
                {plan.isPrimaryCta ? (
                    <button
                        className="w-full flex h-14 items-center justify-center px-6 rounded-xl 
                       [background:linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] 
                       text-white font-['Archivo'] text-base font-semibold 
                       transition-all hover:opacity-95 active:scale-[0.985] shadow-md"
                    >
                        {plan.ctaText}
                    </button>
                ) : (
                    <CustomButton variant="outline" className="w-full h-14">
                        {plan.ctaText}
                    </CustomButton>
                )}
            </div>
        </div>
    );
}

// Main Component - Just Cards (No Toggle)
export default function SubscriptionCard() {
    return (
        <div className="w-full py-6 md:py-12  bg-white">
            <div className="">
                {/* Header */}
                <div className=" mb-4 md:mb-8">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-[#151513] ">Active Plan</h2>

                </div>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  w-full">
                    {pricingData.map((plan, index) => (
                        <PricingCard
                            key={index}
                            plan={plan}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}