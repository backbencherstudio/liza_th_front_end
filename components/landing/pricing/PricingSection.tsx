import React, { useState } from 'react';
import PricingCard from './PricingCard';
import PricingToggle from './PricingToggle';
import { PRICING_DATA } from './pricingData';

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 pt-3.5 md:pt-4 ">
      <div className="flex items-center justify-center mb-10">
        {/* Pass down operational actions to toggle handler */}
        <PricingToggle billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
      </div>

      <section className="max-w-[1272px] w-full flex flex-col md:flex-row items-stretch justify-center gap-6">
        {PRICING_DATA.map((plan) => (
          <PricingCard key={plan.id} plan={plan} billingPeriod={billingPeriod} />
        ))}
      </section>
    </div>
  );
}