import { GeneratedDashboard } from '@/types/dashboard'
import React from 'react'
import SpendExpenseChart from './SpendExpenseChart'
import MonthlyTrendCard from './MonthlyTrendCard'
import SpendVarianceTable from './SpendVarianceTable'
import FinancialHealth from './FinancialHealth'
import TopHeader from '../TopHeader'

export default function FinancialPerformanceDashboard({ dashboard }: { dashboard: GeneratedDashboard }) {
  return (
    <div>
      <h2 className="text-[26px] font-medium leading-[34px] text-gray-900">{dashboard.title}</h2>

      <div className='py-8'>
        <TopHeader />
      </div>
      <section className="flex flex-col gap-4 lg:flex-row">
        {/* 60% */}
        <div className="flex flex-3 flex-col gap-4">
          <SpendExpenseChart />
          <MonthlyTrendCard />
        </div>

        {/* 40% */}
        <div className="flex flex-2 flex-col gap-4">
          <FinancialHealth />
          <SpendVarianceTable />
        </div>
      </section>

    </div>
  )
}
