import SuperAdminSetting from "@/components/icons/SettingsIcon";
import React from "react";

export default function Billing() {
    return (
        <div>
            <h2 className="pb-4 text-[32px] font-semibold leading-[46px] text-[#151513]">
                Billing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 rounded-2xl border border-[#ECEFF3] bg-[#F9FAFB] p-6 md:p-8">
                <div className="flex h-[180px] items-center justify-center rounded-[10px] border border-[#ECEFF3] bg-white">
                    <SuperAdminSetting.ManageRoleStripe />
                </div>

                <div className="flex h-[180px] items-center justify-center rounded-[10px] border border-[#ECEFF3] bg-white">
                    <SuperAdminSetting.ManageRolePlus />
                </div>
            </div>
        </div>
    );
}