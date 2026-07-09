"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldError } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";


interface SelectOption {
  label: string;
  value: string;
}

interface FormSelectProps {
  label: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  error?: FieldError;
  disabled?: boolean;
  className?: string;
}

export function FormSelect({
  label,
  placeholder = "Select an option",
  options,
  value,
  onValueChange,
  error,
  disabled,
  className,
}: FormSelectProps) {
  return (
    <div className={className}>
      <label className="text-[#151513] font-[Archivo] text-[18px] font-normal leading-[26px] mb-2 block">
        {label}
      </label>

      <Select
        value={value}
        items={options}
        onValueChange={(nextValue) => {
          if (nextValue != null) {
            onValueChange?.(nextValue);
          }
        }}
        disabled={disabled}
      >
        <SelectTrigger
          className={cn(
            "group flex h-[52px] py-6 w-full items-center justify-between",
            "border border-[rgba(8,14,30,0.05)] backdrop-blur-[2px]",
            "px-4 rounded-xl",
            "text-[16px] font-[Archivo] font-normal",
            "outline-none focus:ring-0 focus:border-[#0A206D]",
            "transition-colors bg-transparent",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error && "border-red-500 focus:border-red-500",
            "[&>svg:not(.select-trigger-chevron)]:hidden",
            "[&[data-popup-open]_.select-trigger-chevron]:rotate-180"
          )}
        >
          <SelectValue
            placeholder={
              <span className="text-[rgba(8,14,30,0.35)]">{placeholder}</span>
            }
          />
          {/* custom chevron */}
          <ChevronDown
            size={18}
            className="text-[rgba(8,14,30,0.4)] shrink-0 transition-transform duration-200 select-trigger-chevron"
          />
        </SelectTrigger>

        <SelectContent className="rounded-2xl border border-[rgba(8,14,30,0.08)] shadow-lg bg-white p-0 overflow-hidden">
          {options.map((opt, index) => (
            <div key={opt.value}>
              <SelectItem
                value={opt.value}
                className={cn(
                  "px-5 py-3.5 cursor-pointer rounded-none",
                  "text-[15px] font-[Archivo] font-normal text-[#151513]",
                  "focus:bg-[#f5f6f8] focus:text-[#151513]",
                  "data-[state=checked]:text-[#0A206D] data-[state=checked]:font-medium",
                  // hide the default checkmark icon
                  "[&>span:first-child]:hidden"
                )}
              >
                {opt.label}
              </SelectItem>
              {/* divider between items, not after last */}
              {index < options.length - 1 && (
                <div className="h-px bg-[rgba(8,14,30,0.06)] mx-0" />
              )}
            </div>
          ))}
        </SelectContent>
      </Select>

      {error && (
        <p className="text-red-500 text-sm mt-1">{error.message}</p>
      )}
    </div>
  );
}