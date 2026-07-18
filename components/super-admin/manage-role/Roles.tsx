"use client"
import SuperAdminSetting from "@/components/icons/SettingsIcon";
import { EditIcon } from "lucide-react";
import { useState } from "react";
import EditRoleModal from "./EditRoleModal";
import DashboardPageTitle from "@/components/reusable/DashboardPageTitle";

export default function Roles() {

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<"add" | "edit">("edit");
    const [editingData, setEditingData] = useState<any>(null);

    const openAddModal = () => {
        setModalMode("add");
        setEditingData(null);
        setIsEditModalOpen(true);
    };

    const openEditModal = () => {
        setModalMode("edit");
        setEditingData({
            roleName: "Admin (Customer Service)",
            permissions: ["manageUsers", "manageSubscriptions", "manageDiscounts", "manageAI"]
        });
        setIsEditModalOpen(true);
    };

    const handleSaveRole = async (data: { roleName: string; permissions: string[] }) => {
        console.log(`${modalMode === "add" ? "Creating" : "Updating"} Role:`, data);

        const res = await fetch("/api/roles", {
            method: modalMode === "add" ? "POST" : "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            alert(modalMode === "add" ? "Role Created Successfully!" : "Role Updated Successfully!");
            setIsEditModalOpen(false);
        }
    };

    return (
        <div className="flex flex-col items-start gap-6 rounded-xl  bg-white ">
            {/* Header */}
            {/* <div>
                <h2 className="text-[#151513] font-[Archivo] text-[32px] font-semibold leading-[46px]">
                    Roles & Permissions
                </h2>

                <p className="mt-2 text-[#3D3D3C] font-[Archivo] text-[16px] font-normal leading-[22px]">
                    Define what each role can access and modify
                </p>
            </div> */}

            <div className="flex justify-between w-full"><DashboardPageTitle
                title="Roles & Permissions"
                description="Define what each role can access and modify"
            />

                {/* <div className="flex items-center justify-end">
                    <button onClick={openAddModal} className="rounded-[8px] bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] py-3.5 px-6 text-white cursor-pointer font-semibold text-[14px] sm:text-[15px] xl:text-base hover:bg-accent">
                        Add New Admin
                    </button>
                </div> */}
            </div>

            {/* Role Card */}
            <div className="w-full rounded-xl border bg-[#FFFFFF] p-4">
                <div className="flex items-center justify-between ">
                    <p className="text-[#C10007] text-sm font-medium leading-5 bg-[#FFE2E2] px-3 py-1 rounded-full">
                        Admin (Customer Service)
                    </p>

                    <div className="flex items-center gap-2 justify-center my-auto">
                        <button onClick={openEditModal} className="flex items-center justify-center gap-[10px] rounded-lg border px-[10px] py-2 text-sm font-medium  text-[#6A7282]">
                            <SuperAdminSetting.ManageRoleEdit />
                        </button>
                        <button className="flex items-center justify-center gap-[10px] rounded-lg border px-[10px] py-2 text-sm font-medium ">
                            <SuperAdminSetting.ManageRoleDeletIcon />
                        </button>
                    </div>
                </div>

                <div className=" border-[#ECEFF3]" />

                <div className="flex flex-wrap gap-4 pt-4">
                    <p className="text-[#4A5565] text-xs font-normal leading-4t-medium bg-[#F9FAFB] rounded-full px-2.5 py-2">
                        Manage Subscriptions
                    </p>

                    <p className="text-[#4A5565] text-xs font-normal leading-4 bg-[#F9FAFB] rounded-full px-2.5 py-2">
                        Manage Discount & Referral
                    </p>

                    <p className="text-[#4A5565] text-xs font-normal leading-4 bg-[#F9FAFB] rounded-full px-2.5 py-2">
                        Manage Account
                    </p>
                </div>
            </div>
            <EditRoleModal
                open={isEditModalOpen}
                onOpenChange={setIsEditModalOpen}
                mode={modalMode}
                initialData={editingData}
                onSave={handleSaveRole}
            />
        </div>
    );
}

