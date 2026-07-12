"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

import CustomButton from "@/components/reusable/CustomButton";
import { FormField } from "@/components/reusable/FormInput";
import { FormRichTextEditor } from "@/components/reusable/FormRichTextEditor";

const DEFAULT_LEGAL_CONTENT = `
  <p>Welcome to Spike Technology ("Spike", "Spike Dashboard", "Company", "we", "us," or "our"). These Terms and Conditions ("Terms") govern your access to and use of our website, platform, software, analytics platform and related services...</p>
  <h3>1. Use of Services</h3>
  <ul>
    <li>Use the Services for unlawful purposes</li>
    <li>Interfere with or disrupt system performance or security</li>
    <li>Attempt to reverse engineer or misuse the platform</li>
  </ul>
`.trim();

const legalSectionSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z
    .string()
    .min(1, "Content body cannot be empty")
    .refine(
      (value) => value.replace(/<[^>]*>/g, "").trim().length > 0,
      "Content body cannot be empty",
    ),
});

type LegalSectionFormValues = z.infer<typeof legalSectionSchema>;

export default function EditLegalSection() {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LegalSectionFormValues>({
    resolver: zodResolver(legalSectionSchema),
    defaultValues: {
      title: "Terms and Conditions - Spike Technology, LLC",
      content: DEFAULT_LEGAL_CONTENT,
    },
  });

  const onSubmit = async (data: LegalSectionFormValues) => {
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Published Changes Data Layer:", data);
      setSubmitSuccess(true);
      reset(data);
    } catch {
      setSubmitError("Failed to update terms channel. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
      <section className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-5 shadow-[0_4px_12px_0_rgba(0,0,0,0.07)]">
        <h2 className="-mb-1 font-[Archivo] text-lg font-semibold leading-6 text-[#1A1A1A]">
          Legal and online safety Page
        </h2>

        <FormField
          variant="cms"
          label="Title *"
          placeholder="Enter page title document type"
          error={errors.title}
          {...register("title")}
        />

        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <FormRichTextEditor
              label="Content *"
              value={field.value}
              onChange={field.onChange}
              error={errors.content}
            />
          )}
        />
      </section>

      {submitError && (
        <p className="font-[Archivo] text-sm text-red-500">{submitError}</p>
      )}
      {submitSuccess && (
        <p className="font-[Archivo] text-sm text-green-600">
          Changes published successfully.
        </p>
      )}

      <div className="mt-2 flex w-full items-center justify-end gap-3">
        <CustomButton
          type="button"
          variant="outline"
          className="w-full border border-solid border-[#2563EB] bg-white text-[#2563EB] hover:bg-blue-50 md:w-fit md:min-w-[140px]"
        >
          Preview
        </CustomButton>
        <CustomButton
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1D3557] text-white hover:bg-[#112237] md:w-fit md:min-w-[140px]"
        >
          {isSubmitting ? "Publishing..." : "Publish Changes"}
        </CustomButton>
      </div>
    </form>
  );
}
