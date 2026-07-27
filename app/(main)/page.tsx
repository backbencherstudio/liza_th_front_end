import React from 'react'

import AboutUs from '@/components/landing/AboutUs'
import ContactUs from '@/components/landing/ContactUs'
import Features from '@/components/landing/Features'
import HeroSection from "@/components/landing/HeroSection";
import HowItWork from '@/components/landing/HowItWork'
import OverView from '@/components/landing/OverView'
import ReadYourData from '@/components/landing/ReadYourData'
import WorksWithTools from '@/components/landing/Works-with-tools'

export default function page() {
  return (
    <div>

      <HeroSection />
      <OverView />
      <div className='mt-12 md:mt-24 '>
        <WorksWithTools />
      </div>
      <AboutUs />
      <Features />
      <HowItWork />
      <ContactUs />
      <ReadYourData />

    </div>
  )
}