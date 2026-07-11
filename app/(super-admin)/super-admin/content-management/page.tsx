import React from 'react'
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import ContentTabs from '@/components/super-admin/content-management/content-tabs'

export default function page() {
  return (
    <div>
        <DashboardPageTitle title="Content Management" description="Update website content, and track all user changes" />
        <ContentTabs />
       
    </div>
  )
}
