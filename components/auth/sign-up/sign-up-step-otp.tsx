"use client";

import React, { useState, useRef, useEffect } from "react";
import { useAuthModalStore } from "@/store/auth-modal.store";
import CustomButton from "@/components/reusable/CustomButton";
import {
  useVerifyEmailMutation,
  useResendVerificationMutation,
} from "@/store/features/auth/authApi";
import { getApiErrorMessage } from "@/lib/getApiErrorMessage"; // adjust path

export function SignUpStepOtp() {
  const { nextStep, flowData } = useAuthModalStore();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeInputIdx, setActiveInputIdx] = useState(0);
  const [error, setError] = useState("");
  const [resendSuccess, setResendSuccess] = useState("");
  const [resendCooldown, setResendCooldown] = useState(60);

  const [verifyEmail, { isLoading: isVerifying }] = useVerifyEmailMutation();
  const [resendVerification, { isLoading: isResending }] = useResendVerificationMutation();

  const targetEmail = flowData?.email || "sujoy.shill@example.com";
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Focus management
  useEffect(() => {
    inputRefs.current[activeInputIdx]?.focus();
  }, [activeInputIdx]);

  // Cooldown timer for resend button
  useEffect(() => {
    if (resendCooldown <= 0) return;

    const timer = setInterval(() => {
      setResendCooldown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [resendCooldown]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    const newOtp = [...otp];

    newOtp[index] = val.substring(val.length - 1);
    setOtp(newOtp);

    if (error) setError("");
    if (resendSuccess) setResendSuccess("");

    if (!val) {
      if (index > 0) setActiveInputIdx(index - 1);
    } else {
      if (index < 5) setActiveInputIdx(index + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      setActiveInputIdx(index - 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    if (!/^\d+$/.test(pastedData)) return;

    const pastedChars = pastedData.split("").slice(0, 6);
    const newOtp = [...otp];

    pastedChars.forEach((char, idx) => {
      newOtp[idx] = char;
    });

    setOtp(newOtp);
    setActiveInputIdx(Math.min(pastedChars.length, 5));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");

    if (otpValue.length < 6) return;
    if (!flowData?.email) {
      setError("Email not found. Please go back and try again.");
      return;
    }

    setError("");
    setResendSuccess("");

    try {
      await verifyEmail({
        email: flowData.email,
        otp: otpValue,
      }).unwrap();

      nextStep();
    } catch (err) {
      setError(getApiErrorMessage(err, "Invalid or expired code. Please try again."));
    }
  };

  const handleResendOtp = async () => {
    if (!flowData?.email || resendCooldown > 0 || isResending) return;

    setError("");
    setResendSuccess("");

    try {
      await resendVerification({ email: flowData.email }).unwrap();
      setResendSuccess("A new code has been sent to your email.");
      setResendCooldown(60); // 60 second cooldown
      setOtp(new Array(6).fill("")); // clear old OTP
      setActiveInputIdx(0);
    } catch (err) {
      setError(getApiErrorMessage(err, "Failed to resend code. Please try again."));
    }
  };

  const resendLabel = isResending
    ? "Sending..."
    : resendCooldown > 0
      ? `You can resend after ${Math.floor(resendCooldown / 60)}:${String(resendCooldown % 60).padStart(2, "0")}`
      : "Resend OTP";

  return (
    <form onSubmit={handleSubmit} className="space-y-8 mx-auto w-full px-2">
      <div className="text-center">
        <h2 className="auth-title mb-3">Enter OTP</h2>
        <p className="auth-subtitle max-w-[380px] mx-auto">
          We have share a code of your registered email address{" "}
          <span className="text-[#151513] font-medium block mt-0.5">
            {targetEmail}
          </span>
        </p>
      </div>

      {/* OTP Inputs */}
      <div className="flex items-center justify-between gap-2 sm:gap-3.5">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            onFocus={() => setActiveInputIdx(index)}
            className={`
              w-10 h-12 sm:w-14 sm:h-16 text-center text-lg font-semibold font-['Archivo']
              rounded-xl border outline-none transition-all duration-200
              ${
                error
                  ? "border-red-400 bg-red-50 text-[#151513]"
                  : activeInputIdx === index
                  ? "border-[#2563EB] text-[#151513] bg-white ring-4 ring-blue-50"
                  : "border-[rgba(8,14,30,0.08)] text-[#151513] bg-[#FCFCFD] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50"
              }
            `}
          />
        ))}
      </div>

      {/* Error / Success messages */}
      {error && (
        <p className="text-sm text-red-500 text-center -mt-4">{error}</p>
      )}
      {resendSuccess && (
        <p className="text-sm text-green-600 text-center -mt-4">{resendSuccess}</p>
      )}

      {/* Actions */}
      <div className="space-y-4 pt-2">
        <CustomButton
          type="submit"
          disabled={isVerifying || otp.join("").length < 6}
          className="w-full h-14 text-base font-semibold"
        >
          {isVerifying ? "Verifying..." : "Submit"}
        </CustomButton>

        <button
          type="button"
          onClick={handleResendOtp}
          disabled={isResending || resendCooldown > 0}
          className="relative w-full flex h-14 items-center justify-center px-6 rounded-xl border border-[#0A206D] bg-white transition-colors hover:bg-[#f4f7ff] cursor-pointer overflow-hidden font-['Archivo'] font-semibold text-base text-[#0A206D] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {resendLabel}
          <div
            className="absolute inset-[3px] rounded-[9px] border border-[#0A206D] pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 40%)",
              WebkitMaskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 40%)",
            }}
          />
        </button>
      </div>
    </form>
  );
}