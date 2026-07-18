"use client";

import React from "react";
import { FormSelect } from "@/components/reusable/FormSelect";
import CustomButton from "@/components/reusable/CustomButton";
import { DashboardType } from "@/types/dashboard";
import {
  getMappingFieldsForType,
  MAPPING_STEP_TITLE,
} from "@/components/super-admin/create-template/flow-builder/initialFlow";

const COLUMN_OPTIONS = [
  { label: "Raw_Data_Column_A", value: "Raw_Data_Column_A" },
  { label: "Raw_Data_Column_B", value: "Raw_Data_Column_B" },
];

interface Step2Props {
  dashboardType: DashboardType;
  mappings: Record<string, string>;
  setMappings: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Mapping({
  dashboardType,
  mappings,
  setMappings,
  onNext,
  onBack,
}: Step2Props) {
  const fields = getMappingFieldsForType(dashboardType);
  const title = MAPPING_STEP_TITLE[dashboardType];

  const handleChange = (label: string, value: string) => {
    setMappings((prev) => ({ ...prev, [label]: value }));
  };

  return (
    <div className="space-y-6">
      <h2 className="font-[Archivo] text-2xl font-semibold leading-tight text-[#1D1F2C] sm:text-[32px] sm:leading-[46px]">
        {title}
      </h2>

      <div className="space-y-5">
        {fields.map((field) => {
          const currentValue = mappings[field.label] ?? "";
          const options = currentValue
            ? [
                { label: currentValue, value: currentValue },
                ...COLUMN_OPTIONS.filter((o) => o.value !== currentValue),
              ]
            : COLUMN_OPTIONS;

          return (
            <FormSelect
              key={field.label}
              label={
                field.label +
                (field.isRequired ? "" : " (Optional)")
              }
              placeholder={`Select column for ${field.label}`}
              options={options}
              value={currentValue || undefined}
              onValueChange={(value) => handleChange(field.label, value)}
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
