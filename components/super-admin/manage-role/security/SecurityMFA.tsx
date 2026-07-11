"use client";

import React from "react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function SecurityMFA() {
    return (
        <div className="flex flex-col gap-8 md:gap-9 lg:gap-11 bg-white">

            <div>
                <h2 className="text-[#151513] text-[32px] font-semibold leading-[46px]">
                    Security & MFA
                </h2>

                <p className="mt-3 text-[#3D3D3C] text-base font-normal leading-[22px]">
                    Define what each role can access and modify
                </p>
            </div>


            {/* Password */}
            <div className="w-full">
                <h3 className="mb-4 text-[#101828] text-[24px] font-medium leading-8">
                    Password
                </h3>

                <div className="w-full rounded-xl border border-[#ECEFF3] p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[#151513] text-base font-normal leading-5">
                                Account Password
                            </p>

                            <p className="mt-3 text-[#4A5565] text-[12px] font-normal leading-5">
                                Last changed 3 months ago
                            </p>
                        </div>

                        <Button className="rounded-lg bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] p-6 cursor-pointer">
                            Change
                        </Button>
                    </div>
                </div>
            </div>


            {/* MFA */}
            <div className="w-full">
                <h3 className="mb-4 text-[#101828] text-[24px] font-medium leading-8">
                    Multi-Factor Authentication
                </h3>

                <div className="w-full rounded-xl border border-[#ECEFF3] p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-[#151513] text-base font-normal leading-5">
                                Authenticator App (TOTP)
                            </p>

                            <p className="mt-3 text-[#4A5565] text-[12px] font-normal leading-5">
                                Google Authenticator, Authy, etc.
                            </p>
                        </div>

                        <Switch />
                    </div>
                </div>
            </div>

        </div>
    );
}