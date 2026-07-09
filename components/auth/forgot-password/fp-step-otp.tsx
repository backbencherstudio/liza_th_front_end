"use client";

import React, { useState, useRef, useEffect } from "react";
import { useAuthModalStore } from "@/store/auth-modal.store";
import CustomButton from "@/components/reusable/CustomButton";

export function FpStepOtp() {
  const { nextStep, flowData } = useAuthModalStore();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeInputIdx, setActiveInputIdx] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Safely fallback if no email is attached to the current auth context
  const targetEmail = flowData?.email || "sujoy.shill@example.com";

  const inputRefs = useRef<HTMLInputElement[]>([]);

  // Smooth keyboard index tracking focus
  useEffect(() => {
    inputRefs.current[activeInputIdx]?.focus();
  }, [activeInputIdx]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    const newOtp = [...otp];
    
    // Only capture the last input element to avoid double digits
    newOtp[index] = val.substring(val.length - 1);
    setOtp(newOtp);
    setError("");

    if (!val) {
      if (index > 0) setActiveInputIdx(index - 1);
    } else {
      if (index < 5) setActiveInputIdx(index + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Navigate backwards on empty backspace trigger
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

    setIsSubmitting(true);
    setError("");
    
    try {
      // Mock validation verification process delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("MFA OTP Verified:", otpValue);
      if (nextStep) nextStep();
    } catch (err) {
      setError("Invalid code. Please verify your token and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 mx-auto w-full px-2">
      
      {/* Title Header Mapping directly to your structural layouts */}
      <div className="text-center">
        <h2 className="text-[#151513] font-['Archivo'] text-3xl font-semibold leading-10 mb-3">
          Enter OTP
        </h2>
        <p className="text-[#4A4C56] font-['Archivo'] text-base font-normal leading-6 max-w-[380px] mx-auto">
          We have share a code of your registered email address{" "}
          <span className="text-[#151513] font-medium block mt-0.5">{targetEmail}</span>
        </p>
      </div>

      {/* 6-Digit Grid Wrapper with Dynamic Mock State Variations */}
      <div className="flex items-center justify-between gap-2.5 sm:gap-3">
        {otp.map((digit, index) => {
          // Dynamic UI status flags derived directly from your image assets
          const isErrorState = index === 1 && digit === "2" || error !== "";
          const isActiveFocus = index === 2 && activeInputIdx === 2;

          return (
            <input
              key={index}
              ref={(el) => { if (el) inputRefs.current[index] = el; }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onPaste={handlePaste}
              onFocus={() => setActiveInputIdx(index)}
              className={`
                w-12 h-14 sm:w-14 sm:h-16 text-center text-lg font-semibold font-['Archivo']
                rounded-xl border outline-none bg-[#FCFCFD] transition-all duration-200
                ${isErrorState 
                  ? "border-red-400 text-red-500 bg-red-50/30 ring-4 ring-red-50" 
                  : isActiveFocus 
                    ? "border-[#2563EB] text-[#151513] bg-white ring-4 ring-blue-50" 
                    : "border-[rgba(8,14,30,0.08)] text-[#151513] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50"
                }
              `}
            />
          );
        })}
      </div>

      {/* Feedback Alerts */}
      {error && (
        <p className="text-red-500 text-sm text-center font-['Archivo'] bg-red-50 p-2.5 rounded-lg">
          {error}
        </p>
      )}

      {/* Form Action Buttons Stack matching design configurations */}
      <div className="space-y-4 pt-2">
        <CustomButton 
          type="submit" 
          disabled={isSubmitting || otp.join("").length < 6} 
          className="w-full h-14 text-base font-semibold"
        >
          {isSubmitting ? "Verifying..." : "Submit"}
        </CustomButton>

        <button
          type="button"
          onClick={() => console.log("Resending new OTP...")}
          className="relative w-full flex h-14 items-center justify-center px-6 rounded-xl border border-[#0A206D] bg-white transition-colors hover:bg-[#f4f7ff] cursor-pointer overflow-hidden font-['Archivo'] font-semibold text-base text-[#0A206D]"
        >
          Resend OTP
          {/* Subtle inner accent ring design wrapper match */}
          <div
            className="absolute inset-[3px] rounded-[9px] border border-[#0A206D]/30 pointer-events-none"
            style={{
              maskImage: "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%)",
              WebkitMaskImage: "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%)",
            }}
          />
        </button>
      </div>
    </form>
  );
}


