"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import type { DashboardNavConfig, DashboardUser } from "@/config/navigation/types";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import MessagePage from "@/app/(user-dashboard)/user-dashboard/message/page";
import UserDashboardIcons from "../icons/UserDashboardIcons";

interface DashboardShellProps {
  children: React.ReactNode;
  navigation: DashboardNavConfig;
  user?: DashboardUser;
}

const defaultUsers: Record<DashboardNavConfig["role"], DashboardUser> = {
  super_admin: {
    name: "B. Cooper",
    roleLabel: "Super Admin",
    avatarSrc: "/assets/SuperAdmin/SuperAdmin.png",
  },
  admin: {
    name: "Admin User",
    roleLabel: "Admin",
    avatarSrc: "/assets/SuperAdmin/SuperAdmin.png",
  },
  user: {
    name: "User",
    roleLabel: "Member",
    avatarSrc: "/assets/SuperAdmin/SuperAdmin.png",
  },
};

export default function DashboardShell({
  children,
  navigation,
  user,
}: DashboardShellProps) {
  const [open, setOpen] = useState(false);
  const headerUser = user ?? defaultUsers[navigation.role];
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const isUserDashboard = navigation.role === "user";

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Desktop sidebar — fixed, outside document flow */}
      <div className="fixed inset-y-0 left-0 z-40 hidden w-[260px] lg:block">
        <DashboardSidebar navigation={navigation} />
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col bg-white transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex shrink-0 justify-end p-4 ">
          <button type="button" onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="min-h-0 flex-1">
          <DashboardSidebar navigation={navigation} onClose={() => setOpen(false)} />
        </div>
      </div>

      {/* Main column — offset by sidebar width on desktop */}
      <div className="flex min-h-screen w-full min-w-0 flex-col lg:pl-[260px]">
        <div className="fixed left-0 right-0 top-0 z-30 hidden border-b bg-white lg:left-[260px] lg:block">
          <DashboardHeader user={headerUser} />
        </div>

        <div className="sticky top-0 z-30 border-b bg-white lg:hidden">
          <div className="flex items-center gap-3 px-4 py-3">
            <button type="button" onClick={() => setOpen(true)}>
              <Menu size={28} />
            </button>

            <div className="min-w-0 flex-1">
              <DashboardHeader user={headerUser} />
            </div>
          </div>
        </div>

        <main className="min-h-0 w-full flex-1 p-5 lg:mt-[72px] lg:p-8">
          {isUserDashboard && (
            <>
              {/* Chat Popup */}
              {isMessageOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-[496px] max-w-[calc(100vw-24px)] animate-in slide-in-from-bottom-4 duration-300">
                  <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
                    <MessagePage onClose={() => setIsMessageOpen(false)} />
                  </div>
                </div>
              )}

              {/* Floating Button */}
              <button
                onClick={() => setIsMessageOpen((prev) => !prev)}
                className="fixed bottom-8 right-6 z-50 flex items-center justify-center gap-2  bg-white text-white border hover:scale-105 transition-all p-2.5 rounded-full shadow-sm"
              >
                <div className="h-10 w-10 rounded-full bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] flex items-center justify-center">
                  <UserDashboardIcons.MessageIocn />
                </div>
                <span className="text-[#1D1F2C] font-[Archivo] text-[18px] font-medium leading-6 ">Do you need help?</span>
              </button>
            </>
          )}

          {children}
        </main>
      </div>
    </div>
  );
}
