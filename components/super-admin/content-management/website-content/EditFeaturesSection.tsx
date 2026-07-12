"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

import CustomButton from "@/components/reusable/CustomButton";
import { FormField } from "@/components/reusable/FormInput";
import { FormTextarea } from "@/components/reusable/FormTextarea";
import { FormUploadZone } from "@/components/reusable/FormUploadZone";
import { FormBadgesInput } from "@/components/reusable/FormBadgesInput";

// Explicit validation schema modeling both descriptive modules and their associated uploads
const featuresSectionSchema = z.object({
  smallTag: z.string().min(1, "Small tag is required"),
  headline: z.string().min(1, "Headline is required"),
  description: z.string().min(1, "Description is required"),

  // 1st Feature Group Block Mapping
  firstFeatureHeadline: z.string().min(1, "First feature headline is required"),
  firstFeatureDescription: z.string().min(1, "First feature description is required"),
  firstFeatureBenefits: z.array(z.string()).min(1, "Add at least one benefit for the first feature"),
  firstFeatureImage: z.instanceof(File).nullable().optional(),

  // 2nd Feature Group Block Mapping
  secondFeatureHeadline: z.string().min(1, "Second feature headline is required"),
  secondFeatureDescription: z.string().min(1, "Second feature description is required"),
  secondFeatureBenefits: z.array(z.string()).min(1, "Add at least one benefit for the second feature"),
  secondFeatureImage: z.instanceof(File).nullable().optional(),
});

type FeaturesSectionFormValues = z.infer<typeof featuresSectionSchema>;

export default function EditFeaturesSection() {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeaturesSectionFormValues>({
    resolver: zodResolver(featuresSectionSchema),
    defaultValues: {
      smallTag: "Features",
      headline: "Spike delivers executive-level financial guidance",
      description: "We believe that financial intelligence should be accurate, understandable, and accessible to every business. Every business deserves access to CFO-level intelligence.",
      
      // Initializing 1st Feature Group Mockups
      firstFeatureHeadline: "Automate Financial Data Extraction",
      firstFeatureDescription: "Extract complex structures securely from multi-page spreadsheets instantly.",
      firstFeatureBenefits: [
        "Built for finance, not generic data", 
        "AI insight you can verify", 
        "Security-first by design", 
        "Set up in minutes, not months."
      ],
      firstFeatureImage: null,

      // Initializing 2nd Feature Group Mockups
      secondFeatureHeadline: "Predictive Analytics & Runway Modeling",
      secondFeatureDescription: "Forecast cash flows and automatically detect variance trends before closing cycles.",
      secondFeatureBenefits: [
        "Real-time scenario exploration",
        "Dynamic variance checking",
        "Automated runway alerts"
      ],
      secondFeatureImage: null,
    },
  });

  const onSubmit = async (data: FeaturesSectionFormValues) => {
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Features Section Layout Saved Successfully:", data);
      setSubmitSuccess(true);
      reset(data);
    } catch {
      setSubmitError("Failed to update features section. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
      
      {/* CARD BOUNDARY LAYER CONTAINER */}
      <section className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-5 shadow-[0_4px_12px_0_rgba(0,0,0,0.07)]">
        
        <h2 className="text-[#1A1A1A] font-[Archivo] text-lg font-semibold leading-6 -mb-1">
          Edit Features Section
        </h2>

        {/* ================= GLOBAL METADATA SECTION ================= */}
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
          placeholder="Enter section headline"
          error={errors.headline}
          {...register("headline")}
        />

        <FormTextarea
          variant="cms"
          label="Description"
          placeholder="Enter global feature segment summary..."
          error={errors.description}
          {...register("description")}
        />


        {/* ================= 1ST FEATURE CONTAINER MODULE ================= */}
        <div className="w-full border-t border-solid border-[#F4F4F5] pt-5 mt-2 flex flex-col gap-5">
          <h3 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider font-[Archivo] text-blue-600">
            1st Feature Configuration
          </h3>

          <FormField
            variant="cms"
            label="1st Features Headline"
            placeholder="Enter first feature headline"
            error={errors.firstFeatureHeadline}
            {...register("firstFeatureHeadline")}
          />

          <FormTextarea
            variant="cms"
            label="1st Features Description"
            placeholder="Enter first feature sub-description text..."
            error={errors.firstFeatureDescription}
            {...register("firstFeatureDescription")}
          />

          <Controller
            name="firstFeatureBenefits"
            control={control}
            render={({ field }) => (
              <FormBadgesInput
                label="Add Bullet benefits (1st Feature)"
                placeholder="Input benefits name"
                variant="cms"
                badges={field.value}
                onAddBadge={(newBadge) => {
                  if (!field.value.includes(newBadge)) {
                    field.onChange([...field.value, newBadge]);
                  }
                }}
                onRemoveBadge={(index) => {
                  field.onChange(field.value.filter((_, idx) => idx !== index));
                }}
              />
            )}
          />

          <Controller
            name="firstFeatureImage"
            control={control}
            render={({ field }) => (
              <FormUploadZone
                label="Add Image (1st Feature)"
                variant="cms"
                accept="image/*"
                onFileSelect={(files) => field.onChange(files?.[0] ?? null)}
                onClear={() => field.onChange(null)}
              />
            )}
          />
        </div>


        {/* ================= 2ND FEATURE CONTAINER MODULE ================= */}
        <div className="w-full border-t border-solid border-[#F4F4F5] pt-5 mt-2 flex flex-col gap-5">
          <h3 className="text-sm font-bold text-[#1A1A1A] uppercase tracking-wider font-[Archivo] text-blue-600">
            2nd Feature Configuration
          </h3>

          <FormField
            variant="cms"
            label="2nd Features Headline"
            placeholder="Enter second feature headline"
            error={errors.secondFeatureHeadline}
            {...register("secondFeatureHeadline")}
          />

          <FormTextarea
            variant="cms"
            label="2nd Features Description"
            placeholder="Enter second feature sub-description text..."
            error={errors.secondFeatureDescription}
            {...register("secondFeatureDescription")}
          />

          <Controller
            name="secondFeatureBenefits"
            control={control}
            render={({ field }) => (
              <FormBadgesInput
                label="Add Bullet benefits (2nd Feature)"
                placeholder="Input benefits name"
                variant="cms"
                badges={field.value}
                onAddBadge={(newBadge) => {
                  if (!field.value.includes(newBadge)) {
                    field.onChange([...field.value, newBadge]);
                  }
                }}
                onRemoveBadge={(index) => {
                  field.onChange(field.value.filter((_, idx) => idx !== index));
                }}
              />
            )}
          />

          <Controller
            name="secondFeatureImage"
            control={control}
            render={({ field }) => (
              <FormUploadZone
                label="Add Image (2nd Feature)"
                variant="cms"
                accept="image/*"
                onFileSelect={(files) => field.onChange(files?.[0] ?? null)}
                onClear={() => field.onChange(null)}
              />
            )}
          />
        </div>

      </section>

      {/* TRANSACTION SYSTEM NOTIFICATION LABELS */}
      {submitError && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-500 font-[Archivo]">
          {submitError}
        </p>
      )}

      {submitSuccess && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-600 font-[Archivo]">
          Features section layout components updated successfully.
        </p>
      )}

      {/* ACTIONS NAVIGATION INTERACTION TRIGGERS */}
      <div className="flex w-full justify-end">
        <CustomButton
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-fit md:min-w-[120px] bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
        >
          {isSubmitting ? "Updating..." : "Next"}
        </CustomButton>
      </div>
    </form>
  );
}