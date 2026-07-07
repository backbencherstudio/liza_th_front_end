// components/auth/auth-modal.tsx
"use client";
import CustomModal from "@/components/ui/custom-modal";
import { useAuthModalStore } from "@/store/auth-modal.store";

// sign-up
import { SignUpStepCredentials } from "./sign-up/sign-up-step-credentials";
import { SignUpStepOtp } from "./sign-up/sign-up-step-otp";
import { SignUpStepSuccess } from "./sign-up/sign-up-step-success";

// sign-in
import { SignInStep } from "./sign-in/sign-in-step";
import { MfaMethodSelect } from "./mfa/mfa-method-select";
import { MfaEmailOtp } from "./mfa/mfa-email-otp";
import { MfaAuthenticator } from "./mfa/mfa-authenticator";

// forgot password
import { FpStepEmail } from "./forgot-password/fp-step-email";
import { FpStepOtp } from "./forgot-password/fp-step-otp";
import { FpStepNewPassword } from "./forgot-password/fp-step-new-password";

const FLOW_TITLES = {
  "sign-in": "Welcome back",
  "sign-up": "Create account",
  "forgot-password": "Reset password",
};

export function AuthModal() {
  const { isOpen, flow, step, close } = useAuthModalStore();

  const renderStep = () => {
    if (flow === "sign-in") {
      if (step === "credentials") return <SignInStep />;
      if (step === "mfa-select") return <MfaMethodSelect />;
      if (step === "mfa-otp") return <MfaEmailOtp />;
      if (step === "mfa-authenticator") return <MfaAuthenticator />;
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
      open={isOpen}
      onOpenChange={(open: boolean) => !open && close()}
      title={FLOW_TITLES[flow]}
      size="xsm"
      showCloseButton={true}
      closeButtonType="shadcn"
    >
      {renderStep()}
    </CustomModal>
  );
}