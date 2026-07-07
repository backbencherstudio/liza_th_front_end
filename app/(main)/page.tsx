import AboutUs from '@/components/landing/AboutUs'
import Features from '@/components/landing/Features'
import HowItWork from '@/components/landing/HowItWork'
import WorksWithTools from '@/components/landing/Works-with-tools'
import React from 'react'

export default function page() {
  return (
    <div>
      <WorksWithTools />
      <AboutUs />
      <Features />
      <HowItWork />
    </div>
  )
}
