"use client";

import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

import CustomButton from "@/components/reusable/CustomButton";
import { FormBadgesInput } from "@/components/reusable/FormBadgesInput";
import { FormField } from "@/components/reusable/FormInput";
import { FormTextarea } from "@/components/reusable/FormTextarea";
import { FormUploadZone } from "@/components/reusable/FormUploadZone";

const featureItemSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
  icon: z.instanceof(File).nullable().optional(),
});

const aboutUsSectionSchema = z.object({
  smallTag: z.string().min(1, "Small tag is required"),
  headline: z.string().min(1, "Headline is required"),
  description: z.string().min(1, "Description is required"),
  bulletBenefits: z.array(z.string()).min(1, "Add at least one benefit"),
  features: z.array(featureItemSchema).min(1, "Add at least one feature"),
});

type AboutUsSectionFormValues = z.infer<typeof aboutUsSectionSchema>;

export default function AboutUsSection() {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AboutUsSectionFormValues>({
    resolver: zodResolver(aboutUsSectionSchema),
    defaultValues: {
      smallTag: "About Us",
      headline: "Spike delivers executive-level financial guidance",
      description:
        "Spike combines cutting edge AI reasoning with structured financial analysis to help teams move from raw data to clear, decision-ready insights.",
      bulletBenefits: [
        "Built for finance, not generic data",
        "AI insight you can verify",
        "Works with your existing files",
        "Designed to support professional financial judgment",
      ],
      features: [
        {
          title: "Save Time",
          subtitle: "Reduce manual reporting effort by up to 80%",
          icon: null,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "features",
  });

  const onSubmit = async (data: AboutUsSectionFormValues) => {
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("About Us section updated:", data);
      setSubmitSuccess(true);
      reset(data);
    } catch {
      setSubmitError("Failed to update About Us section. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
      <section className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-5 shadow-[0_4px_12px_0_rgba(0,0,0,0.07)]">
        <h2 className="-mb-1 font-[Archivo] text-lg font-semibold leading-6 text-[#1A1A1A]">
          Edit About Us Section
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
          name="bulletBenefits"
          control={control}
          render={({ field, fieldState }) => (
            <div>
              <FormBadgesInput
                label="Add Bullet benefits"
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
              {fieldState.error && (
                <p className="mt-1 text-sm text-red-500">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-[Archivo] text-base font-semibold leading-6 text-[#1A1A1A]">
              Add Features
            </h3>
            <button
              type="button"
              onClick={() =>
                append({ title: "", subtitle: "", icon: null })
              }
              className="font-[Archivo] text-sm font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
            >
              + More Features
            </button>
          </div>

          {errors.features?.root && (
            <p className="text-sm text-red-500">{errors.features.root.message}</p>
          )}

          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-col gap-4 rounded-xl border border-[#E9E9EA] bg-[#FAFBFC] p-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-[Archivo] text-sm font-medium text-[#070707]">
                  Feature {index + 1}
                </span>
                {fields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="font-[Archivo] text-sm text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
                <div className="flex flex-1 flex-col gap-4">
                  <FormField
                    variant="cms"
                    label="Title"
                    placeholder="Enter title"
                    error={errors.features?.[index]?.title}
                    {...register(`features.${index}.title`)}
                  />

                  <FormField
                    variant="cms"
                    label="Subtitle"
                    placeholder="Enter subtitle"
                    error={errors.features?.[index]?.subtitle}
                    {...register(`features.${index}.subtitle`)}
                  />
                </div>

                <div className="w-full shrink-0 lg:w-[280px]">
                  <Controller
                    name={`features.${index}.icon`}
                    control={control}
                    render={({ field: iconField }) => (
                      <FormUploadZone
                        label="Add Icon"
                        variant="cms"
                        accept="image/*"
                        onFileSelect={(files) =>
                          iconField.onChange(files?.[0] ?? null)
                        }
                        onClear={() => iconField.onChange(null)}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {submitError && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-500">
          {submitError}
        </p>
      )}

      {submitSuccess && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-600">
          About Us section updated successfully.
        </p>
      )}

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
