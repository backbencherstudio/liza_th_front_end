import React from 'react'

import DiscountChart from '@/components/super-admin/revenue-analytics/DiscountChart'
import RevenueGrowth from '@/components/super-admin/revenue-analytics/RevenueGrowth'
import RevenuePerPlan from '@/components/super-admin/revenue-analytics/RevenuePerPlan'
import RevenueStatus from '@/components/super-admin/revenue-analytics/RevenueStatus'
import UserGrowthChart from '@/components/super-admin/revenue-analytics/UserGrowthChart'

export default function page() {
  return (
    <section className="w-full">
      {/* 
        SaaS/Enterprise Dashboard Grid Layout:
        - 1 column on mobile for clean stacked scannability
        - 2 columns on medium screens and up for side-by-side balancing
        - Generous gap matching your design ecosystem
      */}
      <div className='w-full'>
        <RevenueStatus />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 w-full">



        <div className="w-full">
          <RevenueGrowth />
        </div>

        <div className="w-full">
          <UserGrowthChart />
        </div>

        <div className="w-full ">
          <RevenuePerPlan />
        </div>

        <div className="w-full ">
          <DiscountChart />
        </div>

      </div>
    </section>
  )
}