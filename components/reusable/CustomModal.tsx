"use client";
import * as React from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { XIcon } from "lucide-react";
import clsx from "clsx";

type CloseButtonConfig =
    | { closeButtonType?: "shadcn"; closeButtonProps?: React.ComponentProps<typeof DialogClose> }
    | { closeButtonType: "custom"; closeButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement> };

type CustomModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
    title?: string;
    size?: "sm" | "md" | "lg" | "mmd" | "xsm";
    className?: string;
    showCloseButton?: boolean;
} & CloseButtonConfig;





export default function CustomModal(props: CustomModalProps) {
    const {
        open,
        onOpenChange,
        children,
        title,
        size = "sm",
        className,
        showCloseButton = true,
    } = props;

    const closeButtonType = props.closeButtonType ?? "shadcn";

    const sizeClasses = {
        sm: "sm:max-w-[580px]",
        md: "sm:max-w-[620px]",
        mmd: "sm:max-w-[634px]",
        lg: "sm:max-w-[1000px]",
        xsm: "sm:max-w-[500px]"
    };

    const shadcnCloseProps =
        closeButtonType === "shadcn" ? props.closeButtonProps : undefined;
    const { className: shadcnCloseClassName, ...shadcnCloseRest } =
        shadcnCloseProps ?? {};

    const customCloseProps =
        props.closeButtonType === "custom" ? props.closeButtonProps : undefined;
    const { className: customCloseClassName, ...customCloseRest } =
        customCloseProps ?? {};

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                showCloseButton={false}
                className={clsx(
                    "[background:var(--BG-Color,#FEFEFE)]  rounded-2xl",
                    sizeClasses[size],
                    className
                )}
            >
                {/* Header Section */}
                {title && (
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-medium tracking-[-0.36px]">{title}</h3>
                    </div>
                )}

                {/* Close Button - Placed Top Right */}
                {showCloseButton && (
                    closeButtonType === "shadcn" ? (
                        <DialogClose
                            className={clsx(
                                "absolute top-2 right-2 p-1 border-gray/10 hover:bg-white/10 transition-colors",
                                shadcnCloseClassName
                            )}
                            {...shadcnCloseRest}
                        >
                            <XIcon size={20} />
                        </DialogClose>
                    ) : (
                        <button
                            type="button"
                            className={clsx(
                                "absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors",
                                customCloseClassName
                            )}
                            {...customCloseRest}
                        >
                            <XIcon size={20} />
                        </button>
                    )
                )}
                {/* Content Area */}
                <div className="w-full">
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    );
}