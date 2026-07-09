"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useAuthModalStore } from "@/store/auth-modal.store";
import { FormField } from "@/components/reusable/FormInput";
import CustomButton from "@/components/reusable/CustomButton";

const newPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type NewPasswordInput = z.infer<typeof newPasswordSchema>;

export function FpStepNewPassword() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { nextStep } = useAuthModalStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewPasswordInput>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: NewPasswordInput) => {
    setError("");
    setSuccess(false);

    try {
      // Mock API password reset request delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Password updated successfully.");
      
      setSuccess(true);
      // Advance to the dynamic Success Graphic step scene panel mapping context
      if (nextStep) nextStep();
    } catch (err: any) {
      setError("Failed to update password. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 mx-auto w-full px-2">
      
      {/* Title Header Block */}
      <div className="text-center">
        <h2 className="auth-title tracking-tight text-2xl sm:text-3xl">
          Create your new password
        </h2>
      </div>

      {/* Main Password Entry Form Stack */}
      <div className="space-y-5">
        <FormField
          label="New Password"
          type="password"
          placeholder="Enter your password"
          error={errors.password}
          {...register("password")}
        />

        <div>
          <FormField
            label="Confirm New Password"
            type="password"
            placeholder="Enter your password"
            error={errors.confirmPassword}
            {...register("confirmPassword")}
          />
          
          {/* Visual requirements helper note footer element */}
          <p className="text-sm text-[#4A4C56] font-['Archivo'] mt-2 px-0.5">
            At least 1 letter, 1 number and 8 characters
          </p>
        </div>
      </div>

      {/* Real-time Status Notification Blocks */}
      {error && (
        <p className="text-red-500 text-sm bg-red-50 p-3 rounded-xl font-['Archivo']">
          {error}
        </p>
      )}

      {success && (
        <p className="text-green-500 text-sm bg-green-50 p-3 rounded-xl font-['Archivo']">
          Password updated successfully! Redirecting...
        </p>
      )}

      {/* Form Submit Primary Control Element */}
      <div className="pt-2">
        <CustomButton type="submit" disabled={isSubmitting} className="w-full h-14 text-base font-semibold">
          {isSubmitting ? "Saving..." : "Save"}
        </CustomButton>
      </div>
    </form>
  );
}