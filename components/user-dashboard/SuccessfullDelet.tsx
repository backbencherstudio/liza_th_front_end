"use client";

import { useState } from "react";
import CustomModal from "@/components/reusable/CustomModal";
import { FormField } from "@/components/reusable/FormInput";
import SuperAdminSetting from "../icons/SettingsIcon";

interface DeleteAccountModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function SuccessfullDelet({
    open,
    onOpenChange,
}: DeleteAccountModalProps) {


    return (
        <CustomModal
            open={open}
            onOpenChange={onOpenChange}
            size="xsm"
        >
            <div className="space-y-6 ">
                <div className="space-y-3">
                    <div className="flex justify-center bg-[#FEF2F2] w-fit mx-auto p-4 rounded-full">
                        <SuperAdminSetting.ManageRoleDeletIcon />
                    </div>
                    <h2 className="text-center text-[#070707] text-[32px] font-semibold leading-[46px]">
                        Your account has been successfully deleted.
                    </h2>

                    <p className="text-center text-[#4A4C56] text-[16px] font-normal leading-[24px]">
                        This service has been deleted permanently
                    </p>


                </div>

            </div>
        </CustomModal>
    );
}