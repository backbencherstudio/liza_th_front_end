"use client"
import React from 'react'

import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import TableToolBar from '@/components/reusable/TableToolBar'
import ExpenseCategory from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/ExecuitiveSub'
import KpiCards from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/KpiStatus'
import MonthlySpendChart from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/MonthlySpend'
import SummeryTag from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/SummeryTag'
import TopSpendKpiCard from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/TopSpendKpiCard'
import { ArrowDownToLine, Download, SquarePen } from 'lucide-react'
import UserDashboardIcons from '@/components/icons/UserDashboardIcons'
import TopSpendTable from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/TopSpendTable'
import KpiTable from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/KpiTable'
import CashFlowCharts from '@/components/user-dashboard/dashboard/generated-dashboard/ExecutiveSummaryDashboard/execuitive-summery/CashFlowCharts'
import { FormSelect } from '@/components/reusable/FormSelect'
import { Controller, useForm } from 'react-hook-form'

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


export default function page() {
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
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
                {/* Left */}
                <div className="flex-1">
                    <DashboardPageTitle
                        title="Executive Summary"
                        description="Company performance, cash flow and strategic intelligence"
                    />
                </div>

                {/* Right */}
                <div className="flex flex-wrap items-end justify-start gap-3 lg:justify-end">
                    <div className="min-w-[180px]">
                        <Controller
                            name="location"
                            control={control}
                            render={({ field }) => (
                                <FormSelect
                                    label=""
                                    placeholder="Select Location"
                                    options={options}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    error={errors.location}
                                />
                            )}
                        />
                    </div>

                    <div className="min-w-[180px]">
                        <Controller
                            name="month"
                            control={control}
                            render={({ field }) => (
                                <FormSelect
                                    label=""
                                    placeholder="Select Month"
                                    options={months}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    error={errors.month}
                                />
                            )}
                        />
                    </div>

                    <div className="flex h-[48px] shrink-0 items-center gap-2 rounded-xl border border-[#E9E9E9]  px-3.5">
                        <button className="sf-btn whitespace-nowrap">Edit Data</button>
                        <SquarePen className="h-4 w-4 text-[#575855]" />
                    </div>

                    <div className="flex h-[48px] shrink-0 items-center gap-2 rounded-xl border border-[#E9E9E9]  px-3.5">
                        <button className="sf-btn whitespace-nowrap">Save</button>
                        <ArrowDownToLine className="h-4 w-4 text-[#575855]" />
                    </div>

                    <div className="flex h-[48px] shrink-0 items-center gap-2 rounded-xl border border-[#E9E9E9]  px-3.5">
                        <button className="sf-btn whitespace-nowrap">Share</button>
                        <UserDashboardIcons.ShareIcon />
                    </div>

                    <div className="flex h-[47px] shrink-0 items-center gap-2 rounded-xl bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] px-3 text-white">
                        <button className="sf-btn whitespace-nowrap">Export</button>
                        <ArrowDownToLine className="h-4 w-4" />
                    </div>
                </div>
            </div>



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
                            <KpiTable />
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
    )
}
