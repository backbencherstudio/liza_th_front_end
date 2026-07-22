"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { X, ImagePlus, ImageIcon } from "lucide-react";
import Image from "next/image";

import CustomButton from "@/components/reusable/CustomButton";
import { FormField } from "@/components/reusable/FormInput";
import { FormTextarea } from "@/components/reusable/FormTextarea";
import { FormUploadZone } from "@/components/reusable/FormUploadZone";

// Schema definitions allowing multiple logo file inputs or previews
const brandSectionSchema = z.object({
  headline: z.string().min(1, "Headline is required"),
  description: z.string().min(1, "Description is required"),
  brandLogos: z.array(z.any()).min(1, "Add at least one logo image"),
});

type BrandSectionFormValues = z.infer<typeof brandSectionSchema>;

interface LogoItem {
  id: string;
  file?: File;
  previewUrl: string;
  name: string;
  sizeLabel: string;
}

const MAX_FILE_SIZE_MB = 5;
const MAX_LOGOS = 15;

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function EditBrandSection() {
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [uploadError, setUploadError] = useState("");

  // State to manage multiple logo previews and active items
  const [logos, setLogos] = useState<LogoItem[]>([]);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BrandSectionFormValues>({
    resolver: zodResolver(brandSectionSchema),
    defaultValues: {
      headline: "Works with the tools you already use",
      description: "No integrations required. Simply export and upload.",
      brandLogos: [],
    },
  });

  // Handle adding new files from upload zone
  const handleFilesSelected = (files: FileList | File[]) => {
    setUploadError("");
    const fileArray = Array.from(files);

    const remainingSlots = MAX_LOGOS - logos.length;
    if (remainingSlots <= 0) {
      setUploadError(`You can add up to ${MAX_LOGOS} logos only.`);
      return;
    }

    const validFiles: File[] = [];
    const oversized: string[] = [];

    fileArray.slice(0, remainingSlots).forEach((file) => {
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        oversized.push(file.name);
      } else {
        validFiles.push(file);
      }
    });

    if (oversized.length > 0) {
      setUploadError(
        `${oversized.length > 1 ? "These files exceed" : `"${oversized[0]}" exceeds`} ${MAX_FILE_SIZE_MB}MB and ${oversized.length > 1 ? "were" : "was"} skipped.`
      );
    }

    if (fileArray.length > remainingSlots) {
      setUploadError(`Only ${remainingSlots} more logo(s) can be added (max ${MAX_LOGOS}).`);
    }

    const newLogoItems: LogoItem[] = validFiles.map((file) => ({
      id: Math.random().toString(36).substring(2, 9),
      file,
      previewUrl: URL.createObjectURL(file),
      name: file.name,
      sizeLabel: formatFileSize(file.size),
    }));

    const updatedLogos = [...logos, ...newLogoItems];
    setLogos(updatedLogos);
    setValue("brandLogos", updatedLogos, { shouldValidate: true });
  };

  // Handle removing/deleting an individual logo preview
  const handleRemoveLogo = (id: string) => {
    const updatedLogos = logos.filter((logo) => logo.id !== id);
    setLogos(updatedLogos);
    setValue("brandLogos", updatedLogos, { shouldValidate: true });
    setUploadError("");
  };

  const onSubmit = async (data: BrandSectionFormValues) => {
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Brand section values updated:", data);
      setSubmitSuccess(true);
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
          render={({ fieldState }) => (
            <div className="flex flex-col w-full gap-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-[#1A1A1A] font-[Archivo]">
                  Add Logo Images
                </label>
                <span className="text-xs text-[#9CA3AF] font-[Archivo]">
                  {logos.length}/{MAX_LOGOS} added
                </span>
              </div>

              {logos.length < MAX_LOGOS && (
                <FormUploadZone
                  supportText="Supports: Images (PNG, JPG, up to 5MB each"
                  label="Drag & drop logos here, or click to browse"
                  variant="cms"
                  accept="image/*,.png,.jpg,.jpeg,.webp,.svg"
                  multiple
                  onFileSelect={(files) => handleFilesSelected(files || [])}
                  onClear={() => {
                    setLogos([]);
                    setValue("brandLogos", [], { shouldValidate: true });
                    setUploadError("");
                  }}
                />
              )}

              <p className="text-xs text-[#9CA3AF] font-[Archivo] -mt-1">
                PNG, JPG, or SVG · up to {MAX_FILE_SIZE_MB}MB each · max {MAX_LOGOS} logos
              </p>

              {uploadError && (
                <p className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-700 font-[Archivo]">
                  {uploadError}
                </p>
              )}

              {/* Empty state */}
              {logos.length === 0 && (
                <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#E5E7EB] bg-gray-50/60 py-8 text-center">
                  <ImageIcon size={28} className="text-[#C1C4CB]" />
                  <p className="text-sm text-[#9CA3AF] font-[Archivo]">
                    No logos added yet
                  </p>
                </div>
              )}

              {/* Logo Previews Grid with Delete capability */}
              {logos.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  {logos.map((logo) => (
                    <div
                      key={logo.id}
                      className="relative flex flex-col rounded-xl border border-[#E5E7EB] bg-gray-50 overflow-hidden transition-shadow hover:shadow-md"
                    >
                      <div className="relative h-20 w-full flex items-center justify-center bg-white">
                        <Image
                          src={logo.previewUrl}
                          alt={logo.name}
                          fill
                          className="object-contain p-3"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveLogo(logo.id)}
                          aria-label={`Remove ${logo.name}`}
                          className="absolute top-1.5 right-1.5 bg-black/60 hover:bg-red-600 text-white rounded-full p-1 shadow-sm transition-colors"
                        >
                          <X size={13} />
                        </button>
                      </div>
                      <div className="flex flex-col gap-0.5 px-2 py-1.5 border-t border-[#E5E7EB]">
                        <span className="truncate text-[11px] font-medium text-[#374151] font-[Archivo]">
                          {logo.name}
                        </span>
                        <span className="text-[10px] text-[#9CA3AF] font-[Archivo]">
                          {logo.sizeLabel}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Add-more tile, shown only if under the limit */}
                  {logos.length < MAX_LOGOS && (
                    <label className="flex flex-col items-center justify-center gap-1 h-full min-h-[104px] rounded-xl border border-dashed border-[#D1D5DB] cursor-pointer text-[#9CA3AF] hover:border-[#2563EB] hover:text-[#2563EB] transition-colors">
                      <ImagePlus size={20} />
                      <span className="text-[11px] font-[Archivo]">Add more</span>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files) handleFilesSelected(e.target.files);
                          e.target.value = "";
                        }}
                      />
                    </label>
                  )}
                </div>
              )}

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