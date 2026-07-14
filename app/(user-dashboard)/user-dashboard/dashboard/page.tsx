import React from 'react'
import StatsSection from '@/components/user-dashboard/dashboard/StatsSection'
import ChooseFinancialInsights from '@/components/user-dashboard/dashboard/ChooseFinancialInsights'
import RecentInsights from '@/components/user-dashboard/dashboard/RecentInsights'

export default function page() {
  return (
    <div>
      <StatsSection />
      <ChooseFinancialInsights/>
      <RecentInsights/>
    </div>
  )
}
