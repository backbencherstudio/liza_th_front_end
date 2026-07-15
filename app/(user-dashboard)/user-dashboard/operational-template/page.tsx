import CustomStatusUpdate from '@/components/user-dashboard/dashboard/generated-dashboard/OperationalKPIDashboard/operationalTemplate/CustomStatusUpdateData'
import OperationalSatusCard from '@/components/user-dashboard/dashboard/generated-dashboard/OperationalKPIDashboard/operationalTemplate/OperationalSatusCard'
import OperationalSummeryTag from '@/components/user-dashboard/dashboard/generated-dashboard/OperationalKPIDashboard/operationalTemplate/OperationalSummeryTag'
import React from 'react'

export default function page() {
    return (
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
    )
}
