import UserDashboardIcons from '@/components/icons/UserDashboardIcons'
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle'
import { FormSelect } from '@/components/reusable/FormSelect'
import { ArrowDownToLine, SquarePen } from 'lucide-react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

interface TopHeaderProps {
    title: string;
    subtitle: string;
    handleOpen: () => void;
    editTypes: { label: string, value: string }[];
    editType: string|null;
    setEditType: (editType: string|null) => void;
}

export default function TopHeader({ title, subtitle, handleOpen, editTypes, editType, setEditType }: TopHeaderProps) {

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

                    <div className="flex h-[48px] shrink-0 items-center gap-2 rounded-xl border border-[#E9E9E9]  px-3.5">
                        <button className="sf-btn whitespace-nowrap">Save</button>
                        <ArrowDownToLine className="h-4 w-4 text-[#575855]" />
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
