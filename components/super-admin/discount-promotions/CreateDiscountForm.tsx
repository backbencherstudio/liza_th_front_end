"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { RefreshCw, Plus, X } from "lucide-react";

import { FormField } from "@/components/reusable/FormInput";
import { FormSelect } from "@/components/reusable/FormSelect";
import CustomButton from "@/components/reusable/CustomButton";
import { Switch } from "@/components/ui/switch";

interface CreateDiscountFormData {
  discountName: string;
  percentage: string;
  code: string;
  subscriptionType: string;
  startDate: string;
  endDate: string;
  userLimit: string;
  discountPercentageLimit: string;
  adsType: string;
  showOnAds: boolean;
  discountLimitation: boolean;
}

interface CreateDiscountFormProps {
  plan?: any; // EditableDiscount if needed later
  onSuccess?: () => void;
}

const SUBSCRIPTION_PLANS = [
  { label: "Select plan", value: "" },
  { label: "Basic", value: "basic" },
  { label: "Pro", value: "pro" },
  { label: "Enterprise", value: "enterprise" },
];

const ADS_TYPES = [
  { label: "Banner", value: "banner" },
  { label: "All", value: "all" },

];

const USER_LIMIT_OPTIONS = [
  { label: "10", value: "10" },
  { label: "20", value: "20" },
  { label: "50", value: "50" },
  { label: "100", value: "100" },
  { label: "Unlimited", value: "unlimited" },
];

const DISCOUNT_LIMIT_OPTIONS = [
  { label: "50%", value: "50" },
  { label: "60%", value: "60" },
  { label: "75%", value: "75" },
  { label: "100%", value: "100" },
];

export default function CreateDiscountForm({
  plan,
  onSuccess,
}: CreateDiscountFormProps) {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateDiscountFormData>({
    defaultValues: {
      discountName: "",
      percentage: "",
      code: "",
      subscriptionType: "",
      startDate: "",
      endDate: "",
      userLimit: "",
      discountPercentageLimit: "",
      adsType: "",
      showOnAds: true,
      discountLimitation: true,
    },
  });

  const [generatedCode, setGeneratedCode] = useState("");

  // Generate new code
  const generateCode = () => {
    const newCode = Math.random().toString(36).substring(2, 10).toUpperCase();
    setGeneratedCode(newCode);
    setValue("code", newCode);
  };

  useEffect(() => {
    if (plan) {
      // Populate for edit mode (if needed in future)
      reset({
        discountName: plan.title || "",
        percentage: plan.percentage || "",
        code: plan.code || "",
        subscriptionType: plan.planType || "",
        startDate: plan.startDate || "",
        endDate: plan.endDate || "",
        userLimit: "",
        discountPercentageLimit: "",
        adsType: "",
        showOnAds: true,
        discountLimitation: true,
      });
    }
  }, [plan, reset]);

  const onSubmit = async (data: CreateDiscountFormData) => {
    console.log("Discount Payload:", { ...data, code: generatedCode });
    await new Promise((resolve) => setTimeout(resolve, 800));
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Discount Name & Percentage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Discount name"
          placeholder="Enter discount name"
          {...register("discountName", { required: "Discount name is required" })}
          error={errors.discountName}
        />

        <FormField
          label="Percentage"
          placeholder="e.g. 5%"
          {...register("percentage", { required: "Percentage is required" })}
          error={errors.percentage}
        />
      </div>

      {/* Generate Code & Subscription Type */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="relative">
            <FormField
              label="Generate code"
              {...register("code")}
              value={generatedCode}
              readOnly
              placeholder="261548f"
              className="pr-12"
            />
            <button
              type="button"
              onClick={generateCode}
              className="absolute right-4 top-13 text-gray-500  transition-colors"
            >
              <RefreshCw size={18} />
            </button>
          </div>
        </div>

        <Controller
          name="subscriptionType"
          control={control}
          rules={{ required: "Select subscription type" }}
          render={({ field }) => (
            <FormSelect
              label="Applies to Subscription Types"
              placeholder="Select plan"
              options={SUBSCRIPTION_PLANS}
              value={field.value}
              onValueChange={field.onChange}
              error={errors.subscriptionType}
            />
          )}
        />
      </div>

      {/* Start & End Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Start Date"
          placeholder="1/10/2026"
          {...register("startDate", { required: "Start date is required" })}
          error={errors.startDate}
        />

        <FormField
          label="End Date"
          placeholder="1/25/2026"
          {...register("endDate", { required: "End date is required" })}
          error={errors.endDate}


        />
      </div>

      {/* Discount Limitation */}
      <div className="flex items-center justify-between">
        <label className="text-[#070707] font-archivo text-[18px] font-medium leading-[24px]">Discount Limitation</label>
        {/* <Controller
          name="discountLimitation"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              checked={field.value}
              onChange={field.onChange}
              className="w-11 h-6 accent-blue-600"
            />
          )}
        /> */}
        <Controller
          name="discountLimitation"
          control={control}
          render={({ field }) => (
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              className="data-[state=checked]:bg-blue-600"
            />
          )}
        />
      </div>

      {watch("discountLimitation") && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="userLimit"
              control={control}
              render={({ field }) => (
                <FormSelect
                  label="User Limit"
                  options={USER_LIMIT_OPTIONS}
                  value={field.value}
                  onValueChange={field.onChange}

                />
              )}
            />

            <Controller
              name="discountPercentageLimit"
              control={control}
              render={({ field }) => (
                <FormSelect
                  label="Discount Percentage"
                  options={DISCOUNT_LIMIT_OPTIONS}
                  value={field.value}
                  onValueChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="text-[#070707] font-archivo text-[12px] font-normal leading-[16px] pt-1.5">
            *Maximum number of users who can claim this discount

          </div>
        </div>
      )}


      {/* Shows on Ads */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[#070707] font-archivo text-[18px] font-medium leading-[24px]">Shows on: Ads type like Advertisement</p>
          <p className="text-[#4A4C56] font-inter text-[14px] font-normal leading-[160%] tracking-[0.07px] pt-1">Add Advertisement with discount.</p>
        </div>
        <Controller
          name="showOnAds"
          control={control}
          render={({ field }) => (
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              className="data-[state=checked]:bg-blue-600"
            />
          )}
        />
      </div>

      {/* Ads Type */}
      <Controller
        name="adsType"
        control={control}
        render={({ field }) => (
          <FormSelect
            label="Ads Type"
            options={ADS_TYPES}
            value={field.value}
            onValueChange={field.onChange}
          />
        )}
      />

      {/* Save Button */}
      <CustomButton
        type="submit"
        className="w-full py-3 text-base font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Saving..." : plan ? "Update Discount" : "Save"}
      </CustomButton>
    </form>
  );
}