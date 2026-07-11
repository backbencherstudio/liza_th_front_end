"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Settings, LogOut } from "lucide-react";
import { sidebarData } from "./SidebarData";
import LogoutIcon from "@/components/icons/LogoutIcon";

interface SidebarProps {
    onClose?: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
    const pathname = usePathname();
    const isSettingActive = pathname.startsWith("/super-admin/settings");
    return (
        <aside
            className={`
    w-[260px] bg-white px-4 py- flex flex-col
    ${onClose ? "h-full" : "fixed left-0 top-0 h-screen border-r"}
  `}
        >
            {/* Logo */}
            <Link href="/super-admin">
                <div className="flex justify-center py-6">
                    <Image
                        src="/images/spike-logo.png"
                        alt="Spike Technology"
                        width={140}
                        height={45}
                        className="object-contain  "
                    />
                </div>
            </Link>

            {/* Menu Items */}
            <div className="space-y-1 flex-1">
                {sidebarData.map((item) => {
                    const Icon = item.icon;


                    const isActive =
                        pathname === item.href ||
                        (item.href !== "/dashboard" && pathname.startsWith(item.href));

                    return (
                        <Link
                            href={item.href}
                            key={item.href}
                            onClick={onClose}
                            className={`group relative flex items-center gap-3 px-3  py-[11px] text-[16px] font-normal rounded-lg transition-all leading-[22px]
                                ${isActive
                                    ? "bg-[#E9EFFD] text-base text-[#1E40AF] font-medium"
                                    : "text-[#374151] hover:bg-gray-100"
                                }`}
                        >
                            {/* Left Blue Accent */}
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[6px] bg-[#1E40AF] rounded-r-xl" />
                            )}

                            <Icon
                                size={20}
                                className={isActive ? "text-[#1E40AF]" : "text-[#6B7280]"}
                            />
                            <span className={isActive ? "text-[#1E40AF] font-medium" : "text-[#6B7280]"}>{item.title}</span>
                        </Link>
                    );
                })}
            </div>

            {/* Bottom */}
            <div className="mt-auto space-y-1 pt-6 ">
                <Link
                    onClick={onClose}
                    href="/super-admin/settings/edit-profile"
                    className={`cursor-pointer group relative flex items-center gap-3 px-3 py-[11px] text-[16px] font-normal rounded-lg transition-all leading-[22px]
    ${isSettingActive
                            ? "bg-[#E9EFFD] text-[#1E40AF] font-medium"
                            : "text-[#374151] hover:bg-gray-100"
                        }`}
                >
                    {isSettingActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[6px] bg-[#1E40AF] rounded-r-xl" />
                    )}

                    <Settings
                        size={20}
                        className={isSettingActive ? "text-[#1E40AF]" : "text-[#646464]"}
                    />

                    <span
                        className={
                            isSettingActive
                                ? "text-[#1E40AF] font-medium"
                                : "text-[#374151]"
                        }
                    >
                        Setting
                    </span>
                </Link>

                <button className="cursor-pointer flex w-full items-center gap-3 px-3 py-[11px] text-[16px] font-normal rounded-lg transition-all leading-[22px] text-[#374151] hover:bg-gray-100">
                    <LogoutIcon size={20} />
                    <span>Log out</span>
                </button>
            </div>
        </aside>
    );
}