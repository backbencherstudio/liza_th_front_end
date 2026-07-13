"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

interface Step2Props {
  mappings: Record<string, string>;
  setMappings: React.Dispatch<React.SetStateAction<{ period: string; location: string; expenses: string; revenue: string; }>>;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Mapping({ mappings, setMappings, onNext, onBack }: Step2Props) {
  const handleSelectChange = (key: string, value: string) => {
    setMappings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#111827] mb-2">Map Headers for Executive Summary</h2>
      
      {Object.keys(mappings).map((key) => (
        <div key={key} className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold capitalize text-[#4B5563]">{key}</label>
          <div className="relative w-full">
            <select 
              value={mappings[key]}
              onChange={(e) => handleSelectChange(key, e.target.value)}
              className="w-full bg-white appearance-none border border-solid border-[#E4E4E7] rounded-xl px-4 py-3.5 text-sm font-medium text-[#111827] focus:outline-none focus:border-[#2563EB] cursor-pointer"
            >
              <option value={mappings[key]}>{mappings[key]}</option>
              <option value="Raw_Data_Column_A">Raw_Data_Column_A</option>
              <option value="Raw_Data_Column_B">Raw_Data_Column_B</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#71717A] pointer-events-none" size={16} />
          </div>
        </div>
      ))}

      <div className="flex justify-between pt-6">
        <button onClick={onBack} className="px-6 py-3 border border-solid border-[#E4E4E7] text-[#4B5563] font-semibold rounded-xl text-sm hover:bg-slate-50 transition-colors">Back</button>
        <button onClick={onNext} className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-xl text-sm transition-colors shadow-sm">Next</button>
      </div>
    </div>
  );
}