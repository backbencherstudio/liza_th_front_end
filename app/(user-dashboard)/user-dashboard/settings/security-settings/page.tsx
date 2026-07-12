"use client"
import { Switch } from '@/components/ui/switch'
import React, { useState } from 'react'


export default function page() {
    const [emailNotification, setEmailNotification] = useState(true);
    const [pushNotification, setPushNotification] = useState(false);
    return (
        <div>
            <div className='p-8 outline outline-[#ECEFF3] rounded-xl'>
                <div className='flex items-center justify-between pb-7'>
                    <div>
                        <p className="text-[#151513] text-[20px] font-medium leading-[26px]">Two-factor authentication</p>
                        <p className="text-[#3D3D3C] text-[18px] font-normal leading-6 mt-3 max-w-[500px]">A verification code is required on every login. This protects your account
                            even if your password is compromised.</p>
                    </div>
                    <Switch
                        checked={emailNotification}
                        onCheckedChange={setEmailNotification}
                        className={emailNotification ? "bg-[#2563EB]" : ""}
                    />
                </div>


            </div>
        </div>
    )
}
