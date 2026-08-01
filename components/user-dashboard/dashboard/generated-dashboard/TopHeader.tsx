import UserDashboardIcons from '@/components/icons/UserDashboardIcons'
import CustomModal from '@/components/reusable/CustomModal'
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import { FormSelect } from '@/components/reusable/FormSelect'
import { ArrowDownToLine, SquarePen } from 'lucide-react'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

interface TopHeaderProps {
    title: string;
    subtitle: string;
    handleOpen: () => void;
    editTypes: { label: string, value: string }[];
    editType: string | null;
    setEditType: (editType: string | null) => void;
}

export default function TopHeader({ title, subtitle, handleOpen, editTypes, editType, setEditType }: TopHeaderProps) {

    const [isOpen, setIsOpen] = useState(false);
    const [insightName, setInsightName] = useState("");
    const options = [
        { label: "Location 1", value: "location1" },
        { label: "Location 2", value: "location2" },
        { label: "Location 3", value: "location3" },
    ];

    const months = [
        { label: "January", value: "january" },
        { label: "February", value: "february" },
        { label: "March", value: "march" },
    ];



    const { control, formState: { errors } } = useForm({
        defaultValues: {
            location: "",
            month: "",
            editType: editType,
        },
        mode: "onChange",
    });

    return (
        <div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
                {/* Left */}
                <div className="flex-1">
                    <DashboardPageTitle
                        title={title}
                        description={subtitle}
                    />
                </div>

                {/* Right */}
                <div className="flex flex-wrap items-end justify-start gap-3 lg:justify-end">
                    <div className="min-w-[180px]">
                        <Controller
                            name="location"
                            control={control}
                            render={({ field }) => (
                                <FormSelect
                                    label=""
                                    placeholder="Select Location"
                                    options={options}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    error={errors.location}
                                    isActive={true}
                                />
                            )}
                        />
                    </div>

                    <div className="min-w-[180px]">
                        <Controller
                            name="month"
                            control={control}
                            render={({ field }) => (
                                <FormSelect
                                    label=""
                                    placeholder="Select Month"
                                    options={months}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    error={errors.month}
                                    isActive={true}
                                />
                            )}
                        />
                    </div>

                    <div className="min-w-[180px]">
                        <FormSelect
                            label=""
                            placeholder="Edit Type"
                            options={editTypes}
                            value={editType ?? undefined}
                            onValueChange={(value) => {
                                setEditType(value);
                                handleOpen();
                            }}
                            error={errors.editType}
                            isActive={true}
                        />
                    </div>

                    {/* <div className="flex h-[48px] shrink-0 items-center gap-2 rounded-xl border border-[#E9E9E9]  px-3.5">
                        <button className="sf-btn whitespace-nowrap">Edit Data</button>
                        <SquarePen className="h-4 w-4 text-[#575855]" />
                    </div> */}

                    <div className="relative">

                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex h-[48px] shrink-0 items-center gap-2 rounded-xl border border-[#E9E9E9] px-3.5"
                        >
                            <span className="sf-btn whitespace-nowrap">Save</span>
                            <ArrowDownToLine className="h-4 w-4 text-[#575855]" />
                        </button>

                        <CustomModal
                            open={isOpen}
                            onOpenChange={(open) => {
                                setIsOpen(open);
                                if (!open) {
                                    setInsightName("");
                                }
                            }}
                            size="md"
                        >
                            <div className="w-full">
                                <h2 className="text-[36px] font-semibold text-[#080E1E]">
                                    Save your Insight
                                </h2>

                                <p className="mt-3 text-lg text-[#5F667A]">
                                    You can save your Insight by naming it.
                                </p>

                                <input
                                    type="text"
                                    placeholder="xxxxxx"
                                    value={insightName}
                                    onChange={(e) => setInsightName(e.target.value)}
                                    className="mt-8 h-[56px] w-full rounded-xl border border-[#E7EAF3] px-4 outline-none focus:border-[#2954D1]"
                                />

                                <div className="mt-8 grid grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="h-[56px] rounded-xl border border-[#2954D1] text-xl font-medium text-[#2954D1]"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={() => {
                                            console.log(insightName);
                                            setIsOpen(false);
                                        }}
                                        className="h-[56px] rounded-xl bg-[#2954D1] text-xl font-medium text-white"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </CustomModal>
                    </div>

                    <div className="flex h-[48px] shrink-0 items-center gap-2 rounded-xl border border-[#E9E9E9]  px-3.5">
                        <button className="sf-btn whitespace-nowrap">Share</button>
                        <UserDashboardIcons.ShareIcon />
                    </div>

                    <div className="flex h-[47px] shrink-0 items-center gap-2 rounded-xl bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] px-3 text-white">
                        <button className="sf-btn whitespace-nowrap">Export</button>
                        <ArrowDownToLine className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}
