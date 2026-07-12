"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

import CustomButton from "@/components/reusable/CustomButton";
import { FormBadgesInput } from "@/components/reusable/FormBadgesInput";
import { FormField } from "@/components/reusable/FormInput";
import { FormTextarea } from "@/components/reusable/FormTextarea";
import { FormUploadZone } from "@/components/reusable/FormUploadZone";

const heroSectionSchema = z.object({
  smallTag: z.string().min(1, "Small tag is required"),
  headline: z.string().min(1, "Headline is required"),
  description: z.string().min(1, "Description is required"),
  quickLinks: z.array(z.string()).min(1, "Add at least one quick link"),
  buttonText: z.string().min(1, "Button text is required"),
  buttonLink: z.string().min(1, "Button link is required"),
  heroImage: z.instanceof(File).nullable().optional(),
});

type HeroSectionFormValues = z.infer<typeof heroSectionSchema>;

export default function EditHeroSection() {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<HeroSectionFormValues>({
    resolver: zodResolver(heroSectionSchema),
    defaultValues: {
      smallTag: "",
      headline: "",
      description: "",
      quickLinks: ["Home", "About Us", "Features"],
      buttonText: "",
      buttonLink: "",
      heroImage: null,
    },
  });

  const onSubmit = async (data: HeroSectionFormValues) => {
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Hero section updated:", data);
      setSubmitSuccess(true);
      reset(data);
    } catch {
      setSubmitError("Failed to update hero section. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
      <section className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-5 shadow-[0_4px_12px_0_rgba(0,0,0,0.07)]">


        <h2 className="text-[#1A1A1A] font-[Archivo] text-lg font-semibold leading-6 -mb-1">
          Edit Hero Section
        </h2>


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

        <Controller
          name="quickLinks"
          control={control}
          render={({ field, fieldState }) => (
            <div>
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
              {fieldState.error && (
                <p className="mt-1 text-sm text-red-500">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        <div className="flex flex-col gap-4 md:flex-row">
          <FormField
            variant="cms"
            label="Button Text"
            placeholder="Enter button text"
            error={errors.buttonText}
            {...register("buttonText")}
          />

          <FormField
            variant="cms"
            label="Button Link"
            placeholder="Enter button link"
            error={errors.buttonLink}
            {...register("buttonLink")}
          />
        </div>

        <Controller
          name="heroImage"
          control={control}
          render={({ field }) => (
            <FormUploadZone
              label="Add Images"
              variant="cms"
              accept="image/*"
              onFileSelect={(files) => field.onChange(files?.[0] ?? null)}
              onClear={() => field.onChange(null)}
            />
          )}
        />
      </section>

      {submitError && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-500">
          {submitError}
        </p>
      )}

      {submitSuccess && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-600">
          Hero section updated successfully.
        </p>
      )}

      <CustomButton
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-fit md:min-w-[200px]"
      >
        {isSubmitting ? "Updating..." : "Update"}
      </CustomButton>
    </form>
  );
}
