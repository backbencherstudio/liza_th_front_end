"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Plus } from "lucide-react";

import CustomButton from "@/components/reusable/CustomButton";
import { FormField } from "@/components/reusable/FormInput";
import { FormTextarea } from "@/components/reusable/FormTextarea";
import { FormUploadZone } from "@/components/reusable/FormUploadZone";
import { FormBadgesInput } from "@/components/reusable/FormBadgesInput";

// Explicit validation map modeling the layered sub-modules of the dashboard wireframe
const contactUsSectionSchema = z.object({
  smallTag: z.string().min(1, "Small tag is required"),
  headline: z.string().min(1, "Headline is required"),
  description: z.string().min(1, "Description is required"),
  
  // Specification Sub-Module Object Layout
  specTitle: z.string().min(1, "Specification title is required"),
  specSubtitle: z.string().min(1, "Specification subtitle is required"),
  specIcon: z.instanceof(File).nullable().optional(),

  // Add Message Metadata Layout Block
  messageTitle: z.string().min(1, "Message block title is required"),
  messageSubtitle: z.string().min(1, "Message block subtitle is required"),
  
  // Dynamic Badges array
  inputFields: z.array(z.string()).min(1, "Add at least one input field tag"),
  
  // Platform redirection action button parameters
  ctaButtonText: z.string().min(1, "Button text is required"),
});

type ContactUsSectionFormValues = z.infer<typeof contactUsSectionSchema>;

export default function EditContactUsSection() {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsSectionFormValues>({
    resolver: zodResolver(contactUsSectionSchema),
    defaultValues: {
      smallTag: "Contact Us",
      headline: "Get in Touch with Us",
      description: "Reach out to us for inquiries, support, or partnership opportunities. We're here to assist you!",
      specTitle: "You can email us here",
      specSubtitle: "info@spiketechnology.ai",
      specIcon: null,
      messageTitle: "Send Us a Message",
      messageSubtitle: "Use our convenient contact form to reach out with questions, feedback, or collaboration inquiries.",
      inputFields: ["Name", "Email", "Message"],
      ctaButtonText: "Explore Our Platform",
    },
  });

  const onSubmit = async (data: ContactUsSectionFormValues) => {
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Contact Us Configuration Submitted Successfully:", data);
      setSubmitSuccess(true);
      reset(data);
    } catch {
      setSubmitError("Failed to update contact configuration. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-5">
      
      {/* CORE CONTAINER CARD */}
      <section className="flex w-full flex-col gap-5 rounded-[20px] border border-solid border-[#E9E9EA] bg-white p-5 shadow-[0_4px_12px_0_rgba(0,0,0,0.07)]">
        
        <h2 className="text-[#1A1A1A] font-[Archivo] text-lg font-semibold leading-6 -mb-1">
          Edit Contact Us Section
        </h2>

        {/* TOP LEVEL DESCRIPTIVE BLOCKS */}
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
          placeholder="Enter description text..."
          error={errors.description}
          {...register("description")}
        />

        {/* 1. SPECIFICATION ROW LEVEL SUB-MODULE COMPONENT */}
        <div className="w-full border-t border-solid border-[#F4F4F5] pt-4 mt-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-[#1A1A1A] font-[Archivo]">Add Specification</h3>
            <button type="button" className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] font-[Archivo]">
              <Plus size={16} /> More Specification
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 w-full items-start">
            {/* Structural Fields Left Column Grid */}
            <div className="flex flex-col gap-4 flex-1 w-full">
              <FormField
                variant="cms"
                label="Title"
                placeholder="Enter title text"
                error={errors.specTitle}
                {...register("specTitle")}
              />
              <FormField
                variant="cms"
                label="Subtitle"
                placeholder="Enter subtitle info"
                error={errors.specSubtitle}
                {...register("specSubtitle")}
              />
            </div>
            
            {/* Visual Icon Dropzone Right Column Component */}
            <div className="w-full lg:w-[260px] shrink-0 lg:mt-0">
              <Controller
                name="specIcon"
                control={control}
                render={({ field }) => (
                  <FormUploadZone
                    label="Add Icon"
                    variant="cms"
                    accept="image/*"
                    wrapperClassName="h-full"
                    onFileSelect={(files) => field.onChange(files?.[0] ?? null)}
                    onClear={() => field.onChange(null)}
                  />
                )}
              />
            </div>
          </div>
        </div>

        {/* 2. ADD MESSAGE MODULE COMPONENT LAYER */}
        <div className="w-full border-t border-solid border-[#F4F4F5] pt-4 mt-1 flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-[#1A1A1A] font-[Archivo] -mb-1">Add Message</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <FormField
              variant="cms"
              label="Title"
              placeholder="Enter form title header"
              error={errors.messageTitle}
              {...register("messageTitle")}
            />
            <FormTextarea
              variant="cms"
              label="Subtitle"
              placeholder="Enter form helper instructions"
              error={errors.messageSubtitle}
              {...register("messageSubtitle")}
            />
          </div>
        </div>

        {/* 3. INPUT FIELD DYNAMIC PILL BADGE GROUP */}
        <div className="w-full border-t border-solid border-[#F4F4F5] pt-4 mt-1">
          <Controller
            name="inputFields"
            control={control}
            render={({ field }) => (
              <FormBadgesInput
                label="Add Input Field"
                placeholder="Input field name"
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
        </div>

        {/* 4. BUTTON REDIRECTION FOOTER PARAMETERS */}
        <div className="w-full border-t border-solid border-[#F4F4F5] pt-4 mt-1">
          <FormField
            variant="cms"
            label="CTA Button Text - 1"
            placeholder="Enter navigation string button text"
            error={errors.ctaButtonText}
            {...register("ctaButtonText")}
          />
        </div>

      </section>

      {/* SYSTEM FEEDBACK NOTIFICATIONS */}
      {submitError && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-500 font-[Archivo]">
          {submitError}
        </p>
      )}

      {submitSuccess && (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-600 font-[Archivo]">
          Contact section layout updated successfully.
        </p>
      )}

      {/* FOOTER ACTIONS RUNTIME TRIGGER */}
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