"use client";

import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: FieldError;
}

export function FormField({ label, error, ...inputProps }: FormFieldProps) {
    return (
        <div>
            <label className="text-[#151513] font-[Archivo] text-[18px] font-normal leading-[26px] mb-2 block">
                {label}
            </label>
            <input
                className="
         flex h-[52px] w-full self-stretch
         rounded-xl border border-[rgba(8,14,30,0.05)]
         p-4 outline-none backdrop-blur-[2px]
         transition-colors focus:border-[#182144]
         placeholder:text-[16px]
         placeholder:leading-[24px]
       "
                {...inputProps}
            />
            {error && (
                <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
        </div>
    );
}