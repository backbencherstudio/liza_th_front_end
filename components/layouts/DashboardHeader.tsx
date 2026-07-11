import Image from "next/image";
import { Search } from "lucide-react";

import NotificationIcon from "@/components/icons/NotificationIcon";
import type { DashboardUser } from "@/config/navigation/types";

interface DashboardHeaderProps {
  user: DashboardUser;
}

export default function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-8 lg:gap-0">
      <div className="flex flex-1 items-center gap-3">
        <div className="shrink-0 lg:hidden">
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
            className="w-full rounded-lg border border-gray-200 py-3 pl-11 pr-4 text-sm transition-all placeholder:text-gray-400 focus:bg-white focus:outline-none md:w-[280px] lg:w-lg lg:rounded-lg"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F3F4]">
          <NotificationIcon />
          <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-2 py-1 text-xs text-white">
            3
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={user.avatarSrc}
            alt={user.name}
            width={40}
            height={40}
          />
          <div className="hidden lg:block">
            <p className="text-base text-[#070707]">{user.name}</p>
            <p className="text-sm text-[#777980]">{user.roleLabel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
