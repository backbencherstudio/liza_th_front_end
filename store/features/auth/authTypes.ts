export type { AuthUser } from "@/store/features/auth/authSlice";
  
  export type TokenResponse = {
    access_token: string;
    token_type: string;
    access_token_expires_in: number;
  };
  
  export type TwoFactorChallenge = {
    verification_required: true;
    challenge_id: string;
    purpose: "login" | "sign-up" | "forgot-password"; // extend as backend confirms other purposes
    delivery_method: "email";
    masked_destination: string;
    expires_in: number;
  };
  
  // The login endpoint returns one or the other — never both.
  export type LoginResponse = TokenResponse | TwoFactorChallenge;
  
  export function isTwoFactorChallenge(
    res: LoginResponse
  ): res is TwoFactorChallenge {
    return "verification_required" in res;
  }