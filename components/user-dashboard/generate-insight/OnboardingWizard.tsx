"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Step1Upload from "./Step1Upload";
import Step2Mapping from "./Step2Mapping";
import Step3Goals from "./Step3Goals";
import GeneratingScreen from "./GeneratingScreen";
import { saveDashboard, DASHBOARD_LABELS, DASHBOARD_THUMBNAILS } from "@/lib/dashboardStorage";
import { DashboardType } from "@/types/dashboard";

export type Step = 1 | 2 | 3 | "PROCESSING";

export default function OnboardingWizard() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [fileName, setFileName] = useState<string | null>(null);
  const [dashboardType, setDashboardType] = useState<DashboardType>("EXEC");
  const [mappings, setMappings] = useState({ period: "Date", location: "Department", expenses: "Expenses", revenue: "Revenue" });
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const currentStepNum = step === "PROCESSING" ? 3 : step;
  const progressPercentage = Math.round((currentStepNum / 3) * 100);

  const handleGenerationComplete = () => {
    const id = crypto.randomUUID();
    const now = new Date();

    saveDashboard({
      id,
      title: `${DASHBOARD_LABELS[dashboardType]} – ${now.toLocaleDateString("en-GB")}`,
      type: dashboardType,
      fileName: fileName ?? "",
      mappings,
      goals: selectedGoals,
      createdAt: now.toISOString(),
      thumbnailUrl: DASHBOARD_THUMBNAILS[dashboardType],
    });

    router.push(`/user-dashboard/dashboard/${id}`);
  };

  return (
    <div className="w-full mx-auto font-[Archivo]">

      {/* STEP PROGRESS HEADER */}
      {step !== "PROCESSING" && (
        <div className="w-full mb-8 select-none">
          <div className="flex justify-between items-center text-lg font-medium text-[#151513] mb-3">
            <span>Step {currentStepNum} of 3</span>
            <span className="text-[color:var(--Gray-Black-300,#777980)] [font-family:var(--Family-font-family,Archivo)] text-[length:var(--Scale-body\_2,18px)] font-normal leading-[var(--Line-Height-body\_2,26px)]">{progressPercentage}% Complete</span>
          </div>
          <div className="w-full grid grid-cols-3 gap-1 h-3">
            <div className={`rounded-full h-full transition-all duration-300 ${currentStepNum >= 1 ? "bg-[#2563EB]" : "bg-[#EEF2F6]"}`} />
            <div className={`rounded-full h-full transition-all duration-300 ${currentStepNum >= 2 ? "bg-[#2563EB]" : "bg-[#EEF2F6]"}`} />
            <div className={`rounded-full h-full transition-all duration-300 ${currentStepNum >= 3 ? "bg-[#2563EB]" : "bg-[#EEF2F6]"}`} />
          </div>
        </div>
      )}

      {/* STEP INTERFACE SWITCH MATRIX */}
      <div>
        {step === 1 && (
          <Step1Upload
            fileName={fileName}
            setFileName={setFileName}
            dashboardType={dashboardType}
            setDashboardType={(type: string) => setDashboardType(type as DashboardType)}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <Step2Mapping
            mappings={mappings}
            setMappings={setMappings}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}

        {step === 3 && (
          <Step3Goals
            selectedGoals={selectedGoals}
            setSelectedGoals={setSelectedGoals}
            onNext={() => setStep("PROCESSING")}
            onBack={() => setStep(2)}
          />
        )}

        {step === "PROCESSING" && (
          <GeneratingScreen onComplete={handleGenerationComplete} />
        )}
      </div>
    </div>
  );
}
