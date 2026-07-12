"use client";

import React, { useRef, useState } from "react";
import { UploadCloud, X, FileText, FileSpreadsheet, Image as ImageIcon, FileCode } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva("mb-2 block font-[Archivo] font-normal", {
  variants: {
    variant: {
      auth: "text-[18px] leading-[26px] text-[#151513]",
      cms: "text-[color:var(--Primary-Black,#1A1A1A)] [font-family:var(--Family-font-family,Archivo)] text-[length:var(--Scale-body_3,16px)] font-normal leading-[var(--Line-Height-body_3,22px)]",
    },
  },
  defaultVariants: {
    variant: "auth",
  },
});

interface FormUploadZoneProps extends VariantProps<typeof labelVariants> {
  label: string;
  onFileSelect?: (files: FileList | null) => void;
  onClear?: () => void;
  accept?: string;
  wrapperClassName?: string;
  labelClassName?: string;
}

export function FormUploadZone({
  label,
  onFileSelect,
  onClear,
  accept = "image/*,.pdf,.csv,.xlsx,.xls,.doc,.docx,.ppt,.pptx",
  variant = "auth",
  wrapperClassName,
  labelClassName,
}: FormUploadZoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  
  // Track details of the uploaded file
  const [fileDetails, setFileDetails] = useState<{
    name: string;
    type: string;
    size: string;
  } | null>(null);

  // Helper utility to identify extensions and return appropriate graphic iconography
  const getFileIcon = (fileName: string) => {
    const ext = fileName.split(".").pop()?.toLowerCase();
    if (!ext) return <UploadCloud className="h-8 w-8 text-[#2563EB]" />;

    if (["png", "jpg", "jpeg", "webp", "svg"].includes(ext)) {
      return <ImageIcon className="h-8 w-8 text-[#E2B714]" />; // Warm amber-yellow for visual assets
    }
    if (["pdf"].includes(ext)) {
      return <FileText className="h-8 w-8 text-[#EF4444]" />; // Red for document PDFs
    }
    if (["csv", "xlsx", "xls", "ods"].includes(ext)) {
      return <FileSpreadsheet className="h-8 w-8 text-[#10B981]" />; // Emerald green for matrix/data grids
    }
    if (["doc", "docx", "ppt", "pptx", "html"].includes(ext)) {
      return <FileCode className="h-8 w-8 text-[#3B82F6]" />; // Deep operational corporate blues
    }
    return <UploadCloud className="h-8 w-8 text-[#2563EB]" />;
  };

  const processFiles = (files: FileList | null) => {
    if (files && files[0]) {
      const file = files[0];
      // Convert raw structural bytes to easily readable KB/MB outputs
      const sizeInMB = file.size / (1024 * 1024);
      const formattedSize = sizeInMB < 0.1 
        ? `${(file.size / 1024).toFixed(1)} KB` 
        : `${sizeInMB.toFixed(2)} MB`;

      setFileDetails({
        name: file.name,
        type: file.type || file.name.split(".").pop() || "Unknown Type",
        size: formattedSize
      });

      if (onFileSelect) onFileSelect(files);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files) processFiles(e.dataTransfer.files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) processFiles(e.target.files);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setFileDetails(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (onClear) onClear();
  };

  return (
    <div className={cn("w-full", wrapperClassName)}>
      <label className={cn(labelVariants({ variant }), labelClassName)}>
        {label}
      </label>

      <div
        onClick={() => fileInputRef.current?.click()}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        className={cn(
          "relative flex flex-col justify-center items-center gap-6 flex-[1_0_0] self-stretch p-6 rounded-[10px] border-2 border-dashed transition-all cursor-pointer group",
          variant === "cms"
            ? "border-[#BBCFF9]  bg-[#FAFBFC]"
            : "border-[rgba(8,14,30,0.05)] bg-transparent",
          isDragActive && "border-[#2563EB] bg-blue-50/30"
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleInputChange}
        />

        {fileDetails && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-4 top-4 z-10 opacity-60 transition-opacity hover:opacity-100 p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={16} className="text-[#777980]" />
          </button>
        )}

        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-2 stroke-[1.5] transition-transform group-hover:scale-105">
            {fileDetails ? getFileIcon(fileDetails.name) : <UploadCloud className="h-8 w-8 text-[#2563EB]" />}
          </div>
          
          <span className="text-[color:var(--Text-secondary,#3D3D3C)] [font-family:var(--Family-font-family,Archivo)] text-[length:var(--Scale-body\_3,16px)] font-normal leading-[var(--Line-Height-body\_3,22px)] px-4 max-w-md truncate">
            {fileDetails ? fileDetails.name : "Click to upload files"}
          </span>
          
          <span className="text-xs text-[#8A8D99] font-[Archivo] mt-1.5 max-w-[340px] leading-normal">
            {fileDetails 
              ? `File details: Size is roughly ${fileDetails.size}` 
              : "Supports: Images (PNG, JPG), Documents (PDF, Word), Spreadsheets (CSV, Excel)..."
            }
          </span>
        </div>
      </div>
    </div>
  );
}