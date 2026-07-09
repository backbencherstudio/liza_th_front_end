"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { useAuthModalStore } from "@/store/auth-modal.store";
import { FormField } from "@/components/reusable/FormInput";
import CustomButton from "@/components/reusable/CustomButton";
import { FormSelect } from "@/components/reusable/FormSelect";



const items = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
]

// Schema mapped directly to your UI layout blueprint requirements
const signUpSchema = z.object({
  name: z.string().min(1, "Name is required"),
  industry: z.string().min(1, "Please select your industry"),
  role: z.string().min(1, "Please select your role"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

type SignUpInput = z.infer<typeof signUpSchema>;





const ROLE_OPTIONS = [
  { label: "CFO / Finance Director", value: "cfo" },
  { label: "Accountant / CPA", value: "accountant" },
  { label: "Founder / CEO", value: "founder" },
];


export function SignUpStepCredentials() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { nextStep, switchFlow, setFlowData } = useAuthModalStore();


  const {
    register,
    control,
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

      console.log("submitted data:", data);
      nextStep();
      // Next step would go here
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ">

      <div>
        <h2 className="  auth-title max-w-[320px] mx-auto  ">
          Start your 14 <span className="text-[#2563EB]">day free trial</span> today
        </h2>
        <p className="auth-subtitle mt-3">
          Please enter details by Creating New Account
        </p>
      </div>





      <div className="space-y-4">
        <FormField
          label="Your Name"
          type="text"
          placeholder="Enter your name"
          error={errors.name}
          {...register("name")}
        />

        <Controller
          name="industry"
          control={control}
          render={({ field }) => (
            <FormSelect
              label="Industry"
              placeholder="Select your industry"
              value={field.value}
              onValueChange={field.onChange}
              error={errors.industry}
              options={[
                { label: "Accounting", value: "accounting" },
                { label: "Bookkeeping", value: "bookkeeping" },
                { label: "Finance", value: "finance" },
              ]}
            />
          )}
        />


        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <FormSelect
              label="Your Role"
              placeholder="Select"
              value={field.value}
              onValueChange={field.onChange}
              error={errors.role}
              options={ROLE_OPTIONS}
            />
          )}
        />

        <FormField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          error={errors.email}
          {...register("email")}
        />

        <FormField
          label="Password"
          type="password"
          placeholder="Min 8 characters"
          error={errors.password}
          {...register("password")}
        />






      </div>


      {error && (
        <p className="text-red-500 text-sm bg-red-50 p-2 rounded">{error}</p>
      )}

      {success && (
        <p className="text-green-500 text-sm bg-green-50 p-2 rounded">
          Account created successfully!
        </p>
      )}



      <CustomButton type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Creating account..." : "Get Started"}
      </CustomButton>


      <p className="self-stretch text-cente text-gray-400  font-archivo text-lg text-center leading-6">By continuing, you acknowledge that you understand and agree to the
        <span className="text-[#2563EB]"> Terms & Conditions</span> and <span className="text-[#2563EB]">Privacy-Policy.</span></p>


      <p className="text-gray-500 text-center text-lg font-medium leading-6">
        Already have an account? <button type="button" onClick={() => switchFlow("sign-in")} className="text-blue-500 hover:text-blue-600">Sign in</button>
      </p>

    </form>
  );
}