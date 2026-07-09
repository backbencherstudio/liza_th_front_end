"use client";

import { useAuthModalStore } from "@/store/auth-modal.store";

export function SignUpStepOtp() {

  const { nextStep, switchFlow, setFlowData } = useAuthModalStore();

  return <div>sign-up-step-otp

    <button onClick={() => nextStep()} >next</button>
  </div>;
}
