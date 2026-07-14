"use client";

import React from "react";
import { FormSelect } from "@/components/reusable/FormSelect";
import CustomButton from "@/components/reusable/CustomButton";

interface Step2Props {
  mappings: Record<string, string>;
  setMappings: React.Dispatch<
    React.SetStateAction<{
      period: string;
      location: string;
      expenses: string;
      revenue: string;
    }>
  >;
  onNext: () => void;
  onBack: () => void;
}

const COLUMN_OPTIONS = [
  { label: "Raw_Data_Column_A", value: "Raw_Data_Column_A" },
  { label: "Raw_Data_Column_B", value: "Raw_Data_Column_B" },
];

const FIELD_LABELS: Record<string, string> = {
  period: "Period",
  location: "Location",
  expenses: "Expenses",
  revenue: "Revenue",
};

export default function Step2Mapping({
  mappings,
  setMappings,
  onNext,
  onBack,
}: Step2Props) {
  const handleSelectChange = (key: string, value: string) => {
    setMappings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <h2 className="font-[Archivo] text-2xl font-semibold leading-tight text-[#1D1F2C] sm:text-[32px] sm:leading-[46px]">
        Map Headers for Executive Summary
      </h2>

      <div className="space-y-5">
        {Object.keys(mappings).map((key) => {
          const options = mappings[key]
            ? [
                { label: mappings[key], value: mappings[key] },
                ...COLUMN_OPTIONS.filter((o) => o.value !== mappings[key]),
              ]
            : COLUMN_OPTIONS;

          return (
            <FormSelect
              key={key}
              label={FIELD_LABELS[key] ?? key.charAt(0).toUpperCase() + key.slice(1)}
              placeholder={`Select ${key} column`}
              options={options}
              value={mappings[key] || undefined}
              onValueChange={(value) => handleSelectChange(key, value)}
            />
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
          className="w-full rounded-xl bg-[#2563EB] px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-[#1D4ED8] sm:w-auto"
        >
          Next
        </CustomButton>
      </div>
    </div>
  );
}
