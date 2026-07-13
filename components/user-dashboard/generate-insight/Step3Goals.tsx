"use client";

import React from "react";
import { Check } from "lucide-react";

interface Step3Props {
  selectedGoals: string[];
  setSelectedGoals: React.Dispatch<React.SetStateAction<string[]>>;
  onNext: () => void;
  onBack: () => void;
}

const GOALS = [
  { id: "CASH", title: "Improve cash flow" },
  { id: "PROFIT", title: "Increase profitability" },
  { id: "EXPENSES", title: "Reduce expenses" },
  { id: "REVENUE", title: "Grow revenue" },
  { id: "AR", title: "Improve collections (AR)" },
  { id: "AP", title: "Manage payables (AP)" },
  { id: "BUDGET", title: "Stay on budget" },
  { id: "FORECAST", title: "Improve forecasting" },
];

export default function Step3Goals({ selectedGoals, setSelectedGoals, onNext, onBack }: Step3Props) {
  const toggleGoal = (id: string) => {
    if (selectedGoals.includes(id)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== id));
    } else if (selectedGoals.length < 3) {
      setSelectedGoals([...selectedGoals, id]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-[#111827]">Your Business Goals <span className="text-lg font-normal text-[#71717A] ml-1">(Select up to 3 options)</span></h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {GOALS.map((goal) => {
          const isSelected = selectedGoals.includes(goal.id);
          return (
            <div
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className={`p-5 rounded-[20px] border-2 border-solid cursor-pointer transition-all flex items-center justify-between ${
                isSelected ? "border-[#2563EB] bg-[#F8FAFC]" : "border-[#E4E4E7] hover:border-slate-300"
              }`}
            >
              <span className="font-semibold text-base text-[#111827]">{goal.title}</span>
              <div className={`w-5 h-5 rounded-full border border-solid flex items-center justify-center transition-colors shrink-0 ${isSelected ? "bg-[#2563EB] border-[#2563EB]" : "border-[#CBD5E1]"}`}>
                {isSelected && <Check size={12} className="text-white" strokeWidth={3} />}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-between pt-6">
        <button onClick={onBack} className="px-6 py-3 border border-solid border-[#E4E4E7] text-[#4B5563] font-semibold rounded-xl text-sm hover:bg-slate-50 transition-colors">Back</button>
        <button 
          onClick={onNext} 
          disabled={selectedGoals.length === 0}
          className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-50 text-white font-semibold rounded-xl text-sm transition-colors shadow-sm"
        >
          Generate Insights
        </button>
      </div>
    </div>
  );
}