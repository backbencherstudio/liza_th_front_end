"use client"

import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export default function CustomButton({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const base =
    "relative flex h-14 items-center justify-center overflow-hidden rounded-xl px-8 text-lg font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap";

  return (
    <button
      {...props}
      className={clsx(
        base,
        fullWidth && "w-full",
        variant === "primary"
          ? "bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] text-white shadow-[0_4px_14px_rgba(10,32,109,0.25)] hover:opacity-95"
          : "border border-[#0A206D] bg-white hover:bg-[#f0f4ff]",
        className
      )}
    >
      {variant === "primary" ? (
        <>
          <span className="relative z-10">{children}</span>

          {/* White Inner Accent */}
          <div
            className="pointer-events-none absolute inset-[3px] rounded-[10px] border border-white/40"
            style={{
              maskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 30%, transparent 45%)",
              WebkitMaskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 30%, transparent 45%)",
            }}
          />
        </>
      ) : (
        <>
          <span className="relative z-10 bg-gradient-to-br from-[#0A206D] to-[#3B69D0] bg-clip-text text-transparent">
            {children}
          </span>

          {/* Blue Inner Accent */}
          <div
            className="pointer-events-none absolute inset-[3px] rounded-[10px] border border-[#0A206D]"
            style={{
              maskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 10%, transparent 45%)",
              WebkitMaskImage:
                "linear-gradient(to bottom right, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 10%, transparent 45%)",
            }}
          />
        </>
      )}
    </button>
  );
}