import React, { Suspense } from 'react'
import OnboardingWizard from '@/components/user-dashboard/generate-insight/OnboardingWizard'

export default function page() {
    return (
        <div className='container mx-auto'>
            <Suspense fallback={null}>
                <OnboardingWizard />
            </Suspense>
        </div>
    )
}
