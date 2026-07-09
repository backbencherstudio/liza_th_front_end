import NotificationIcon from '@/components/icons/NotificationIcon'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div className="fixed top-0 right-0 z-30 h-[72px] w-full border-b bg-white lg:left-[260px] lg:w-[calc(100%-260px)] ">
            <div className="flex items-center justify-between py-3 px-8 gap-4 lg:gap-0">
                <div>
                    <div className="relative ">
                        <div className="relative">
                            <Search
                                className="absolute left-4 top-1/2 -translate-y-1/2 "
                                size={20}
                            />
                            <input
                                type="text"
                                placeholder="Search anything..."
                                className="w-1 lg:w-full rounded-full  border border-gray-200 pl-11 pr-4 py-3 lg:rounded-lg 
                       text-sm focus:outline-none  focus:bg-white 
                       transition-all placeholder:text-gray-400"
                            />
                        </div>
                    </div>
                </div>
                <div className='flex items-center  gap-6'>
                    <div className='bg-[#F3F3F4] p-3 rounded-full h-12 w-12 flex items-center justify-center'>
                        <NotificationIcon />
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image src="/assets/SuperAdmin/SuperAdmin.png" alt="user" width={40} height={40} />
                        <div>
                            <p className='text-[#070707] font-normal text-base leading-[22px] hidden lg:block'>B. Cooper</p>
                            <p className='text-[#777980] font-normal text-sm hidden lg:block'>Super Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
