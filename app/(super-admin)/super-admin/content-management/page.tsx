import React from 'react'
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import ContentTabs from '@/components/super-admin/content-management/tabs/ContentTabs'
import ContentPage from '@/components/super-admin/content-management/ContentPage'

export default function page() {
  return (
    <div>
        <DashboardPageTitle title="Content Management" description="Update website content, and track all user changes" />
      


        <ContentPage />
       
    </div>
  )
}
