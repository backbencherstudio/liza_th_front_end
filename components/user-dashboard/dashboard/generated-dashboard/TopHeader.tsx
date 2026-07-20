import UserDashboardIcons from '@/components/icons/UserDashboardIcons'
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import { FormSelect } from '@/components/reusable/FormSelect'
import { ArrowDownToLine } from 'lucide-react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

interface TopHeaderProps {
    title: string;
    subtitle: string;
    handleOpen: () => void;
    editTypes: { label: string, value: string }[];
    editType: string | null;
    setEditType: (editType: string | null) => void;
    dateOnly?: string;
}

export default function TopHeader({ title, subtitle, handleOpen, editTypes, editType, setEditType, dateOnly }: TopHeaderProps) {

    const options = [
        { label: "All Locations", value: "all" },
        { label: "Location 1", value: "location1" },
        { label: "Location 2", value: "location2" },
        { label: "Location 3", value: "location3" },
    ];

    const months = [
        { label: "All Months", value: "all" },
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
            <h2 className="text-[20px] font-medium leading-[34px] text-gray-900">Generated : {dateOnly}</h2>
            {/* Centered vertically on desktop (lg:items-center) to line up title & filters */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between text-sm ">
                
                {/* Left: Title & Subtitle */}
                <div className="flex-1">
                    <DashboardPageTitle
                        title={title}
                        description={subtitle}
                    />
                </div>

                {/* Right: Controls & Actions aligned on the same horizontal line */}
                <div className="flex flex-wrap items-center justify-start gap-2 lg:justify-end">
                    
                    {/* Location Filter */}
                    <div className="w-36">
                        <Controller
                            name="location"
                            control={control}
                            render={({ field }) => (
                                <FormSelect
                                    label=""
                                    placeholder="Location"
                                    options={options}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    error={errors.location}
                                    isActive={true}
                                />
                            )}
                        />
                    </div>

                    {/* Month Filter */}
                    <div className="w-36">
                        <Controller
                            name="month"
                            control={control}
                            render={({ field }) => (
                                <FormSelect
                                    label=""
                                    placeholder="Month"
                                    options={months}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                    error={errors.month}
                                    isActive={true}
                                />
                            )}
                        />
                    </div>

                    {/* Edit Type Filter */}
                    <div className="w-36">
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

                    {/* Compact Action Buttons */}
                    <div className="flex h-[40px] shrink-0 items-center gap-1.5 rounded-lg border border-[#E9E9E9] px-3 text-xs">
                        <button className="sf-btn whitespace-nowrap">Save</button>
                        <ArrowDownToLine className="h-3.5 w-3.5 text-[#575855]" />
                    </div>

                    <div className="flex h-[40px] shrink-0 items-center gap-1.5 rounded-lg border border-[#E9E9E9] px-3 text-xs">
                        <button className="sf-btn whitespace-nowrap">Share</button>
                        <UserDashboardIcons.ShareIcon className="h-3.5 w-3.5" />
                    </div>

                    <div className="flex h-[40px] shrink-0 items-center gap-1.5 rounded-lg bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] px-3 text-xs text-white">
                        <button className="sf-btn whitespace-nowrap font-medium">Export</button>
                        <ArrowDownToLine className="h-3.5 w-3.5" />
                    </div>
                </div>
            </div>
        </div>
    )
}