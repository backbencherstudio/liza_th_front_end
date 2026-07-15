"use client";

import { Mail, Smartphone } from "lucide-react";
import { useAuthModalStore } from "@/store/auth-modal.store";

export function MfaMethodSelect() {
  const { setStep
  } = useAuthModalStore();

  const handleEmail = async () => {
    // TODO: API Call
    // await sendEmailOtp();

    setStep("otp");
  };

  const handleAuthenticator = () => {
    setStep("authenticator");
  };

  return (
    <div className="w-[480px]">
      <h2 className="text-[28px] font-semibold text-[#151513]">
        Two-factor authentication
      </h2>

      <p className="mt-3 text-[#666]">
        Choose how you want to receive your verification code.
      </p>

      <div className="mt-8 space-y-4">
        <button
          onClick={handleEmail}
          className="flex w-full items-center gap-4 rounded-xl border border-[#E5E7EB] p-5 transition hover:border-[#2563EB]"
        >
          <Mail size={24} />
          <div className="text-left">
            <p className="font-medium">Email Verification</p>
            <p className="text-sm text-[#666]">
              Receive OTP in your email.
            </p>
          </div>
        </button>

        <button
          onClick={handleAuthenticator}
          className="flex w-full items-center gap-4 rounded-xl border border-[#E5E7EB] p-5 transition hover:border-[#2563EB]"
        >
          <Smartphone size={24} />
          <div className="text-left">
            <p className="font-medium">Authenticator App</p>
            <p className="text-sm text-[#666]">
              Google Authenticator / Microsoft Authenticator
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}