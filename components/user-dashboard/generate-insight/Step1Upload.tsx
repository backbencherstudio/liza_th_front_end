"use client";

import React, { useRef, useState } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import DashboardTypeIcon from "@/components/icons/DashboardTypeIcon";
import CustomButton from "@/components/reusable/CustomButton";

interface Step1Props {
    fileNames: string[];
    setFileNames: React.Dispatch<React.SetStateAction<string[]>>;
    dashboardType: string;
    setDashboardType: (type: string) => void;
    onNext: () => void;
}

interface DashboardType {
    id: string;
    title: string;
    desc: string;
    icon: React.ElementType;
}

const ACCEPTED = ".xlsx,.xls,.csv";
const ACCEPTED_MIME = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
    "text/csv",
];

const DASHBOARDS: DashboardType[] = [
    {
        id: "EXEC",
        title: "Executive Summary",
        desc: "Recommended reports: Profit & Loss, Balance Sheet, General Ledger (optional).",
        icon: DashboardTypeIcon.ExecutiveSummary,
    },
    {
        id: "FIN",
        title: "Financial Performance",
        desc: "Recommended reports: Profit & Loss, Monthly Budget, Monthly Spend, Balance Sheet.",
        icon: DashboardTypeIcon.FinancialPerformance,
    },
    {
        id: "OPS",
        title: "Operational KPI",
        desc: "Recommended reports: Custom KPI Tracker, Status Update, Monthly Trend.",
        icon: DashboardTypeIcon.OperationalKPI,
    },
];

export default function Step1Upload({
    fileNames,
    setFileNames,
    dashboardType,
    setDashboardType,
    onNext,
}: Step1Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const validateAndAdd = (files: File[]) => {
        const validNames = files
            .filter(
                (file) =>
                    ACCEPTED_MIME.includes(file.type) ||
                    /\.(xlsx|xls|csv)$/i.test(file.name)
            )
            .map((file) => file.name);
        const invalidCount = files.length - validNames.length;

        if (validNames.length > 0) {
            setFileNames((current) => [
                ...current,
                ...validNames.filter((name) => !current.includes(name)),
            ]);
        }

        setError(
            invalidCount > 0
                ? `${invalidCount} file${invalidCount > 1 ? "s were" : " was"} skipped. Only Excel (.xlsx, .xls) or CSV files are accepted.`
                : null
        );
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? []);
        if (files.length > 0) validateAndAdd(files);
        // Reset so the same files can be selected again after removal.
        e.target.value = "";
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files ?? []);
        if (files.length > 0) validateAndAdd(files);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => setIsDragging(false);

    const removeFile = (e: React.MouseEvent, fileName: string) => {
        e.stopPropagation();
        setFileNames((current) => current.filter((name) => name !== fileName));
        setError(null);
    };

    return (
        <div className="space-y-8">
            {/* Upload */}
            <section>
                <h2 className="mb-6 text-[32px] font-semibold leading-[46px] text-gray-900">
                    Upload Data Files
                </h2>

                {/* Hidden native input */}
                <input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept={ACCEPTED}
                    className="hidden"
                    onChange={handleFileChange}
                />

                <div
                    onClick={() => inputRef.current?.click()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-8 text-center transition-colors ${isDragging
                        ? "border-blue-500 bg-blue-50"
                        : fileNames.length > 0
                            ? "cursor-default border-blue-400 bg-blue-50/40"
                            : "border-blue-200 hover:bg-slate-50"
                        }`}
                >
                    {fileNames.length > 0 ? (
                        /* Uploaded state */
                        <div className="flex w-full flex-col items-center gap-3">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
                                <FileText size={28} className="text-blue-600" />
                            </div>
                            <p className="text-lg font-semibold text-gray-800">
                                {fileNames.length} file{fileNames.length > 1 ? "s" : ""} ready to process
                            </p>
                            <div className="grid w-full max-w-2xl gap-2">
                                {fileNames.map((fileName) => (
                                    <div
                                        key={fileName}
                                        className="flex items-center justify-between gap-3 rounded-lg border border-blue-100 bg-white px-4 py-3 text-left"
                                    >
                                        <span className="min-w-0 truncate text-sm font-medium text-gray-700">
                                            {fileName}
                                        </span>
                                        <button
                                            type="button"
                                            aria-label={`Remove ${fileName}`}
                                            onClick={(event) => removeFile(event, fileName)}
                                            className="shrink-0 rounded-md p-1 text-red-500 transition hover:bg-red-50"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button
                                type="button"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    inputRef.current?.click();
                                }}
                                className="mt-1 rounded-lg border border-blue-300 px-4 py-1.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
                            >
                                Add more files
                            </button>
                        </div>
                    ) : (
                        /* Empty state */
                        <>
                            <UploadCloud
                                size={44}
                                className={`mb-4 transition-colors ${isDragging ? "text-blue-500" : "text-blue-600"}`}
                            />
                            <p className="text-xl font-medium text-gray-700">
                                {isDragging ? "Drop files here" : "Click to upload or drag & drop"}
                            </p>
                            <p className="mt-2 text-base text-gray-500">
                                Excel, CSV Files Only
                            </p>
                        </>
                    )}
                </div>

                {error && (
                    <p className="mt-2 text-sm text-red-500">{error}</p>
                )}
            </section>

            {/* Dashboard Types */}
            <section>
                <h2 className="mb-6 text-[32px] font-semibold leading-[46px] text-gray-900">
                    Select Dashboard Type
                </h2>

                <div className="grid gap-5 md:grid-cols-3">
                    {DASHBOARDS.map((dashboard) => (
                        <DashboardCard
                            key={dashboard.id}
                            {...dashboard}
                            active={dashboardType === dashboard.id}
                            onClick={() => setDashboardType(dashboard.id)}
                        />
                    ))}
                </div>
            </section>

            {/* Next Button */}
            <div className="flex justify-end">
                <CustomButton
                    type="button"
                    disabled={fileNames.length === 0}
                    onClick={onNext}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    Next
                </CustomButton>
            </div>
        </div>
    );
}

interface DashboardCardProps extends DashboardType {
    active: boolean;
    onClick: () => void;
}

function DashboardCard({
    title,
    desc,
    icon: Icon,
    active,
    onClick,
}: DashboardCardProps) {
    return (
        <div
            onClick={onClick}
            className={`relative cursor-pointer rounded-xl border-2 bg-slate-50 p-6 text-center transition-all ${active ? "border-blue-600" : "border-gray-200 hover:border-gray-300"
                }`}
        >
            {active && (
                <div className="absolute right-3 top-3">
                    <DashboardTypeIcon.TickIcon />
                </div>
            )}

            <div className="mb-5 flex justify-center">
                <Icon />
            </div>

            <h3 className="mb-3 text-xl font-medium text-gray-900">{title}</h3>

            <p className="text-base leading-7 text-gray-600">{desc}</p>
        </div>
    );
}
