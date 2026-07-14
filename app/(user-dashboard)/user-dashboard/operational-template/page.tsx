import CustomStatusUpdate from '@/components/user-dashboard/operationalTemplate/CustomStatusUpdateData'
import OperationalSatusCard from '@/components/user-dashboard/operationalTemplate/OperationalSatusCard'
import OperationalSummeryTag from '@/components/user-dashboard/operationalTemplate/OperationalSummeryTag'
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
