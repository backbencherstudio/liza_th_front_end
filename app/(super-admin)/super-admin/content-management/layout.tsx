import DashboardPageTitle from '@/components/reusable/DashboardPageTitle';
import PathTabs from '@/components/super-admin/content-management/tabs/PathTabs';
import React from 'react'

export default function ContentManagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (

        <div>

            <DashboardPageTitle title="Content Management" description="Update website content, and track all user changes" />
            <PathTabs />
            {children}
        </div>
    )
}
