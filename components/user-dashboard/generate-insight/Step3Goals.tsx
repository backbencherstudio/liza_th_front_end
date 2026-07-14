"use client";

import React from "react";
import { Check } from "lucide-react";
import BussinessGoalsIcons from "@/components/icons/BussinessGoalsIcons";
import DashboardTypeIcon from "@/components/icons/DashboardTypeIcon";
import CustomButton from "@/components/reusable/CustomButton";

interface Step3Props {
  selectedGoals: string[];
  setSelectedGoals: React.Dispatch<React.SetStateAction<string[]>>;
  onNext: () => void;
  onBack: () => void;
}

const GOALS = [
  {
    id: "CASH",
    title: "Improve cash flow",
    icon: BussinessGoalsIcons.ImproveCashFlow,
  },
  {
    id: "PROFIT",
    title: "Increase profitability",
    icon: BussinessGoalsIcons.IncreaseProfitability,
  },
  {
    id: "EXPENSES",
    title: "Reduce expenses",
    icon: BussinessGoalsIcons.ReduceExpenses,
  },
  {
    id: "REVENUE",
    title: "Grow revenue",
    icon: BussinessGoalsIcons.GrowRevenue,
  },
  {
    id: "AR",
    title: "Improve collections (AR)",
    icon: BussinessGoalsIcons.ImproveCollections,
  },
  {
    id: "AP",
    title: "Manage payables (AP)",
    icon: BussinessGoalsIcons.ManagePayables,
  },
  {
    id: "BUDGET",
    title: "Stay on budget",
    icon: BussinessGoalsIcons.StayOnBudget,
  },
  {
    id: "FORECAST",
    title: "Improve forecasting",
    icon: BussinessGoalsIcons.ImproveForecasting,
  },
  {
    id: "FUNDING",
    title: "Prepare for funding/investors",
    icon: BussinessGoalsIcons.PrepareInvestors,
  },
  {
    id: "ACQUISITION",
    title: "Prepare for acquisition",
    icon: BussinessGoalsIcons.PrepareAcquistion,
  },
  {
    id: "BENCHMARK",
    title: "Benchmark against peers",
    icon: BussinessGoalsIcons.BenchmarkAgainst,
  },
  {
    id: "OPERATIONAL",
    title: "Improve operational efficiency",
    icon: BussinessGoalsIcons.ImproveOperational,
  },
];

export default function Step3Goals({
  selectedGoals,
  setSelectedGoals,
  onNext,
  onBack,
}: Step3Props) {
  const toggleGoal = (id: string) => {
    if (selectedGoals.includes(id)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== id));
    } else if (selectedGoals.length < 3) {
      setSelectedGoals([...selectedGoals, id]);
    }
  };

  return (
    <div className="w-full space-y-6">
      <div>
        <h2 className="font-[Archivo] text-2xl font-semibold leading-tight text-[#3D3D3C] sm:text-[28px] sm:leading-[40px]">
          Your Business Goals{" "}
          <span className="text-[#71717A]">(Select up to 3 options)</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {GOALS.map((goal) => {
          const isSelected = selectedGoals.includes(goal.id);
          const IconComponent = goal.icon;

          return (
            <button
              key={goal.id}
              type="button"
              onClick={() => toggleGoal(goal.id)}
              className={`group relative flex min-h-[120px] w-full flex-col items-center justify-center gap-3 rounded-[10px] border-2 border-solid p-6 text-center transition-all hover:border-[#A3B8FF] ${
                isSelected
                  ? "border-[#2563EB] bg-[#EFF6FF] shadow-sm"
                  : "border-[#E9E9EA] bg-white hover:bg-[#F8FAFC]"
              }`}
            >
              {/* Checkmark indicator */}
              <div
                className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-solid transition-all ${
                  isSelected
                    ? "border-[#2563EB] bg-[#2563EB]"
                    : "border-[#CBD5E1] bg-white"
                }`}
              >
                {isSelected && (
                //  
                <DashboardTypeIcon.TickIcon/>
                )}
              </div>

              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                <IconComponent />
              </div>

              {/* Title */}
              <span
                className={`font-[Archivo] text-base font-medium leading-snug transition-colors ${
                  isSelected ? "text-[#1D1F2C]" : "text-[#1D1F2C]"
                }`}
              >
                {goal.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="w-full rounded-xl border border-solid border-[#E4E4E7] px-6 py-3 font-semibold text-[#4B5563] transition-colors hover:bg-slate-50 sm:w-auto"
        >
          Back
        </button>
        <CustomButton
          type="button"
          onClick={onNext}
          disabled={selectedGoals.length === 0}
          className="w-full rounded-xl bg-[#2563EB] px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          Generate Insights
        </CustomButton>
      </div>
    </div>
  );
}
