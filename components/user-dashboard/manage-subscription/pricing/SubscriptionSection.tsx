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

    </div>
  );
}