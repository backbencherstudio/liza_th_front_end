"use client";

import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("mb-2 block font-[Archivo] font-normal", {
  variants: {
    variant: {
      auth: "text-[18px] leading-[26px] text-[#151513]",
      cms: "text-[color:var(--Primary-Black,#1A1A1A)] [font-family:var(--Family-font-family,Archivo)] text-[length:var(--Scale-body\_3,16px)] font-normal leading-[var(--Line-Height-body\_3,22px)]",
    },
  },
  defaultVariants: {
    variant: "auth",
  },
});

const inputVariants = cva(
  "flex w-full outline-none transition-colors backdrop-blur-[2px]",
  {
    variants: {
      variant: {
        auth: "h-[52px] rounded-xl border border-[rgba(8,14,30,0.05)] p-4 focus:border-[#182144] placeholder:text-[16px] placeholder:leading-[24px]",
        cms: "h-12 rounded-lg border border-[#E1E4EA] bg-white px-2.5 py-2 text-sm shadow-[0_1px_2px_0_rgba(10,13,20,0.03)] focus:border-[#2563EB] placeholder:text-sm placeholder:text-[#777980] w-full",
      },
    },
    defaultVariants: {
      variant: "auth",
    },
  }
);

interface FormFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label: string;
  error?: FieldError;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

export function FormField({
  label,
  error,
  variant = "auth",
  className,
  labelClassName,
  wrapperClassName,
  ...inputProps
}: FormFieldProps) {
  return (
    <div className={cn("w-full", wrapperClassName)}>
      <label className={cn(labelVariants({ variant }), labelClassName)}>
        {label}
      </label>
      <input
        className={cn(inputVariants({ variant }), className)}
        {...inputProps}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}
