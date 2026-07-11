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
    initialData?: {
        roleName: string;
        permissions: string[];
    };
    onSave: (data: { roleName: string; permissions: string[] }) => void;
}

export default function EditRoleModal({
    open,
    onOpenChange,
    initialData,
    onSave,
}: EditRoleModalProps) {
    const [roleName, setRoleName] = useState(initialData?.roleName || "Super Admin");
    const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
        initialData?.permissions || ["manageUsers", "manageSubscriptions", "manageDiscounts", "manageAI", "manageBilling", "exportData", "deleteRecords"]
    );

    const togglePermission = (id: string) => {
        setSelectedPermissions((prev) =>
            prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
        );
    };

    const handleSave = () => {
        onSave({ roleName, permissions: selectedPermissions });

    };

    return (
        <CustomModal
            open={open}
            onOpenChange={onOpenChange}
            title="Edit Role"
            size="md"
        >

            <div className="space-y-8">
                {/* Role Name */}
                <FormField
                    label="Role Name"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                    placeholder="Enter role name"
                />

                {/* Permissions */}
                <div>
                    <h4 className="text-[#151513] font-medium text-lg mb-4">Permissions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {PERMISSIONS.map((perm) => (
                            <label
                                key={perm.id}
                                className="flex items-center gap-3 bg-white border border-gray-100 hover:border-gray-200 rounded-xl p-4 cursor-pointer transition"
                            >
                                <Checkbox
                                    checked={selectedPermissions.includes(perm.id)}
                                    onCheckedChange={() => togglePermission(perm.id)}
                                    className="
        border-2 border-[#D0D5DD] 
        bg-white 
        data-[state=checked]:border-[#2563EB] 
        data-[state=checked]:bg-white 
        data-[state=checked]:text-[#2563EB]
        focus:ring-0 focus:ring-offset-0
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
                        className="flex-1 border border-gray-300 text-gray-700 font-medium py-3.5 rounded-2xl hover:bg-gray-50 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex-1 bg-gradient-to-r from-[#182144] to-[#0F172A] text-white font-medium py-3.5 rounded-2xl hover:opacity-90 transition"
                    >
                        Save
                    </button>
                </div>
            </div>
        </CustomModal>
    );
}