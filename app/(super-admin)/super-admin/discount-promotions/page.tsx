import React from 'react'
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import DiscountStats from '@/components/super-admin/discount-promotions/DiscountStats'
import DiscountTable from '@/components/super-admin/discount-promotions/DiscountTable'
import DiscountPageTitle from '@/components/super-admin/discount-promotions/DiscountPageTitle'

export default function page() {
  return (
    <div>
       <DiscountPageTitle />

        <DiscountStats />

        <DiscountTable />
    </div>
  )
}
