// components/auth/auth-modal.tsx
"use client";

import { useAuthModalStore } from "@/store/auth-modal.store";

// sign-up
import { SignUpStepCredentials } from "./sign-up/sign-up-step-credentials";
import { SignUpStepOtp } from "./sign-up/sign-up-step-otp";
import { SignUpStepSuccess } from "./sign-up/sign-up-step-success";

// sign-in
import { SignInStep } from "./sign-in/sign-in-step";
import { MfaEmailOtp } from "./mfa/mfa-email-otp";
import { MfaAuthenticator } from "./mfa/mfa-authenticator";

// forgot password
import { FpStepEmail } from "./forgot-password/fp-step-email";
import { FpStepOtp } from "./forgot-password/fp-step-otp";
import { FpStepNewPassword } from "./forgot-password/fp-step-new-password";
import CustomModal from "../reusable/CustomModal";
import { SignInStepOtp } from "./sign-in/sign-in-step-otp";
import { SignInSuccess } from "./sign-in/sign-in-success";


export function AuthModal() {
  const { isOpen, flow, step, close } = useAuthModalStore();

  const renderStep = () => {
    if (flow === "sign-in") {
      if (step === "credentials") return <SignInStep />;
      if (step === "otp") return <SignInStepOtp />;
      if (step === "success") return <SignInSuccess />;
    }

    if (flow === "sign-up") {
      if (step === "credentials") return <SignUpStepCredentials />;
      if (step === "otp") return <SignUpStepOtp />;
      if (step === "success") return <SignUpStepSuccess />;
    }

    if (flow === "forgot-password") {
      if (step === "email") return <FpStepEmail />;
      if (step === "otp") return <FpStepOtp />;
      if (step === "new-password") return <FpStepNewPassword />;
    }
  };

  return (

    <CustomModal
      showCloseButton={false}
      open={isOpen}
      onOpenChange={(open: boolean) => !open && close()}>

      {renderStep()}

    </CustomModal>






  );
}