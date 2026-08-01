import { GeneratedDashboard } from '@/types/dashboard'
import React, { useState } from 'react'
import SpendExpenseChart from './financial-perfomance/SpendExpenseChart'
import MonthlyTrendCard from './financial-perfomance/MonthlyTrendCard'
import SpendVarianceTable from './financial-perfomance/SpendVarianceTable'
import FinancialHealth from './financial-perfomance/FinancialHealth'
import TopHeader from '../TopHeader'
import CustomModal from '@/components/reusable/CustomModal'
import RevenueForm from './editTypeForm/RevenueForm'
import SpendForm from './editTypeForm/Spend'
import CashBalanceForm from './editTypeForm/CashBalance'
import BudgetedSpendForm from './editTypeForm/BudgetedSpend'
import FinancialStatsKpi from './financial-perfomance/FinancialStatsKpi'
import OperationalSummeryTag from '../OperationalKPIDashboard/operationalTemplate/OperationalSummeryTag'



const editTypes = [
  { label: "Revenue", value: "revenue" },
  { label: "Spend", value: "spend" },
  { label: "Cash Balance", value: "cashBalance" },
  { label: "Budgeted Spend", value: "budgetedSpend" },
];

export default function FinancialPerformanceDashboard({ dashboard }: { dashboard: GeneratedDashboard }) {
  const [editType, setEditType] = useState<string>("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  console.log(editType);
  const dateOnly = dashboard.title.split('–')[1]?.trim();
  return (
    <div className=''>
   

      <div className='py-8 '>
        <TopHeader title={"Financial Performance"} subtitle={"State, Discover trends, identify risks and uncover growth opportunities."} handleOpen={handleOpen} editTypes={editTypes} editType={editType} setEditType={(val: string | null) => setEditType(val ?? "")} dateOnly={dateOnly} />
      </div>

      <div className='bg-[#F8FAFB] rounded-[20px] p-4.5'>
        <div className='mb-5  px-4'>
          <FinancialStatsKpi />
        </div>

        <section className="flex flex-col gap-4 lg:flex-row ">
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


        <div className='mt-4'>
          <OperationalSummeryTag />
        </div>

      </div>




      {/* modal */}
      <CustomModal open={open} onOpenChange={setOpen} size="lg" >
        {editType === "revenue" && (
          <RevenueForm onCancel={() => setOpen(false)} />
        )}
        {editType === "spend" && (
          <SpendForm onCancel={() => setOpen(false)} />
        )}
        {editType === "cashBalance" && (
          <CashBalanceForm onCancel={() => setOpen(false)} />
        )}
        {editType === "budgetedSpend" && (
          <BudgetedSpendForm onCancel={() => setOpen(false)} />
        )}
      </CustomModal>
    </div>
  )
}
