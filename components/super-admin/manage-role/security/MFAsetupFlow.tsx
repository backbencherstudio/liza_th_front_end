"use client";

import React, { useState } from "react";
import { useAuthModalStore } from "@/store/auth-modal.store";
import { FormField } from "@/components/reusable/FormInput";
import CustomButton from "@/components/reusable/CustomButton";

type MFAStep = "email" | "otp" | "success";

export function MFASetupFlow() {
    const { nextStep, close, setFlowData, flowData } = useAuthModalStore();

    const [step, setStep] = useState<MFAStep>("email");
    const [email, setEmail] = useState(flowData?.email || "");
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Handle OTP Change
    const handleOtpChange = (value: string, index: number) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        setError("");

        if (value && index < 5) {
            const next = document.getElementById(`otp-${index + 1}`);
            next?.focus();
        }
    };

    const sendOTP = async () => {
        if (!email) return;
        setIsLoading(true);

        await new Promise(resolve => setTimeout(resolve, 800));
        setStep("otp");
        setIsLoading(false);
    };

    const verifyOTP = async () => {
        const otpCode = otp.join("");
        if (otpCode.length !== 6) return;

        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (otpCode === "123456") {
            setStep("success");
        } else {
            setError("Invalid OTP. Please try again.");
        }
        setIsLoading(false);
    };

    const resendOTP = () => {
        setOtp(Array(6).fill(""));
        setError("");
        alert("New OTP sent to your email");
    };

    return (
        <div className="space-y-8 px-2">
            {/* Step 1: Email */}
            {step === "email" && (
                <div className="space-y-6">
                    <div className="text-center">
                        <h2 className="auth-title">Enable Two-Factor Authentication</h2>
                        <p className="auth-subtitle mt-3">
                            We'll send a verification code to your email
                        </p>
                    </div>

                    <FormField
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <CustomButton
                        onClick={sendOTP}
                        disabled={!email || isLoading}
                        className="w-full"
                    >
                        {isLoading ? "Sending OTP..." : "Send OTP"}
                    </CustomButton>
                </div>
            )}

            {/* Step 2: OTP Input */}
            {step === "otp" && (
                <div className="space-y-6">
                    <div className="text-center">
                        <h2 className="auth-title">Enter OTP</h2>
                        <p className="auth-subtitle mt-2">
                            We sent a code to <span className="font-medium">{email}</span>
                        </p>
                    </div>

                    <div className="flex justify-center gap-3">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleOtpChange(e.target.value, index)}
                                className="w-12 h-14 text-center text-2xl border-2 border-gray-300 rounded-xl focus:border-[#2563EB] focus:ring-4 focus:ring-blue-100 outline-none"
                            />
                        ))}
                    </div>

                    {error && <p className="text-red-500 text-center">{error}</p>}

                    <CustomButton
                        onClick={verifyOTP}
                        disabled={otp.join("").length !== 6 || isLoading}
                        className="w-full"
                    >
                        {isLoading ? "Verifying..." : "Verify OTP"}
                    </CustomButton>

                    <button
                        onClick={resendOTP}
                        className="w-full text-[#2563EB] font-medium py-3 hover:bg-gray-50 rounded-xl border"
                    >
                        Resend OTP
                    </button>
                </div>
            )}

            {/* Step 3: Success + Recovery Codes */}
            {step === "success" && (
                <div className="text-center space-y-6">
                    <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-5xl">✅</span>
                    </div>

                    <h2 className="auth-title">MFA Setup Complete!</h2>
                    <p className="auth-subtitle">Save these recovery codes in a safe place</p>

                    {/* Recovery Codes */}
                    <div className="grid grid-cols-2 gap-3 text-left bg-gray-50 p-4 rounded-2xl">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="font-mono text-sm bg-white p-2 rounded border">
                                X7K9-P2M4-{i + 1}N8
                            </div>
                        ))}
                    </div>

                    <CustomButton onClick={() => {
                        // Finalize MFA
                        nextStep();
                        close();
                    }} className="w-full">
                        Complete Setup
                    </CustomButton>
                </div>
            )}
        </div>
    );
}