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
const periodOptions = ["Monthly", "Annual"];
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

          if (field.type === "Number Input") {
            const budgetPeriod = mappings[`${field.label} Period`] ?? "Monthly";

            return (
              <div key={field.label} className="space-y-2">
               
                {/* <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={currentValue}
                    onChange={(event) => handleChange(field.label, event.target.value)}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    className="h-12 w-full rounded-xl border border-[#E4E4E7] px-4 text-sm text-[#1D1F2C] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:flex-1"
                  />
                  <select
                    aria-label={`${field.label} period`}
                    value={budgetPeriod}
                    onChange={(event) =>
                      handleChange(`${field.label} Period`, event.target.value)
                    }
                    className="h-12 w-full rounded-xl border border-[#E4E4E7] bg-white px-4 text-sm text-[#1D1F2C] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:w-40"
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Annual">Annual</option>
                  </select>
                </div> */}

                <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
  <div className="flex-1">
     <label className="text-[#151513] font-[Archivo] text-[18px] font-normal leading-[26px] mb-2 block ">
                  {field.label} {field.isRequired ? "" : "(Optional)"}
                </label>
    <input
      type="number"
      min="0"
      step="0.01"
      value={currentValue}
      onChange={(event) =>
        handleChange(field.label, event.target.value)
      }
      placeholder={`Enter ${field.label.toLowerCase()}`}
      className="h-12 w-full rounded-xl border border-[#E4E4E7] px-4 text-sm text-[#1D1F2C] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    />
  </div>

  <div className="w-full sm:w-40">
    <label className="mb-2 text-[#151513] font-[Archivo] text-[18px] font-normal leading-[26px]  block">
      Budget period
    </label>

    <select
      aria-label={`${field.label} period`}
      value={budgetPeriod}
      onChange={(event) =>
        handleChange(
          `${field.label} Period`,
          event.target.value
        )
      }
      className="h-12 w-full rounded-xl border border-[#E4E4E7] bg-white px-4 text-sm text-[#1D1F2C] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    >
      {periodOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
</div>
              </div>
            );
          }

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

      <div className="flex flex-col gap-3 pt-6 sm:flex-row ">
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
