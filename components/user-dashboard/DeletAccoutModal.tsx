"use client";

import { useState } from "react";
import CustomModal from "@/components/reusable/CustomModal";
import { FormField } from "@/components/reusable/FormInput";
import SuperAdminSetting from "../icons/SettingsIcon";
import SuccessfullDelet from "./SuccessfullDelet";

interface DeleteAccountModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function DeleteAccountModal({
    open,
    onOpenChange,
}: DeleteAccountModalProps) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [successOpen, setSuccessOpen] = useState(false);

    const [showPassword, setShowPassword] = useState({
        old: false,
        new: false,
        confirm: false,
    });

    const handleChange = (field: "email" | "password", value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleDelete = () => {
        // await deleteAccount();

        onOpenChange(false);
        setSuccessOpen(true);
    };

    return (
        <>
            <CustomModal
                open={open}
                onOpenChange={onOpenChange}
                size="mmd"
            >
                <div className="space-y-6 ">
                    <div className="space-y-3">
                        <h2 className="text-center text-[#070707] font-archivo text-[32px] font-semibold leading-[46px]">
                            Delete Account?
                        </h2>

                        <p className="text-center text-[#4A4C56] font-archivo text-[16px] font-normal leading-[24px]">
                            Are you sure you want to delete your account? This action cannot be
                            undone and all your data will be permanently removed.
                        </p>


                    </div>
                    <p className="text-[#070707] font-archivo text-[20px] font-medium leading-[26px] mt-2">
                        To securely delete your account and all associated data, please
                        enter your email address.
                    </p>

                    <div className="space-y-5">
                        <FormField
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />

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

                    <div className="flex gap-4">
                        <button
                            onClick={() => onOpenChange(false)}
                            className="flex-1 h-[52px] rounded-xl border"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={handleDelete}
                            className="flex-1 h-[52px] rounded-xl bg-[#EB3D4D] text-white"
                        >
                            Delete Account
                        </button>
                    </div>
                </div>
            </CustomModal>
            <SuccessfullDelet
                open={successOpen}
                onOpenChange={setSuccessOpen}
            />
        </>

    );
}