"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Plus, X } from "lucide-react";

import { FormField } from "@/components/reusable/FormInput";
import { FormSelect } from "@/components/reusable/FormSelect";
import CustomButton from "@/components/reusable/CustomButton";

const DURATION_OPTIONS = [
    { label: "Daily", value: "daily" },
    { label: "Weekly", value: "weekly" },
    { label: "Monthly", value: "monthly" },
    { label: "Yearly", value: "yearly" },
];

interface SubscriptionFormData {
    planName: string;
    duration: string;
    price: string;
    description: string;
}

interface SubscriptionFormProps {
    plan?: any;
}

export default function SubscriptionForm({
    plan,
}: SubscriptionFormProps) {
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<SubscriptionFormData>({
        defaultValues: {
            planName: "",
            duration: "",
            price: "",
            description: "",
        },
    });

    const [feature, setFeature] = useState("");
    const [features, setFeatures] = useState<string[]>([
        "Up to 50 dashboards/month",
    ]);


    useEffect(() => {
        if (plan) {
            reset({
                planName: plan.title,
                duration: plan.duration,
                description: plan.planType,
                price: plan.price.replace("$", "").replace("/month", ""),
            });

            setFeatures(plan.features);
        } else {
            reset({
                planName: "",
                duration: "",
                description: "",
                price: "",
            });

            setFeatures([]);
        }
    }, [plan, reset]);

    const addFeature = () => {
        if (!feature.trim()) return;

        setFeatures((prev) => [...prev, feature]);
        setFeature("");
    };

    const removeFeature = (index: number) => {
        setFeatures((prev) => prev.filter((_, i) => i !== index));
    };

    const onSubmit = (data: SubscriptionFormData) => {
        const payload = {
            ...data,
            features,
        };

        console.log(payload);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex-1">
                    <FormField
                        label="Plan Name"
                        placeholder="Enter plan name"
                        {...register("planName", {
                            required: "Plan Name is required",
                        })}
                        error={errors.planName}
                    />
                </div>

                <div className="flex-1">
                    <FormField
                        label="Description"
                        placeholder="Enter your description"
                        {...register("description", {
                            required: "Description is required",
                        })}
                        error={errors.description}
                    />
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 md:flex-row">
                <div className="flex-1">
                    <Controller
                        name="duration"
                        control={control}
                        rules={{ required: "Select duration" }}
                        render={({ field }) => (
                            <FormSelect
                                label="Plan Duration"
                                placeholder="Select Duration"
                                options={DURATION_OPTIONS}
                                value={field.value}
                                onValueChange={field.onChange}
                                error={errors.duration}
                            />
                        )}
                    />
                </div>

                <div className="flex-1">
                    <FormField
                        label="Price"
                        placeholder="Enter your price"
                        type="number"
                        {...register("price", {
                            required: "Price is required",
                        })}
                        error={errors.price}
                    />
                </div>
            </div>





            <div>
                <label className="text-[#151513] font-[Archivo] text-[18px] font-normal leading-[26px] mb-2 block">
                    Subscription Features
                </label>

                <div className="flex gap-3 relative">
                    <input
                        value={feature}
                        onChange={(e) => setFeature(e.target.value)}
                        placeholder="Input features name"
                        className="flex-1 rounded-xl border border-[rgba(8,14,30,0.05)] p-4 outline-none"
                    />

                    <button
                        type="button"
                        onClick={addFeature}
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                    >
                        <Plus size={16} className="text-[#2563EB]" />
                    </button>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 rounded-full bg-[#EEF4FF] px-4 py-2"
                        >
                            <span className="text-sm">{item}</span>

                            <button
                                type="button"
                                onClick={() => removeFeature(index)}
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <CustomButton
                type="submit"
                className="w-full"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Saving..." : "Save Plan"}
            </CustomButton>
        </form>
    );
}