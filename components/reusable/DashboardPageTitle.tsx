import React from "react";

interface DashboardPageTitleProps {
    title: string;
    description?: string;
    className?: string;
}

export default function DashboardPageTitle({
    title,
    description,
    className = "",
}: DashboardPageTitleProps) {
    return (
        <div className={className}>
            <h2 className="font-archivo text-[32px] font-semibold leading-[46px] text-[#151513]">
                {title}
            </h2>

            {description && (
                <p className="mt-3 max-w-[448px] font-archivo text-base leading-[22px] text-[#3D3D3C]">
                    {description}
                </p>
            )}
        </div>
    );
}