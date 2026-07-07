"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useAuthModalStore } from "@/store/auth-modal.store";

// Simple schema without imports
const signUpSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpInput = z.infer<typeof signUpSchema>;

export function SignUpStepCredentials() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { nextStep, switchFlow, setFlowData } = useAuthModalStore();


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpInput) => {
    setError("");
    setSuccess(false);
    
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Sign up data:", data);
      setSuccess(true);
      setFlowData({ email: data.email });
      nextStep();
      // Next step would go here
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto p-4">
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full p-2 border rounded"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-sm bg-red-50 p-2 rounded">{error}</p>
      )}

      {success && (
        <p className="text-green-500 text-sm bg-green-50 p-2 rounded">
          Account created successfully!
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isSubmitting ? "Creating account..." : "Create account"}
      </button>

      <p className="text-sm text-gray-500">
        Already have an account? <button type="button" onClick={() => switchFlow("sign-in")} className="text-blue-500 hover:text-blue-600">Sign in</button>
      </p>
    </form>
  );
}