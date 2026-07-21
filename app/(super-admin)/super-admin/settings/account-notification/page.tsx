"use client"

import React, { useState } from 'react'

import { Switch } from '@/components/ui/switch'

export default function page() {
    const [emailNotification, setEmailNotification] = useState(true);
    const [pushNotification, setPushNotification] = useState(false);
    return (
        <div>
            <div className='p-8 outline outline-[#ECEFF3] rounded-xl'>
                <div className='flex items-center justify-between border-b border-[#ECEFF3] pb-7'>
                    <div>
                        <p className="text-[#151513] text-[20px] font-medium leading-[26px]">Email Notifications</p>
                        <p className="text-[#3D3D3C] text-[18px] font-normal leading-6 mt-3">Receive updates via email</p>
                    </div>
                    <Switch
                        checked={emailNotification}
                        onCheckedChange={setEmailNotification}
                        className={emailNotification ? "bg-[#2563EB]" : ""}
                    />
                </div>

                <div className='flex items-center justify-between mt-7'>
                    <div>
                        <p className="text-[#151513] text-[20px] font-medium leading-[26px]">Push Notifications</p>
                        <p className="text-[#3D3D3C] text-[18px] font-normal leading-6 mt-3">Browser push notifications </p>
                    </div>
                    <Switch
                        checked={pushNotification}
                        onCheckedChange={setPushNotification}
                        className={pushNotification ? "bg-[#2563EB]" : ""}
                    />
                </div>
            </div>
        </div>
    )
}
