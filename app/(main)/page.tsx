import AboutUs from '@/components/landing/AboutUs'
import Features from '@/components/landing/Features'
import HowItWork from '@/components/landing/HowItWork'
import WorksWithTools from '@/components/landing/Works-with-tools'
import HeroSection from "@/components/landing/HeroSection";
import ReadYourData from '@/components/landing/ReadYourData'
import ContactUs from '@/components/landing/ContactUs'
import OverView from '@/components/landing/pricing/OverView'

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