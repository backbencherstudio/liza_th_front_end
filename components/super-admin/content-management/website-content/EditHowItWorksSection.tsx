"use client";

import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Plus } from "lucide-react";

import CustomButton from "@/components/reusable/CustomButton";
import { FormField } from "@/components/reusable/FormInput";
import { FormTextarea } from "@/components/reusable/FormTextarea";
import { FormUploadZone } from "@/components/reusable/FormUploadZone";

// Definitive schema structure matching the side-by-side Step dynamic architecture
const stepItemSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
  icon: z.custom<File>().nullable().optional(),
});

const howItWorksSectionSchema = z.object({
  smallTag: z.string().min(1, "Small tag is required"),
  headline: z.string().min(1, "Headline is required"),
  description: z.string().min(1, "Description is required"),
  steps: z.array(stepItemSchema).min(1, "Add at least one step"),
});

type HowItWorksSectionFormValues = z.infer<typeof howItWorksSectionSchema>;

export default function EditHowItWorksSection() {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<HowItWorksSectionFormValues>({
    resolver: zodResolver(howItWorksSectionSchema),
    defaultValues: {
      smallTag: "How It Works",
      headline: "Works with the tools you already use",
      description: "No integrations required. Simply export and upload.",
      steps: [
        {
          title: "1. Upload reports",
          subtitle: "Excel, CSV, and PDF",
          icon: null,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "steps",
  });

  const onSubmit = async (data: HowItWorksSectionFormValues) => {
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("How It Works section configuration saved:", data);
      setSubmitSuccess(true);
      reset(data);
    } catch {
      setSubmitError("Failed to update How It Works section. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
      {/* Primary Card Shell */}
      <section className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-5 shadow-[0_4px_12px_0_rgba(0,0,0,0.07)]">
        <h2 className="-mb-1 font-[Archivo] text-lg font-semibold leading-6 text-[#1A1A1A]">
          Edit How It Works Section
        </h2>

        {/* Global Section Layout Controls */}
        <FormField
          variant="cms"
          label="Small Tag"
          placeholder="Enter small tag"
          error={errors.smallTag}
          {...register("smallTag")}
        />

        <FormField
          variant="cms"
          label="Headline"
          placeholder="Enter headline"
          error={errors.headline}
          {...register("headline")}
        />

        <FormTextarea
          variant="cms"
          label="Description"
          placeholder="Enter description"
          error={errors.description}
          {...register("description")}
        />

        {/* Dynamic Multi-Step Generation Engine */}
        <div className="flex flex-col gap-4 border-t border-solid border-[#F4F4F5] pt-4 mt-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-[Archivo] text-sm font-semibold text-[#1A1A1A]">
              Add Steps
            </h3>
            <button
              type="button"
              onClick={() => append({ title: "", subtitle: "", icon: null })}
              className="inline-flex items-center gap-1 font-[Archivo] text-sm font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
            >
              <Plus size={16} /> More Steps
            </button>
          </div>

          {errors.steps?.root && (
            <p className="text-sm text-red-500 font-[Archivo]">{errors.steps.root.message}</p>
          )}

          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-col gap-4 rounded-xl border border-[#E9E9EA] bg-[#FAFBFC] p-4 relative"
            >
              {/* Dynamic Header Badge Context */}
              <div className="flex items-center justify-between">
                <span className="font-[Archivo] text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Step Module {index + 1}
                </span>
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="font-[Archivo] text-sm text-red-500 hover:text-red-600 transition-colors"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Exact Mockup Side-by-Side Flex Layout Engine */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                
                {/* Structural Input Stack Columns */}
                <div className="flex flex-1 flex-col gap-4 w-full">
                  <FormField
                    variant="cms"
                    label="Title"
                    placeholder="e.g. 1. Upload reports"
                    error={errors.steps?.[index]?.title}
                    {...register(`steps.${index}.title`)}
                  />

                  <FormField
                    variant="cms"
                    label="Subtitle"
                    placeholder="e.g. Excel, CSV, and PDF"
                    error={errors.steps?.[index]?.subtitle}
                    {...register(`steps.${index}.subtitle`)}
                  />
                </div>

                {/* Right Align Icon Dropzone */}
                <div className="w-full shrink-0 lg:w-[260px]">
                  <Controller
                    name={`steps.${index}.icon`}
                    control={control}
                    render={({ field: iconField }) => (
                      <div className="flex flex-col w-full">
                        <FormUploadZone
                          label="Add Icon"
                          variant="cms"
                          accept="image/*"
                          onFileSelect={(files) =>
                            iconField.onChange(files?.[0] ?? null)
                          }
                          onClear={() => iconField.onChange(null)}
                        />
                        {errors.steps?.[index]?.icon && (
                          <p className="mt-1 text-sm text-red-500 font-[Archivo]">
                            {errors.steps[index]?.icon?.message}
                          </p>
                        )}
                      </div>
                    )}
                  />
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action Notification Rows */}
      {submitError && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-500 font-[Archivo]">
          {submitError}
        </p>
      )}

      {submitSuccess && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-600 font-[Archivo]">
          How It Works section updated successfully.
        </p>
      )}

      {/* CTA Footer Row Actions */}
      <div className="flex w-full justify-end">
        <CustomButton
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-fit md:min-w-[120px]"
        >
          {isSubmitting ? "Updating..." : "Update"}
        </CustomButton>
      </div>
    </form>
  );
}