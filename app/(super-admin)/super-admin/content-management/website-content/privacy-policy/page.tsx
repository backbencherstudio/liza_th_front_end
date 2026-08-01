"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

import CustomButton from "@/components/reusable/CustomButton";
import { FormField } from "@/components/reusable/FormInput";
import { FormRichTextEditor } from "@/components/reusable/FormRichTextEditor";

const DEFAULT_PRIVACY_CONTENT = `
  <p>At Spike Technology, we value the trust that our customers place in us to use and protect personal information. This Privacy Policy explains how Spike Technology, LLC ("Spike", "Spike Dashboard", "our", "us", or "we") collects, uses, and protects your information. When you use Spike Technology or provide personal information, you accept the privacy practices described in this Privacy Notice. Please read this Privacy Notice in full to understand our privacy practices before you use Spike Technology.</p>
  <h3>1. Information We Collect</h3>
  <h4>Information You Provide</h4>
  <ul>
    <li>Name, email, company name, telephone number</li>
    <li>Facility Type</li>
    <li>Business Type</li>
    <li>IP address</li>
    <li>Device and browser information</li>
    <li>Usage data and interaction logs</li>
    <li>Sensitive personal information such as credit card (Used for processing payment, not stored)</li>
    <li>Marketing preference such as text message or email notification and frequency</li>
    <li>Information you provide directly to us:
      <ul>
        <li>When you use the site,</li>
        <li>When you use offline features related to the site, such as communicating with us by phone, e-mail, or in person.</li>
        <li>When you interact with us in the ordinary course of business.</li>
      </ul>
    </li>
  </ul>
  <p>We may receive information about you from a data bank or aggregator, business partners, or other businesses and combine it with information we already have about you. Personal information may be combined with information that does not identify you. If we combine information that does not identify you with your personal information, it will be treated as personal information.</p>
`.trim();

const privacySectionSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z
    .string()
    .min(1, "Content body cannot be empty")
    .refine(
      (value) => value.replace(/<[^>]*>/g, "").trim().length > 0,
      "Content body cannot be empty",
    ),
});

type PrivacySectionFormValues = z.infer<typeof privacySectionSchema>;

export default function EditLegalSection() {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PrivacySectionFormValues>({
    resolver: zodResolver(privacySectionSchema),
    defaultValues: {
      title: "Privacy Policy - Spike Technology, LLC",
      content: DEFAULT_PRIVACY_CONTENT,
    },
  });

  const onSubmit = async (data: PrivacySectionFormValues) => {
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Published Changes Data Layer:", data);
      setSubmitSuccess(true);
      reset(data);
    } catch {
      setSubmitError("Failed to update privacy policy. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
      <section className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-5 shadow-[0_4px_12px_0_rgba(0,0,0,0.07)]">
        <h2 className="-mb-1 font-[Archivo] text-lg font-semibold leading-6 text-[#1A1A1A]">
          Privacy Policy
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