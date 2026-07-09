"use client";

import { useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";

type ModalSize = "xsm" | "sm" | "md" | "lg";

interface CustomModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  size?: ModalSize;
  showCloseButton?: boolean;
  closeButtonType?: "shadcn" | "simple";
  children: React.ReactNode;
}

const SIZE_MAP: Record<ModalSize, string> = {
  xsm: "max-w-sm",
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

export default function CustomModal({
  open,
  onOpenChange,
  title,
  size = "md",
  showCloseButton = true,
  children,
}: CustomModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    },
    [onOpenChange],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-150 flex items-center justify-center bg-black/50"
      onClick={(e) => {
        if (e.target === overlayRef.current) onOpenChange(false);
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={`relative w-full ${SIZE_MAP[size]} mx-4 rounded-lg bg-white p-6 shadow-xl`}
      >
        {showCloseButton && (
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 rounded-sm p-1 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
        {title && (
          <h2 className="mb-4 text-lg font-semibold text-gray-900">{title}</h2>
        )}
        {children}
      </div>
    </div>
  );
}
