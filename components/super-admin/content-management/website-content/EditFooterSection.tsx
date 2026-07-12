"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

import CustomButton from "@/components/reusable/CustomButton";
import { FormBadgesInput } from "@/components/reusable/FormBadgesInput";
import { FormTextarea } from "@/components/reusable/FormTextarea";
import { FormUploadZone } from "@/components/reusable/FormUploadZone";

// React Hook Form validation rules mapping the structural dashboard inputs
const footerSectionSchema = z.object({
  description: z.string().min(1, "Description is required"),
  quickLinks: z.array(z.string()).min(1, "Add at least one quick link"),
  companyLinks: z.array(z.string()).min(1, "Add at least one company link"),
  contactLinks: z.array(z.string()).min(1, "Add at least one contact link"),
  footerLogo: z.instanceof(File).nullable().optional(),
  socialMediaIcon: z.instanceof(File).nullable().optional(),
});

type FooterSectionFormValues = z.infer<typeof footerSectionSchema>;

export default function EditFooterSection() {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FooterSectionFormValues>({
    resolver: zodResolver(footerSectionSchema),
    defaultValues: {
      description: "Turn raw data into actionable insights.\nAI-powered financial reporting for businesses that run on numbers.",
      quickLinks: ["Home", "About Us", "Features", "Pricing"],
      companyLinks: ["Terms of service", "Privacy policy"],
      contactLinks: ["Location", "Email"],
      footerLogo: null,
      socialMediaIcon: null,
    },
  });

  const onSubmit = async (data: FooterSectionFormValues) => {
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Footer Section Configuration Submitted Successfully:", data);
      setSubmitSuccess(true);
      reset(data);
    } catch {
      setSubmitError("Failed to update footer configuration. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
      
      {/* CARD BODY SKIN ARCHITECTURE CONTAINER */}
      <section className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-5 shadow-[0_4px_12px_0_rgba(0,0,0,0.07)]">
        
        <h2 className="text-[#1A1A1A] font-[Archivo] text-lg font-semibold leading-6 -mb-1">
          Edit Footer Section
        </h2>

        {/* 1. DESCRIPTION TEXT AREA MANIFEST */}
        <FormTextarea
          variant="cms"
          label="Description"
          placeholder="Enter description text..."
          error={errors.description}
          className="h-16" // Slightly enlarged for double sentence rendering tracking
          {...register("description")}
        />

        {/* 2. DYNAMIC LINKS MANAGEMENT LAYER GROUPS */}
        <Controller
          name="quickLinks"
          control={control}
          render={({ field }) => (
            <FormBadgesInput
              label="Add Quick Links"
              placeholder="Input quick links"
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
          name="companyLinks"
          control={control}
          render={({ field }) => (
            <FormBadgesInput
              label="Add Company Links"
              placeholder="Input quick links"
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
          name="contactLinks"
          control={control}
          render={({ field }) => (
            <FormBadgesInput
              label="Add Contact Us Links"
              placeholder="Input quick links"
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

        {/* 3. DUAL-DROPZONE UPLOAD ZONE CHANNELS */}
        <Controller
          name="footerLogo"
          control={control}
          render={({ field }) => (
            <FormUploadZone
              label="Add Logo"
              variant="cms"
              accept="image/*"
              onFileSelect={(files) => field.onChange(files?.[0] ?? null)}
              onClear={() => field.onChange(null)}
            />
          )}
        />

        <Controller
          name="socialMediaIcon"
          control={control}
          render={({ field }) => (
            <FormUploadZone
              label="Add Social Media Icon"
              variant="cms"
              accept="image/*"
              onFileSelect={(files) => field.onChange(files?.[0] ?? null)}
              onClear={() => field.onChange(null)}
            />
          )}
        />

      </section>

      {/* STATUS SYSTEM ALERTS MESSAGES */}
      {submitError && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-500 font-[Archivo]">
          {submitError}
        </p>
      )}

      {submitSuccess && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-600 font-[Archivo]">
          Footer section configuration saved successfully.
        </p>
      )}

      {/* CORE NAVIGATION TRIGGERS ROW */}
      <div className="flex w-full justify-end">
        <CustomButton
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-fit md:min-w-[120px] bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
        >
          {isSubmitting ? "Updating..." : "Update"}
        </CustomButton>
      </div>
    </form>
  );
}