"use client";

import { TextareaHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("mb-2 block font-[Archivo] font-normal", {
  variants: {
    variant: {
      auth: "text-[18px] leading-[26px] text-[#151513]",
      cms: "text-[color:var(--Primary-Black,#1A1A1A)] [font-family:var(--Family-font-family,Archivo)] text-[length:var(--Scale-body_3,16px)] font-normal leading-[var(--Line-Height-body_3,22px)]",
    },
  },
  defaultVariants: {
    variant: "auth",
  },
});

const textareaVariants = cva(
  "flex w-full outline-none transition-colors backdrop-blur-[2px] resize-none",
  {
    variants: {
      variant: {
        auth: "min-h-[100px] rounded-xl border border-[rgba(8,14,30,0.05)] p-4 focus:border-[#182144] placeholder:text-[16px] placeholder:leading-[24px]",
        cms: "flex h-[72px] items-start gap-2 self-stretch rounded-[8px] border border-solid border-[#E1E4EA] bg-white pl-2.5 pr-2 py-2 text-sm shadow-[0_1px_2px_0_rgba(10,13,20,0.03)] focus:border-[#2563EB] placeholder:text-sm placeholder:text-[#777980] w-full font-[Archivo]",
      },
    },
    defaultVariants: {
      variant: "auth",
    },
  }
);

interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label: string;
  error?: FieldError;
  className?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

export function FormTextarea({
  label,
  error,
  variant = "auth",
  className,
  labelClassName,
  wrapperClassName,
  ...textareaProps
}: FormTextareaProps) {
  return (
    <div className={cn("w-full", wrapperClassName)}>
      <label className={cn(labelVariants({ variant }), labelClassName)}>
        {label}
      </label>
      <textarea
        className={cn(textareaVariants({ variant }), className)}
        {...textareaProps}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
    </div>
  );
}