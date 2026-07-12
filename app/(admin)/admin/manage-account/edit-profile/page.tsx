"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { FormSelect } from "@/components/reusable/FormSelect";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/reusable/FormInput";
import { Edit } from "lucide-react";
import SuperAdminSetting from "@/components/icons/SettingsIcon";


export default function Page() {

    const [image, setImage] = useState("/assets/SuperAdmin/SuperAdmin.png");
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        setImage(URL.createObjectURL(file));

        const formData = new FormData();
        formData.append("image", file);

        console.log(formData.get("image"));

        // await uploadProfileImage(formData);
    };
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <p className="text-[#070707] text-[20px] font-medium leading-[26px]">
                    Profile Information
                </p>

                <div className="flex items-center gap-4 md:gap-6 py-6">
                    <div className="relative">
                        <Image
                            src={image}
                            alt="avatar"
                            width={110}
                            height={110}
                            className="rounded-full"
                        />

                        <label
                            htmlFor="profile-image"
                            className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-[#0185DA] p-2"
                        >
                            <SuperAdminSetting.EditIcon />
                        </label>

                        <input
                            id="profile-image"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageChange}
                        />
                    </div>

                    <div>
                        <p className="text-[#070707] text-[18px] font-medium leading-6">
                            Jordan Chen
                        </p>
                        <p className="text-[#4A4C56] text-sm font-normal leading-[22.4px] tracking-[0.07px]">
                            Customer Service
                        </p>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border-0 md:border md:border-1 md:border-[#ECEFF3] bg-white p-0 md:p-6 md:p-8">
                <p className="mb-6 text-[#070707] text-[20px] font-medium leading-[26px]">
                    Personal Information
                </p>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    <FormField
                        label="Full Name"
                        defaultValue="Brendoly Cooper"
                        placeholder="Enter full name"
                    />

                    <FormField
                        label="User Name"
                        defaultValue="B. Cooper"
                        placeholder="Enter username"
                    />


                    <FormField
                        label="Email Address"
                        type="email"
                        defaultValue="B.Cooper@example.com"
                        placeholder="Enter email"
                    />

                    <FormField
                        label="Phone Number"
                        defaultValue="(207) 555-0119"
                        placeholder="Enter phone number"
                    />

                    <FormField
                        label="Industry"
                        defaultValue="(207) 555-0119"
                        placeholder="General"
                    />

                    <FormField
                        label="Role"
                        type="email"
                        defaultValue="B.Cooper@example.com"
                        placeholder="Accountant"
                    />




                    <div className="md:col-span-2">
                        <FormField
                            label="Address"
                            defaultValue="2972 Westheimer Rd. Santa Ana. Illinois 85486"
                            placeholder="Enter address"
                        />
                    </div>


                    <FormField
                        label="Postcode (PLZ)"
                        defaultValue="5486"
                        placeholder="Enter postcode"
                    />

                    <FormSelect
                        label="Street"
                        value="Street"
                        options={[
                            { label: "2972 Westheimer Rd.", value: "2972 Westheimer Rd." },
                            { label: "2E2 West.", value: "2972 Westheimer Rd." },
                            { label: "293 Westheime.", value: "2972 Westheimer Rd." },
                        ]}
                        onValueChange={(value) => console.log(value)}
                    />

                    <FormField
                        label="Place of Residence"
                        defaultValue="Santa Ana, Illinois 85486"
                        placeholder="Enter residence"
                    />




                    <FormSelect
                        label="Canton"
                        value="canton"
                        options={[
                            { label: "Canton", value: "canton" },
                            { label: "Zurich", value: "zurich" },
                            { label: "Geneva", value: "geneva" },
                        ]}
                        onValueChange={(value) => console.log(value)}
                    />


                    <div className="md:col-span-2">
                        <label htmlFor="" className="text-[#151513]  text-[18px] font-normal leading-[26px] mb-2 block">Bio / description</label>
                        <textarea

                            className="w-full min-h-[100px] rounded-lg border border-[#E6E6E6] bg-white p-4 text-[#070707] text-sm font-normal leading-[22.4px] tracking-[0.07px] outline-none focus:border-black"
                            placeholder="Description"

                        />
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <Button className="rounded-lg bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] p-6 cursor-pointer">
                        Save Change
                    </Button>
                </div>
            </div>
        </div>
    );
}