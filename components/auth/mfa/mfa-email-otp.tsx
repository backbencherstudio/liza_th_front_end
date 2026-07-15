"use client";

import { useState } from "react";
import { useAuthModalStore } from "@/store/auth-modal.store";

export function MfaEmailOtp() {
  const { close } = useAuthModalStore();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    try {
      setLoading(true);

      // TODO:
      // await verifyOtpApi(otp);

      alert("MFA Enabled Successfully");

      close();
    } catch (error) {
      console.error(error);
      alert("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    // await resendOtpApi();
    alert("OTP Sent");
  };

  return (
    <div className="w-[460px]">
      <h2 className="text-[28px] font-semibold text-[#151513]">
        Verify Email
      </h2>

      <p className="mt-3 text-[#666]">
        Enter the verification code sent to your email.
      </p>

      <input
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="mt-8 h-12 w-full rounded-lg border border-[#E5E7EB] px-4 outline-none focus:border-[#2563EB]"
      />

      <button
        onClick={handleVerify}
        disabled={loading}
        className="mt-6 h-12 w-full rounded-lg bg-[#2563EB] font-medium text-white transition hover:bg-[#1D4ED8]"
      >
        {loading ? "Verifying..." : "Verify"}
      </button>

      <button
        onClick={handleResend}
        className="mt-4 w-full text-center text-sm font-medium text-[#2563EB]"
      >
        Resend Code
      </button>
    </div>
  );
}