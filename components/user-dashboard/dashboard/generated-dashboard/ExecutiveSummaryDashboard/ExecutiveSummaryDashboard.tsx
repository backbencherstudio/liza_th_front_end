"use client"
import { GeneratedDashboard } from '@/types/dashboard'


import ExpenseCategory from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/ExecuitiveSub'
import KpiCards from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/KpiStatus'
import MonthlySpendChart from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/MonthlySpend'
import SummeryTag from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/SummeryTag'
import TopSpendKpiCard from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/TopSpendKpiCard'

import TopSpendTable from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/TopSpendTable'

import CashFlowCharts from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/CashFlowCharts'

import { Controller, useForm } from 'react-hook-form'
import ExecuitiveSummeryKpiTable from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/KpiTable'
import TopHeader from '../TopHeader'


type FormValues = {
  location: string;
  month: string;
};

const options = [
  { label: "Dhaka", value: "dhaka" },
  { label: "Chattogram", value: "chattogram" },
  { label: "Khulna", value: "khulna" },
];

const months = [
  { label: " 1 month", value: "1month" },
  { label: " 6 month", value: "6month" },
  { label: " 1 year", value: "1year" },
];



const editTypes = [
  { label: "Total Revenue", value: "totalRevenue" },
  { label: "Spend", value: "netProfit" },
  { label: "Gross Margin", value: "grossMargin" },
  { label: "Burn Rate", value: "burnRate" },
];

export default function ExecutiveSummaryDashboard({ dashboard }: { dashboard: GeneratedDashboard }) {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      location: "",
      month: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-[26px] font-medium leading-[34px] text-gray-900">{dashboard.title}</h2>

      <div>
        <TopHeader title={"Executive Summary"} subtitle={"Company performance, cash flow and strategic intelligence"} handleOpen={() => {}} editTypes={editTypes} editType={null} setEditType={() => {}} />



        <div className='py-8 '>
          <div className='py-7.5 px-5 bg-[#F8FAFB] rounded-xl'>
            <div className='py-3'>
              <KpiCards />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-5'>
              <div className='h-full'>
                <MonthlySpendChart />
              </div>
              <div>
                <div className='h-full' >
                  <ExpenseCategory />
                </div>

              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-3'>

              <div className='h-full'>
                <CashFlowCharts />
              </div>
              <div className='h-full'>
                <ExecuitiveSummeryKpiTable />
              </div>
            </div>

            <div className='h-full'>
              <TopSpendTable />
            </div>
            <div className=''>
              <TopSpendKpiCard />
            </div>
            <div>
              <SummeryTag />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
