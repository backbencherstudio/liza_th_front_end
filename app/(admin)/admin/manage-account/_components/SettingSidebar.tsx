"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import SuperAdminSetting from "@/components/icons/SettingsIcon";

const links = [
    {
        label: "Edit Profile",
        href: "/admin/manage-account/edit-profile",
        Icon: SuperAdminSetting.EditProfile,
    },
    {
        label: "Security & Privacy",
        href: "/admin/manage-account/change-pass-email",
        Icon: SuperAdminSetting.ChangePass,
    },
    // {
    //     label: "Security Settings",
    //     href: "/admin/manage-account/security-settings",
    //     Icon: SuperAdminSetting.Notification,
    // },
    {
        label: "Account Notifications",
        href: "/admin/manage-account/account-notification",
        Icon: SuperAdminSetting.Notification,
    },
];

export default function SettingsSidebar() {
    const pathname = usePathname();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const baseCls =
        "flex items-center gap-3 w-full px-4 py-4 rounded-xl transition-all";

    const inactiveCls =
        "text-[#858585] text-[17px] font-normal leading-6";

    const activeCls =
        "bg-[#E9EFFD] border border-[#5182EF] text-[#2563EB] text-[17px] font-normal leading-6";

    if (isMobile) {
        return (
            <div className="rounded-xl border border-[#E6E6E6] bg-[#FFFFFF] p-4">
                <div className="flex flex-wrap overflow-x-auto gap-2 pb-2 -mx-1 px-1 scrollbar-hide">
                    {links.map(({ label, href, Icon }) => {
                        const isActive = pathname === href;

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={cn(baseCls, isActive ? activeCls : inactiveCls)}
                            >
                                <Icon
                                    className={cn(
                                        "w-4 h-4",
                                        isActive ? "text-blue-600" : "text-black"
                                    )}
                                />
                                <span>{label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <nav className="flex min-h-[calc(100vh-220px)] h-full  flex-col gap-2 rounded-l-xl">
            <div className="flex flex-col gap-6 border border-[#E6E6E6] bg-[#FFFFFF] py-6 px-4   rounded-xl">
                {links.map(({ label, href, Icon }) => {
                    const isActive = pathname === href;

                    return (
                        <Link
                            key={href}
                            href={href}
                            className={cn(
                                baseCls,
                                "outline outline-[#F8FAFB] gap-2 ",
                                isActive ? activeCls : inactiveCls
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}