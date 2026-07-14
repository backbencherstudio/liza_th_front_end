import { GeneratedDashboard } from '@/types/dashboard'
import React from 'react'

export default function OperationalKPIDashboard({ dashboard }: { dashboard: GeneratedDashboard }) {
  return (
    <div>
        <h2 className="text-[26px] font-medium leading-[34px] text-gray-900">{dashboard.title}</h2>
    </div>
  )
}
