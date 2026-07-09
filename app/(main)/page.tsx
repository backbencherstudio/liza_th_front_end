import AboutUs from '@/components/landing/AboutUs'
import Features from '@/components/landing/Features'
import HowItWork from '@/components/landing/HowItWork'
import WorksWithTools from '@/components/landing/Works-with-tools'
import React from 'react'

import HeroSection from "@/components/landing/HeroSection";
import ReadYourData from '@/components/landing/ReadYourData'

export default function page() {
  return (
    <div>

      <HeroSection />
      <WorksWithTools />
      <AboutUs />
      <Features />
      <HowItWork />
      <ReadYourData />

    </div>
  )
}