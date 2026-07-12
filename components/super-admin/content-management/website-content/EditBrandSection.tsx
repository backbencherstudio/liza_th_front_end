"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

import CustomButton from "@/components/reusable/CustomButton";
import { FormField } from "@/components/reusable/FormInput";
import { FormTextarea } from "@/components/reusable/FormTextarea";
import { FormUploadZone } from "@/components/reusable/FormUploadZone";

// Schema definitions built strictly against the specific image structure requirements
const brandSectionSchema = z.object({
  headline: z.string().min(1, "Headline is required"),
  description: z.string().min(1, "Description is required"),
  brandLogos: z
    .custom<FileList>()
    .refine((files) => files && files.length > 0, "Add at least one logo image")
    .nullable()
    .optional(),
});

type BrandSectionFormValues = z.infer<typeof brandSectionSchema>;

export default function EditBrandSection() {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BrandSectionFormValues>({
    resolver: zodResolver(brandSectionSchema),
    defaultValues: {
      headline: "Works with the tools you already use",
      description: "No integrations required. Simply export and upload.",
      brandLogos: null,
    },
  });

  const onSubmit = async (data: BrandSectionFormValues) => {
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      // Mocking submission delay cycle
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Brand section values updated:", data);
      setSubmitSuccess(true);
      reset(data);
    } catch {
      setSubmitError("Failed to update brand section. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
      
      
      {/* Container Card Frame holding the design input collection */}
      <section className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-5 shadow-[0_4px_12px_0_rgba(0,0,0,0.07)]">
        
        {/* Component Title Header block */}
        <h2 className="text-[#1A1A1A] font-[Archivo] text-lg font-semibold leading-6 -mb-1">
          Edit Brand Section
        </h2>

        {/* Input field for primary Heading value strings */}
        <FormField
          variant="cms"
          label="Headline"
          placeholder="Enter headline"
          error={errors.headline}
          {...register("headline")}
        />

        {/* Text Area field mapping descriptive details blocks */}
        <FormTextarea
          variant="cms"
          label="Description"
          placeholder="Enter description"
          error={errors.description}
          {...register("description")}
        />

        {/* Dedicated Multiple Image Assets Upload Zone */}
        <Controller
          name="brandLogos"
          control={control}
          render={({ field, fieldState }) => (
            <div className="flex flex-col w-full">
              <FormUploadZone
                label="Add Logo Images"
                variant="cms"
                accept="image/*"
                onFileSelect={(files) => field.onChange(files)}
                onClear={() => field.onChange(null)}
              />
              {fieldState.error && (
                <p className="mt-1 text-sm text-red-500 font-[Archivo]">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />
      </section>

      {/* Operational Response Message Alerts Layout Blocks */}
      {submitError && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-500 font-[Archivo]">
          {submitError}
        </p>
      )}

      {submitSuccess && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-600 font-[Archivo]">
          Brand section updated successfully.
        </p>
      )}

      {/* Global Bottom Actions Control Rows */}
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