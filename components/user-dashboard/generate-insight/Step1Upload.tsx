"use client";

import React from "react";
import { UploadCloud, Check, ArrowRight } from "lucide-react";

interface Step1Props {
    fileName: string | null;
    setFileName: (name: string | null) => void;
    dashboardType: string;
    setDashboardType: (type: string) => void;
    onNext: () => void;
}

const DASHBOARDS = [
    { id: "EXEC", title: "Executive Summary", desc: "Recommended reports to upload: Profit & Loss (Income Statement), Balance Sheet, General Ledger (optional for deeper insights)" },
    { id: "FIN", title: "Financial Performance", desc: "Recommended reports to include: Profit & Loss (Income Statement), Monthly Budget, Monthly Spend, Balance Sheet." },
    { id: "OPS", title: "Operational KPI", desc: "Recommended reports to include: Custom KPI Tracker, Custom Status Update, Monthly Trend." },
];

export default function Step1Upload({ fileName, setFileName, dashboardType, setDashboardType, onNext }: Step1Props) {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="self-stretch text-[color:var(--Gray-Black-500,#1D1F2C)] [font-family:var(--Family-font-family,Archivo)] text-[length:var(--Scale-Heading\_5,32px)] font-semibold leading-[var(--Line-Height-Heading\_5,46px)] mb-6">Upload Data Files</h2>
                <div
                    onClick={() => setFileName("financial_report_2026.csv")}
                    className="border-[color:var(--Blue-100,#BBCFF9)]  p-6 rounded-[10px] border-2 border-dashed  text-center cursor-pointer hover:bg-slate-50 transition-colors flex flex-col items-center justify-center "
                >
                    <div className="">
                        <UploadCloud className="text-[#2563EB] mb-4" size={44} />
                    </div>
                    <span className="text-[color:var(--Text-secondary,#3D3D3C)] [font-family:var(--Family-font-family,Archivo)] text-[length:var(--Scale-Subtittle\_3,20px)] font-medium leading-[var(--Line-Height-Subtittle\_3,26px)]">
                        {fileName ? fileName : "Click to upload files"}
                    </span>
                    <span className="text-[color:var(--Text-tertiary,#858585)] [font-family:var(--Family-font-family,Archivo)] text-[length:var(--Scale-body\_3,16px)] font-normal leading-[var(--Line-Height-body\_3,22px)] mt-2">Excel, CSV Files Only</span>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-[#111827] mb-4">Select Dashboard Type</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {DASHBOARDS.map((type) => (
                        <div
                            key={type.id}
                            onClick={() => setDashboardType(type.id)}
                            className={`p-5 rounded-[20px] border-2 border-solid cursor-pointer transition-all relative flex flex-col items-center text-center justify-start ${dashboardType === type.id ? "border-[#2563EB] bg-[#F8FAFC]" : "border-[#E4E4E7] hover:border-slate-300"
                                }`}
                        >
                            {dashboardType === type.id && (
                                <span className="absolute top-3 right-3 bg-[#2563EB] text-white p-0.5 rounded-full"><Check size={12} strokeWidth={3} /></span>
                            )}
                            <div className="w-12 h-12 bg-[#EEF2F6] rounded-xl flex items-center justify-center text-[#2563EB] mb-4 shrink-0" />
                            <h3 className="font-bold text-base text-[#111827] mb-2">{type.title}</h3>
                            <p className="text-xs text-[#71717A] leading-relaxed">{type.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button
                    disabled={!fileName}
                    onClick={onNext}
                    className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-50 text-white font-semibold rounded-xl text-sm flex items-center gap-2 transition-colors shadow-sm"
                >
                    Next <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
}