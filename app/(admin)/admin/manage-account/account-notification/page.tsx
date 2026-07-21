"use client"

import React, { useState } from 'react'

import { Switch } from '@/components/ui/switch'

export default function page() {
    const [emailNotification, setEmailNotification] = useState(true);
    const [pushNotification, setPushNotification] = useState(false);
    return (
        <div>
            <div className="p-0 md:p-4 lg:p-8 rounded-xl md:outline md:outline-1 md:outline-[#ECEFF3]">
                <div className='flex items-center justify-between '>
                    <div>
                        <p className="text-[#151513] text-[20px] font-medium leading-[26px]">Email Notifications</p>
                        <p className="text-[#3D3D3C] text-[18px] font-normal leading-6 mt-3 max-w-[500px]">Receive updates via email</p>
                    </div>
                    <Switch
                        checked={emailNotification}
                        onCheckedChange={setEmailNotification}
                        className={emailNotification ? "bg-[#2563EB]" : ""}
                    />
                </div>
                <hr className='h-[1px] bg-[#ECEFF3] my-7' />

                <div className='flex items-center justify-between'>
                    <div>
                        <p className="text-[#151513] text-[20px] font-medium leading-[26px]">Push Notifications</p>
                        <p className="text-[#3D3D3C] text-[18px] font-normal leading-6 mt-3 max-w-[500px]">Browser push notifications</p>
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
