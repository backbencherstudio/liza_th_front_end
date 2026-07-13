import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import TableToolBar from '@/components/reusable/TableToolBar'
import ExpenseCategory from '@/components/user-dashboard/execuitive-summery/ExpenseCategory'
import KpiCards from '@/components/user-dashboard/execuitive-summery/KpiStatus'
import MonthlySpendChart from '@/components/user-dashboard/execuitive-summery/MonthlySpend'
import SummeryTag from '@/components/user-dashboard/execuitive-summery/SummeryTag'
import TopSpendKpiCard from '@/components/user-dashboard/execuitive-summery/TopSpendKpiCard'
import React from 'react'

export default function page() {


    return (
        <div>

            <div className='flex justify-between items-center   '>
                <div className='w-full'>
                    <DashboardPageTitle title="Executive Summary" description="Company performance, cash flow and strategic intelligence" />
                </div>
                <div className='w-full'>
                    <TableToolBar

                    >
                        <select className="sf-select">
                            <option>1 month</option>
                        </select>
                        <select className="sf-select">
                            <option>locations</option>

                        </select>
                        <div className='flex items-center gap-2 border border-[#E9E9E9] p-3.5 rounded-sm bg-[#F8FAFB]'>
                            <button className='sf-btn'>Edit</button>

                        </div>
                        <div className='flex items-center gap-2 border border-[#E9E9E9] p-3.5 rounded-sm bg-[#F8FAFB]'>
                            <button className='sf-btn'>Save</button>

                        </div>
                        <div className='flex items-center gap-2 border border-[#E9E9E9] p-3.5 rounded-sm bg-[#F8FAFB]'>
                            <button className='sf-btn'>Share</button>

                        </div>


                        <div className='flex items-center gap-2 border border-[#E9E9E9] p-3 rounded-sm bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] text-white'>
                            <button className='sf-btn'>Export</button>

                        </div>
                    </TableToolBar>
                </div>
            </div>




            <div className='py-8 '>
                <div className='py-7.5 px-5 bg-[#F8FAFB] rounded-xl'>
                    <div className='py-3'>
                        <KpiCards />
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-5'>
                        <div>
                            <MonthlySpendChart />
                        </div>
                        <div>
                            <div>
                                <ExpenseCategory />
                            </div>
                        </div>
                    </div>
                    <div className='py-4'>
                        <TopSpendKpiCard />
                    </div>
                    <div>
                        <SummeryTag />
                    </div>
                </div>
            </div>
        </div>
    )
}
