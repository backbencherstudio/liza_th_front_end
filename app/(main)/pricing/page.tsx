"use client"

import TwoStarIcon from '@/components/icons/TwoStarIcon'

import PricingCard from '@/components/landing/pricing/PricingCard'
import PriceingPageTitle from '@/components/landing/pricing/PricingPageTitle'
import PricingSection from '@/components/landing/pricing/PricingSection'

import React, { useState } from 'react'

export default function PricingPageContainer() {
  return (
    <section className="w-full max-w-[1600px] mx-auto pt-12  px-4 md:pt-20  md:px-8 xl:px-[140px]">
      
      {/* Pricing Title */}
      <PriceingPageTitle />

      {/* cards */}
      <div className="">
        <PricingSection />
      </div>

    </section>
  );
}







