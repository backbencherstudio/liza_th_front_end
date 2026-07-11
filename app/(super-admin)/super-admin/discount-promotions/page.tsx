import React from 'react'
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import DiscountStats from '@/components/super-admin/discount-promotions/DiscountStats'
import DiscountTable from '@/components/super-admin/discount-promotions/DiscountTable'

export default function page() {
  return (
    <div>
        <DashboardPageTitle title="Discount Promotions" description="Manage your discount promotions and track their performance" />

        <DiscountStats />

        <DiscountTable />
    </div>
  )
}
