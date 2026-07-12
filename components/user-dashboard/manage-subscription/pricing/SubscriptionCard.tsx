import React from "react";
import TickIcon from "@/components/icons/TickIcon";
import { PricingPlan } from "./pricingData";
import PricingIcon from "@/components/icons/PricingIcon";
import FeatureIcon from "@/components/icons/FeatureIcon";
import CustomButton from "@/components/reusable/CustomButton";

interface CardProps {
  plan: PricingPlan;
  billingPeriod: "monthly" | "yearly";
}

export default function PricingCard({ plan, billingPeriod }: CardProps) {
  // Determine text pricing metric display states dynamically
  const isCustom = plan.monthlyPrice === "Custom pricing";
  const displayPrice = !isCustom
    ? (billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice)
    : "Custom pricing";

  return (
    <div className="w-full flex flex-col items-start gap-4 flex-1 border [background:linear-gradient(180deg,rgba(14,105,249,0.10)_0%,rgba(0,147,255,0.00)_38.44%)] backdrop-blur-[20px] px-4 py-5 rounded-[20px] border-solid border-[#EDEDED]">

      {/* Top Header Section */}
      <div className="flex flex-col items-start w-full">
        {/* Badge/Icon + Gradient Title */}
        <div className="flex items-center gap-2 text-[#0A206D] mb-1">
          <span className="shrink-0">
            <PricingIcon />
          </span>
          <h3 className="font-['Archivo'] text-2xl font-medium leading-[34px] bg-gradient-to-br from-[#0A206D] to-[#3B69D0] bg-clip-text text-transparent">
            {plan.title}
          </h3>
        </div>

        {/* Description Subtext */}
        <p className="self-stretch text-[#3D3D3C] font-['Archivo'] text-base font-normal leading-[22px] mb-4">
          {plan.subtext}
        </p>

        {/* Pricing Metrics Section */}
        <div className="flex items-baseline gap-1 font-['Archivo'] h-12">
          {isCustom ? (
            <span className="text-[#151513] font-['Archivo'] text-3xl font-semibold leading-[50px]">
              {displayPrice}
            </span>
          ) : (
            <>
              <span className="text-[#151513] font-['Archivo'] text-3xl font-semibold leading-[50px]">
                ${Number(displayPrice).toFixed(2)}
              </span>
              <span className="text-[#151513] font-['Archivo'] text-base font-normal leading-6">
                /{billingPeriod === "monthly" ? "month" : "year"}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="w-full h-px bg-[#EDEDED]" />

      {/* Features Content Array List */}
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

      {/* Context-aware Button Styles matching your premium layout configuration blueprints */}
      <div className="w-full mt-auto pt-4">
        {plan.isPrimaryCta ? (
          /* Solid Accent Button Variant (Pro Plan) */
          <button className="w-full flex h-14 items-center justify-center px-6 rounded-xl [background:linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] text-white font-['Archivo'] text-base font-semibold transition-opacity hover:opacity-95 cursor-pointer shadow-md">
            {plan.ctaText}
          </button>
        ) : (
          /* Hollow Outline Button Variant with Fading Corner line (Premium & Enterprise) */
          <CustomButton variant="outline" className="w-full">
            {plan.ctaText}
          </CustomButton>
        )}
      </div>

    </div>
  );
}