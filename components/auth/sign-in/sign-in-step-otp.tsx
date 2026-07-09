"use client";

import React, { useState, useRef, useEffect } from "react";
import { useAuthModalStore } from "@/store/auth-modal.store";
import CustomButton from "@/components/reusable/CustomButton";

export function SignInStepOtp() {
  const { nextStep, flowData } = useAuthModalStore();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeInputIdx, setActiveInputIdx] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Dynamic fallback email matching your provided visual blueprint state
  const targetEmail = flowData?.email || "sujoy.shill@example.com";

  const inputRefs = useRef<HTMLInputElement[]>([]);

  // Focus the correct input dynamically when indexing mutations occur
  useEffect(() => {
    inputRefs.current[activeInputIdx]?.focus();
  }, [activeInputIdx]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    const newOtp = [...otp];
    
    // Only accept the latest character entered to overwrite correctly
    newOtp[index] = val.substring(val.length - 1);
    setOtp(newOtp);

    if (!val) {
      // Shift focus left if character is removed
      if (index > 0) setActiveInputIdx(index - 1);
    } else {
      // Shift focus right if character is entered
      if (index < 5) setActiveInputIdx(index + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Handle backspace navigation explicitly when input field is already empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      setActiveInputIdx(index - 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    
    // Validate that pasted text is numeric and match structure lengths
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
    try {
      // Mock validation verification process delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("Verified OTP Token:", otpValue);
      nextStep();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8  mx-auto w-full px-2">
      {/* Dynamic Header Block Context mapping exactly to image_81daa4.png layout rules */}
      <div className="text-center">
        <h2 className="auth-title mb-3">
          Enter OTP
        </h2>
        <p className="auth-subtitle max-w-[340px] mx-auto">
          We have share a code of your registered email address{" "}
          <span className="text-[#151513] font-medium block mt-0.5">{targetEmail}</span>
        </p>
      </div>

      {/* Grid wrapper holding all 6 single character blocks matching custom focus/error design tokens */}
      <div className="flex items-center justify-between gap-2 sm:gap-3.5">
        {otp.map((digit, index) => {
          // Visual helpers mimicking validation mock states from your UI mockups
          const isSecondInputMockError = index === 1 && digit === "2";
          const isThirdInputActive = index === 2 && activeInputIdx === 2;

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
                w-10 h-12 sm:w-14 sm:h-16 text-center text-lg font-semibold font-['Archivo']
                rounded-xl border outline-none transition-all duration-200
                ${isThirdInputActive 
                  ? "border-[#2563EB] text-[#151513] bg-white ring-4 ring-blue-50" 
                  : "border-[rgba(8,14,30,0.08)] text-[#151513] bg-[#FCFCFD] focus:border-[#2563EB] focus:ring-4 focus:ring-blue-50"
                }
              `}
            />
          );
        })}
      </div>

      {/* Bottom Form Actions Control stack layout mapping exactly to image_81daa4.png definitions */}
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
          onClick={() => console.log("Requesting raw resend token refresh callback updates...")}
          className="relative w-full flex h-14 items-center justify-center px-6 rounded-xl border border-[#0A206D] bg-white transition-colors hover:bg-[#f4f7ff] cursor-pointer overflow-hidden font-['Archivo'] font-semibold text-base text-[#0A206D]"
        >
          Resend OTP
          <div
            className="absolute inset-[3px] rounded-[9px] border border-[#0A206D] pointer-events-none"
            style={{
              maskImage: "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 40%)",
              WebkitMaskImage: "linear-gradient(to bottom right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 40%)",
            }}
          />
        </button>
      </div>
    </form>
  );
}