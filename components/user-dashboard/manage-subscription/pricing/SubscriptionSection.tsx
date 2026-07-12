"use client"
import React, { useState } from 'react';
import PricingCard from './SubscriptionCard';
import PricingToggle from './SubscriptionToggle';
import { PRICING_DATA } from './pricingData';

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="w-full flex flex-col items-center justify-center  pt-3.5 md:pt-4 ">
      <div className="flex items-center justify-center mb-10">
        {/* Pass down operational actions to toggle handler */}
        <PricingToggle billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
      </div>

      <section className=" w-full flex flex-col md:flex-row  justify-between gap-6">
        {PRICING_DATA.map((plan) => (
          <PricingCard key={plan.id} plan={plan} billingPeriod={billingPeriod} />
        ))}
      </section>

      <div className="flex w-full justify-between py-2 px-6 bg-[#F9FAFF] mt-4 text-[#4A4C56] text-sm font-normal leading-5">
        <p className="text-[#3D3D3C] font-['Archivo'] text-sm font-normal leading-[22px]">© 2026 Spike Technology. All rights reserved.</p>
        <div className="flex gap-4">
          <p className="text-[#3D3D3C] font-['Archivo'] text-sm font-normal leading-[22px]">Terms & Conditions</p>
          <p className="text-[#3D3D3C] font-['Archivo'] text-sm font-normal leading-[22px]">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}