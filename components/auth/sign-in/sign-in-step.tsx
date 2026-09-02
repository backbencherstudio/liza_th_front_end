"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthModalStore } from "@/store/auth-modal.store";
import { useLoginMutation, useLazyMeQuery } from "@/store/features/auth/authApi";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials, setToken } from "@/store/features/auth/authSlice";
import { isTwoFactorChallenge } from "@/store/features/auth/authTypes";
import { getHomeForRole } from "@/lib/auth/roles";
import { FormField } from "@/components/reusable/FormInput";
import CustomButton from "@/components/reusable/CustomButton";
import UserIcon from "@/components/icons/UserIcon";
import { Eye, EyeOff } from "lucide-react";

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

type SignInInput = z.infer<typeof signInSchema>;

export function SignInStep() {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { switchFlow, nextStep, setFlowData } = useAuthModalStore();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const [triggerMe] = useLazyMeQuery();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "user@example.com", password: "Password1234!", rememberMe: false },
  });

  const onSubmit = async (data: SignInInput) => {
    setError("");
    try {
      const result = await login({
        email: data.email,
        password: data.password,
        remember_me: data.rememberMe ?? false,

      }).unwrap();

      if (isTwoFactorChallenge(result)) {
        // 2FA is on for this account — hand off to the OTP step instead
        // of treating this as a finished login.
        setFlowData({
          email: data.email,
          challengeId: result.challenge_id,
          maskedDestination: result.masked_destination,
        });
        nextStep();
        return;
      }

      // No 2FA — this response IS the finished login.
      dispatch(setToken(result.access_token));
      try {
        const user = await triggerMe(undefined, false).unwrap();
        dispatch(setCredentials({ token: result.access_token, user }));
        useAuthModalStore.getState().close();
        router.replace(getHomeForRole(user.role));
      } catch {
        dispatch(setToken(result.access_token));
        setError("Signed in, but your profile could not be loaded. Try again.");
      }
    } catch (err: unknown) {
      const detail =
        typeof err === "object" &&
        err !== null &&
        "data" in err &&
        typeof (err as { data?: { detail?: unknown } }).data?.detail === "string"
          ? (err as { data: { detail: string } }).data.detail
          : null;
      setError(detail ?? "Invalid email or password. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8  mx-auto w-full px-2">
      <div className="text-center">
        <div className="flex items-center justify-center">
          <div className="w-21 h-21 flex items-start gap-4 border [background:linear-gradient(180deg,rgba(59,130,246,0.15)_0%,rgba(59,130,246,0.00)_100%,rgba(59,130,246,0.00)_100%)] p-4 rounded-[96px] border-solid border-[rgba(59,130,246,0.10)]">
            <div className="w-[52px] h-[52px] flex justify-center items-center gap-3.5 border [background:var(--Greyscale-0,#FFF)] shadow-[0_2px_4px_0_rgba(179,212,253,0.04)] p-3.5 rounded-[96px] border-solid border-[#D1E2FD]">
              <UserIcon />
            </div>
          </div>
        </div>
        <h2 className="auth-title tracking-tight">
          Sign in to Spike Technology
        </h2>
      </div>

      <div className="space-y-5">
        <FormField
          label="Email Address *"
          type="email"
          placeholder="Enter your email"
          error={errors.email}
          {...register("email")}
        />

        <div className="relative">
          <FormField
            label="Password *"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            error={errors.password}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-4 top-[70%] -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Eye className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between font-['Archivo'] text-sm sm:text-base">
          <label className="flex items-center gap-2 text-[#151513] cursor-pointer select-none">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="w-4 h-4 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            onClick={() => switchFlow("forgot-password")}
            className="text-[#2563EB] font-medium hover:underline cursor-pointer"
          >
            Forgot password?
          </button>
        </div>
      </div>

      {error && (
        <p className="text-red-500 text-sm bg-red-50 p-3 rounded-xl font-['Archivo']">
          {error}
        </p>
      )}

      <div className="space-y-5">
        <CustomButton type="submit" disabled={isSubmitting} className="w-full h-14 text-base font-semibold">
          {isSubmitting ? "Signing in..." : "Get started"}
        </CustomButton>

        <p className="font-['Archivo'] text-center text-sm sm:text-base text-[#4A4C56]">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => switchFlow("sign-up")}
            className="text-[#2563EB] font-semibold hover:underline cursor-pointer"
          >
            Register
          </button>
        </p>
      </div>
    </form>
  );
}