"use client";

import React from 'react';
import { X } from 'lucide-react';

interface UserData {
    id: string;
    name: string;
    email: string;
    role: string;
    industry: string;
    plan: string;
    joinDate: string;
    status: "Active" | "Suspended";
}
interface UserDetailsProps {
    onClose?: () => void;
    user: UserData;
}

export default function UserDetails({ user, onClose }: UserDetailsProps) {
    return (
        <div className="relative flex flex-col items-start gap-6 w-full">

            {/* Header Section */}
            <div className="flex w-full items-center justify-between">
                <h3 className="text-[#070707] font-family-[Archivo] text-2xl font-medium leading-8">
                    User Details
                </h3>
                {/* Close Button Component */}
                <button
                    onClick={onClose}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F4F6] text-[#070707] transition-colors hover:bg-gray-200"
                >
                    <X className="h-5 w-5" />
                </button>
            </div>

            {/* Main Structural Layout Content */}
            <div className="w-full bg-[#F9FAFB] px-6 py-6 flex flex-col gap-5 rounded">

                {/* Full-width Items */}


                {/* Split Grid Items Rows */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">

                    <DetailItem label="User Name" value="Jane Smith" />
                    <DetailItem label="User Email" value="iva838@outlook.com" />

                    <DetailItem label="Role" value="Product Manager" />
                    <DetailItem label="Industry" value="Marketing" />

                    <DetailItem label="Plan" value="Premium (Monthly)" />
                    <DetailItem label="Status" value="Active" />

                    <DetailItem label="Join Date" value="2/20/2024" />
                    <DetailItem label="Last Active" value="2 hours ago" />
                </div>

            </div>
        </div>
    );
}

// Inner Layout Item Stacker Component
interface DetailItemProps {
    label: string;
    value: string;
}

function DetailItem({ label, value }: DetailItemProps) {
    return (
        <div className="flex flex-col items-start justify-start gap-2">
            <p className="text-[#858585] font-family-[Archivo] text-sm font-normal leading-5 ">
                {label}
            </p>
            <p className="text-[#151513] font-family-[Archivo] text-base font-semibold leading-6 break-words w-full">
                {value}
            </p>
        </div>
    );
}