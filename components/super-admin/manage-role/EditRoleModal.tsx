"use client";

import CustomModal from "@/components/reusable/CustomModal";
import { FormField } from "@/components/reusable/FormInput";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const PERMISSIONS = [
    { id: "viewDashboard", label: "View Dashboard" },
    { id: "manageUsers", label: "Manage Users" },
    { id: "manageTemplates", label: "Manage Templates" },
    { id: "manageSubscriptions", label: "Manage Subscriptions" },
    { id: "manageDiscounts", label: "Manage Discounts" },
    { id: "manageAI", label: "Manage AI" },
    { id: "viewAnalytics", label: "View Analytics" },
    { id: "manageBilling", label: "Manage Billing" },
    { id: "manageSettings", label: "Manage Settings" },
    { id: "exportData", label: "Export Data" },
    { id: "apiAccess", label: "API Access" },
    { id: "deleteRecords", label: "Delete Records" },
];

interface EditRoleModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    mode: "add" | "edit";
    initialData?: {
        roleName: string;
        permissions: string[];
    };
    onSave: (data: {
        roleName: string;
        permissions: string[];
    }) => void;
}
export default function EditRoleModal({
    open,
    onOpenChange,
    mode,
    initialData,
    onSave,
}: EditRoleModalProps) {
    const [roleName, setRoleName] = useState(
        initialData?.roleName || ""
    );

    const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
        initialData?.permissions || []
    );

    const togglePermission = (id: string) => {
        setSelectedPermissions((prev) =>
            prev.includes(id)
                ? prev.filter((p) => p !== id)
                : [...prev, id]
        );
    };

    const handleSave = () => {
        onSave({
            roleName,
            permissions: selectedPermissions,
        });
    };


    return (
        <CustomModal
            open={open}
            onOpenChange={onOpenChange}
            title={mode === "edit" ? "Edit Role" : "Create New Role"}
            size="md"
        >

            <div className="space-y-4">
                {/* Role Name */}
                <FormField
                    label="Role Name"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                    placeholder="Enter role name"
                />

                {/* Permissions */}
                <div>
                    <h4 className="text-[14px] sm:text-[15px] xl:text-base text-[#364153] font-normal sm:leading-5 xl:leading-[22px] mb-3">Permissions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {PERMISSIONS.map((perm) => (
                            <label
                                key={perm.id}
                                className="flex items-center gap-3 bg-white border border-gray-100 hover:border-gray-200 rounded-xl p-4 cursor-pointer transition text-[13px] sm:text-sm xl:text-sm text-[rgba(10,10,10,0.5)] font-normal sm:leading-[18px] xl:leading-5"
                            >
                                <Checkbox
                                    checked={selectedPermissions.includes(perm.id)}
                                    onCheckedChange={() => togglePermission(perm.id)}
                                    className="
    border-2 border-[#D0D5DD]
    bg-white
    data-checked:border-[#2563EB]
    data-checked:bg-white
    data-checked:text-[#2563EB]
    focus-visible:ring-0
    focus-visible:ring-offset-0
  "
                                />
                                <span className="text-[#4A5565] font-medium">{perm.label}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                    <button
                        onClick={() => onOpenChange(false)}
                        className="flex-1 border border-[#2563EB] text-[#2563EB] font-medium py-3.5 rounded-xl hover:bg-gray-50 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex-1 rounded-[8px] bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] py-3.5 px-6 text-white cursor-pointer font-semibold text-[14px] sm:text-[15px] xl:text-base hover:bg-accent    "
                    >
                        Save
                    </button>
                </div>
            </div>
        </CustomModal>
    );
}