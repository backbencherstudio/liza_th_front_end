import { GeneratedDashboard } from '@/types/dashboard'
import React from 'react'
import SpendExpenseChart from './SpendExpenseChart'
import MonthlyTrendCard from './MonthlyTrendCard'
import SpendVarianceTable from './SpendVarianceTable'

export default function FinancialPerformanceDashboard({ dashboard }: { dashboard: GeneratedDashboard }) {
  return (
    <div>
      <h2 className="text-[26px] font-medium leading-[34px] text-gray-900">{dashboard.title}</h2>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <SpendExpenseChart />
        <div></div>
        
          <MonthlyTrendCard />
          <SpendVarianceTable />
        
      </section>

    </div>
  )
}
