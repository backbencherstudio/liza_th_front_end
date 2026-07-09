"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "@/components/reusable/CustomButton";

export function SignInSuccess() {
  return (
    <div>
      <div className="w-full max-w-[378px] aspect-[378/200] mx-auto">
        <Image
          className="w-full h-full object-contain"
          src="/assets/others/success3.svg"
          alt="success"
          width={378}
          height={200}
          priority
        />
      </div>

      <div className="text-center mt-10">
        <h2 className="auth-title mb-3">
          Welcome Back!
        </h2>

        <p className="auth-subtitle max-w-[370px] mx-auto">
        Congratulations! Your verification is successful. Let's get started!
        </p>
      </div>

      <CustomButton className="w-full mt-8">
        Get Started
      </CustomButton>
    </div>
  );
}