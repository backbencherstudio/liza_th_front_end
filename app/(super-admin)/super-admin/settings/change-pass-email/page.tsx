"use client"
import SuperAdminSetting from '@/components/icons/SettingsIcon'
import { FormField } from '@/components/reusable/FormInput'
import { Button } from '@base-ui/react';
import React, { useState } from 'react'

export default function page() {
    const [showPassword, setShowPassword] = useState({
        old: false,
        new: false,
        confirm: false,
    });
    return (
        <div>
            <div>
                <div className="space-y-6">
                    {/* Change Email Address */}
                    <div className="rounded-2xl border border-[rgba(8,14,30,0.08)] bg-white p-6">
                        <h2 className="text-[#070707] text-[20px] font-medium leading-[26px] md:mb-8 mb-6">
                            Change Email Address
                        </h2>

                        <div className="grid grid-cols-1 gap-6 ">
                            <FormField
                                label="Old Email Address"
                                type="email"
                                placeholder="Enter old email address"
                            />

                            <FormField
                                label="New Email Address"
                                type="email"
                                placeholder="Enter new email address"
                            />
                        </div>

                        <div className="mt-8 flex justify-end">
                            <Button className="rounded-lg bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)]  px-6 py-3 cursor-pointer text-white text-lg font-medium leading-[180%]">
                                Save Change
                            </Button>
                        </div>
                    </div>

                    {/* Change Password */}
                    <div className="rounded-2xl border border-[rgba(8,14,30,0.08)] bg-white p-6">
                        <h2 className="text-[#070707] text-[20px] font-medium leading-[26px] md:mb-8 mb-6">
                            Change Password
                        </h2>

                        <div className="grid grid-cols-1 gap-6 ">

                            <div className="relative">
                                <FormField
                                    label="Old Password"
                                    type={showPassword.old ? "text" : "password"}
                                    placeholder="Enter your old password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword({ ...showPassword, old: !showPassword.old })}
                                    className="absolute right-4 top-[60px] -translate-y-1/2 text-[#6B7280]"
                                >
                                    <SuperAdminSetting.EyeIcon />
                                </button>
                            </div>

                            <div className="relative">
                                <FormField
                                    label="Create Password"
                                    type={showPassword.new ? "text" : "password"}
                                    placeholder="Enter your new password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword({ ...showPassword, new: !showPassword.new })}
                                    className="absolute right-4 top-[60px] -translate-y-1/2 text-[#6B7280]"
                                >
                                    <SuperAdminSetting.EyeIcon />
                                </button>
                            </div>

                            <div className="relative">
                                <FormField
                                    label="Confirm Password"
                                    type={showPassword.confirm ? "text" : "password"}
                                    placeholder="Confirm your password"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}
                                    className="absolute right-4 top-[60px] -translate-y-1/2 text-[#6B7280]"
                                >
                                    {showPassword.confirm ? <SuperAdminSetting.EyeIcon /> : <SuperAdminSetting.EyeIcon />}
                                </button>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <Button className="rounded-lg bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] py-3  px-6 cursor-pointer text-white text-lg font-medium leading-[180%]">
                                Save Change
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
