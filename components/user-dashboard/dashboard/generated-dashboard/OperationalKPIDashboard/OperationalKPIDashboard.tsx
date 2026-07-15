import { GeneratedDashboard } from '@/types/dashboard'
import React from 'react'
import OperationalSatusCard from './operationalTemplate/OperationalSatusCard'
import OperationalSummeryTag from './operationalTemplate/OperationalSummeryTag'
import CustomStatusUpdate from './operationalTemplate/CustomStatusUpdateData'
import { monthlyData } from '../FinancialPerformanceDashboard/data'
import OperationalCatergoryTable from './operationalTemplate/OperationalCatergoryTable'
import OperationMonthyTrendChart from './operationalTemplate/MonthlyTrednDepartment'
import VendorMonthyTrendChart from './operationalTemplate/MonthlyTrendVendor'
import { monthlyDataVendor } from './operationalTemplate/TableDataVendor'
import VendorCatergoryTable from './operationalTemplate/VendorTable'
import TopHeader from '../TopHeader'

export default function OperationalKPIDashboard({ dashboard }: { dashboard: GeneratedDashboard }) {
  return (
    <div>
      <h2 className="text-[26px] font-medium leading-[34px] text-gray-900">{dashboard.title}</h2>
      <TopHeader />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-4'>
        <div className="w-full  rounded-3xl bg-white p-7 pb-5  font-sans border [background:var(--W,#FFF)] px-4 py-5 rounded-2xl border-solid border-[#EDEDED]">
          <h2 className="mb-6 mt-1 text-xl font-bold text-slate-900">
            Monthly Trend by Category
          </h2>

          <div className=''>
            <OperationMonthyTrendChart data={monthlyData} />
            <div className="mt-5">
              <OperationalCatergoryTable data={monthlyData} />
            </div>
          </div>


        </div>

        <div className="w-full  rounded-3xl bg-white p-7 pb-5  font-sans border [background:var(--W,#FFF)] px-4 py-5 rounded-2xl border-solid border-[#EDEDED]">
          <h2 className="mb-6 mt-1 text-xl font-bold text-slate-900">
            Monthly Trend by Vendor
          </h2>

          <div className=''>
            <VendorMonthyTrendChart data={monthlyDataVendor} />
            <div className="mt-5">
              <VendorCatergoryTable data={monthlyDataVendor} />
            </div>
          </div>


        </div>
      </div>

      <div className='bg-[#F8FAFB] rounded-xl'>
        <div className='py-7.5 px-4.5'>
          <OperationalSatusCard />
          <div className='py-5'>
            <OperationalSummeryTag />
          </div>

          <div>
            <CustomStatusUpdate />
          </div>
        </div>
      </div>
    </div>
  )
}
