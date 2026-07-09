import NotificationIcon from '@/components/icons/NotificationIcon'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <div className="">
            <div className="flex items-center justify-between py-3 px-4 md:px-8 gap-4 lg:gap-0">
                {/* Left */}
                <div className="flex flex-1 items-center gap-3">
                    <div className="lg:hidden shrink-0">
                        <Image
                            src="/images/spike-logo.png"
                            alt="Spike Technology"
                            width={70}
                            height={46}
                            className="object-contain"
                        />
                    </div>

                    <div className="relative flex-1 md:flex-none">
                        <Search
                            className="absolute left-4 top-1/2 -translate-y-1/2"
                            size={20}
                        />

                        <input
                            type="text"
                            placeholder="Search anything..."
                            className="w-full md:w-[280px] lg:w-lg rounded-lg border border-gray-200 pl-11 pr-4 py-3 lg:rounded-lg text-sm focus:outline-none focus:bg-white transition-all placeholder:text-gray-400"
                        />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 md:gap-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F3F4]">
                        <NotificationIcon />
                    </div>

                    <div className="flex items-center gap-2">
                        <Image
                            src="/assets/SuperAdmin/SuperAdmin.png"
                            alt="user"
                            width={40}
                            height={40}
                        />

                        <div className="hidden lg:block">
                            <p className="text-base text-[#070707]">B. Cooper</p>
                            <p className="text-sm text-[#777980]">Super Admin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
