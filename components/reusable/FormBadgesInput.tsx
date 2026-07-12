"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
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

const inputVariants = cva(
  "flex w-full outline-none transition-colors backdrop-blur-[2px]",
  {
    variants: {
      variant: {
        auth: "h-[52px] rounded-xl border border-[rgba(8,14,30,0.05)] p-4 focus:border-[#182144] placeholder:text-[16px] placeholder:leading-[24px]",
        cms: "h-12 rounded-lg border border-[#E1E4EA] bg-white pl-2.5 pr-10 py-2 text-sm shadow-[0_1px_2px_0_rgba(10,13,20,0.03)] focus:border-[#2563EB] placeholder:text-sm placeholder:text-[#777980] w-full font-[Archivo]",
      },
    },
    defaultVariants: {
      variant: "auth",
    },
  }
);

interface FormBadgesInputProps extends VariantProps<typeof inputVariants> {
  label: string;
  badges: string[];
  onAddBadge: (newBadge: string) => void;
  onRemoveBadge: (index: number) => void;
  placeholder?: string;
  wrapperClassName?: string;
  labelClassName?: string;
}

export function FormBadgesInput({
  label,
  badges,
  onAddBadge,
  onRemoveBadge,
  variant = "auth",
  placeholder = "Input name",
  wrapperClassName,
  labelClassName,
}: FormBadgesInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddBadge(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd(e);
    }
  };

  return (
    <div className={cn("w-full", wrapperClassName)}>
      {/* Label section */}
      <label className={cn(labelVariants({ variant }), labelClassName)}>
        {label}
      </label>

      {/* Input container row */}
      <div className="relative flex w-full items-center">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={inputVariants({ variant })}
        />

        <button
          type="button"
          onClick={handleAdd}
          className="absolute right-3 p-1 rounded-md transition-colors hover:bg-gray-50 flex items-center justify-center"
        >
          <Plus size={16} className="text-[#2563EB]" />
        </button>
      </div>

      {/* Badges preview row layout */}
      {badges.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {badges.map((item, index) => (
            <div
              key={index}
              className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1 font-[Archivo] text-xs font-medium rounded-full transition-all",
                variant === "cms"
                  ? "bg-[#EBF3FF] text-[#2563EB]"
                  : "bg-[#EEF4FF] text-[#151513]"
              )}
            >
              <span>{item}</span>

              <button
                type="button"
                onClick={() => onRemoveBadge(index)}
                className="flex items-center justify-center rounded-full p-0.5 opacity-70 hover:opacity-100 transition-opacity"
              >
                <X size={12} className={variant === "cms" ? "text-[#2563EB]" : "text-gray-500"} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}