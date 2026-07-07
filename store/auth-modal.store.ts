import { create } from "zustand";

type AuthFlow = 'sign-in' | 'sign-up' | 'forgot-password'

type SignInStep = 'credentials' | 'mfa-select' | 'mfa-otp' | 'mfa-authenticator'
type SignUpStep = 'credentials' | 'otp' | 'success'

type ForgotStep = 'email' | 'otp' | 'new-password'

type Step = SignInStep | SignUpStep | ForgotStep

const FLOW_STEPS: Record<AuthFlow, readonly Step[]> = {
  "sign-in": ["credentials", "mfa-select", "mfa-otp", "mfa-authenticator"] as const,
  "sign-up": ["credentials", "otp", "success"] as const,
  "forgot-password": ["email", "otp", "new-password"] as const,
}


// persisted between steps so OTP verify can use it
interface AuthFlowData {
  email?: string;
  mfaMethod?: "email" | "authenticator";
}

interface AuthModalStore {
  isOpen: boolean
  flow: AuthFlow
  step: Step
  flowData: AuthFlowData;

  open: (flow: AuthFlow) => void
  close: () => void
  nextStep: () => void
  prevStep: () => void
  switchFlow: (flow: AuthFlow) => void
  setFlowData: (data: Partial<AuthFlowData>) => void;
}

export const useAuthModalStore = create<AuthModalStore>()((set) => ({
  isOpen: false,
  flow: "sign-in",
  step: "credentials",
  flowData: {},

  open: (flow) => set({ isOpen: true, flow, step: FLOW_STEPS[flow][0], flowData: {} }),
  close: () => set({ isOpen: false, flowData: {} }),
  nextStep: () => set((state) => {
    const steps = FLOW_STEPS[state.flow]
    const idx = steps.indexOf(state.step)
    if (idx < steps.length - 1) return { step: steps[idx + 1] }
    return {}
  }),
  prevStep: () => set((state) => {
    const steps = FLOW_STEPS[state.flow]
    const idx = steps.indexOf(state.step)
    if (idx > 0) return { step: steps[idx - 1] }
    return {}
  }),
  switchFlow: (flow) => set({ flow, step: FLOW_STEPS[flow][0], flowData: {} }),

  setFlowData: (data) => set((state) => ({ flowData: { ...state.flowData, ...data } })),
}))
