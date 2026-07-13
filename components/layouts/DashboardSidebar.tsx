"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings } from "lucide-react";

import LogoutIcon from "@/components/icons/LogoutIcon";
import type { DashboardNavConfig } from "@/config/navigation/types";

interface DashboardSidebarProps {
  navigation: DashboardNavConfig;
  onClose?: () => void;
}

export default function DashboardSidebar({
  navigation,
  onClose,
}: DashboardSidebarProps) {
  const pathname = usePathname();
  const showFooter = navigation.showSidebarFooter ?? true;
  const settingsBasePath = navigation.settingsHref.replace(/\/[^/]+$/, "");
  const isSettingsActive = pathname.startsWith(settingsBasePath);

  const isNavItemActive = (href: string) =>
    pathname === href ||
    (href !== navigation.dashboardHref && pathname.startsWith(href));

  return (
    <aside
      className={`relative flex h-full w-full flex-col bg-white px-4 py-4 ${onClose ? "" : "border-r border-[#EAECF0]"
        } ${navigation.showSidebarAccent ? "border-l-[3px] border-l-[#1E40AF]" : ""}`}
    >
      <div className="flex justify-center py-6">
        <Image
          src="/images/spike-logo.png"
          alt="Spike Technology"
          width={140}
          height={45}
          className="object-contain"
        />
      </div>

      <nav className="flex-1 space-y-2">
        {navigation.items.map((item) => {
          const Icon = item.icon;
          const isActive = isNavItemActive(item.href);

          return (
            <Link
              href={item.href}
              key={item.href}
              onClick={onClose}
              className={`group relative flex items-center gap-3 rounded-xl px-3 py-3 text-[16px] font-normal leading-[22px] transition-all ${isActive
                ? "bg-[#E9EFFD] font-medium text-[#1E40AF]"
                : "text-[#6B7280] hover:bg-gray-50"
                }`}
            >
              {/* {isActive && (
                <div className="absolute left-0 top-1/2 h-[90%] w-[5px] -translate-y-1/2 rounded-l-full bg-[#1E40AF]" />
              )} */}

              <Icon
                size={20}
                className={isActive ? "text-[#1E40AF]" : "text-[#6B7280]"}
              />
              <span className={isActive ? "text-[#1E40AF]" : "text-[#6B7280]"}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {showFooter && (
        <div className="mt-auto space-y-1 pt-6">
          <Link
            href={navigation.settingsHref}
            onClick={onClose}
            className={`group relative flex items-center gap-3 rounded-lg px-3 py-[11px] text-[16px] font-normal leading-[22px] transition-all ${isSettingsActive
                ? "bg-[#E9EFFD] font-medium text-[#1E40AF]"
                : "text-[#374151] hover:bg-gray-100"
              }`}
          >
            {isSettingsActive && (
              <div className="absolute left-0 top-1/2 h-8 w-[6px] -translate-y-1/2 rounded-r-xl bg-[#1E40AF]" />
            )}

            <Settings
              size={20}
              className={isSettingsActive ? "text-[#1E40AF]" : "text-[#646464]"}
            />
            <span
              className={
                isSettingsActive ? "font-medium text-[#1E40AF]" : "text-[#374151]"
              }
            >
              Setting
            </span>
          </Link>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-[22px] px-6 py-[14px] text-[15px] font-medium text-[#374151] transition-all hover:bg-gray-100"
          >
            <LogoutIcon size={20} />
            <span>Log out</span>
          </button>
        </div>
      )}
    </aside>
  );
}
