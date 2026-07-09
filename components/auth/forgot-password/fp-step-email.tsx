"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useAuthModalStore } from "@/store/auth-modal.store";
import { FormField } from "@/components/reusable/FormInput";
import CustomButton from "@/components/reusable/CustomButton";

const fpEmailSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type FpEmailInput = z.infer<typeof fpEmailSchema>;

export function FpStepEmail() {
  const [error, setError] = useState("");
  const { nextStep, setFlowData, switchFlow } = useAuthModalStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FpEmailInput>({
    resolver: zodResolver(fpEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FpEmailInput) => {
    setError("");
    try {
      // Mock API delay for sending the token
      await new Promise((resolve) => setTimeout(resolve, 1200));
      console.log("OTP code dispatched to email:", data.email);
      
      // Save data context globally and step forward to the OTP validation screen
      setFlowData({ email: data.email });
      nextStep();
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mx-auto w-full px-2">
      
      {/* Title & Header Section matching image blueprint specifications */}
      <div className="text-center">
        <h2 className="auth-title tracking-tight">
          Forgot Password
        </h2>
        <p className="auth-subtitle mt-3 max-w-[360px] mx-auto text-base sm:text-lg">
          Enter your registered email address. we’ll send you a code to reset your password.
        </p>
      </div>

      {/* Main Form Fields wrapper block */}
      <div className="space-y-5">
        <FormField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          error={errors.email}
          {...register("email")}
        />
      </div>

      {/* Standard Error Feedback Banner */}
      {error && (
        <p className="text-red-500 text-sm bg-red-50 p-3 rounded-xl font-['Archivo']">
          {error}
        </p>
      )}

      {/* Submission & Action Button block elements */}
      <div className="space-y-5">
        <CustomButton type="submit" disabled={isSubmitting} className="w-full h-14 text-base font-semibold">
          {isSubmitting ? "Sending..." : "Send OTP"}
        </CustomButton>

        <p className="font-['Archivo'] text-center text-sm sm:text-base text-[#4A4C56]">
          Back to{" "}
          <button
            type="button"
            onClick={() => switchFlow("sign-in")}
            className="text-[#2563EB] font-semibold hover:underline cursor-pointer"
          >
            Sign in
          </button>
        </p>
      </div>
    </form>
  );
}