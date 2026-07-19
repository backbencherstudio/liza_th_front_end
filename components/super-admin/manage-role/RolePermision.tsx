"use client"
import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Roles from './Roles';
import { useRouter, useSearchParams } from 'next/navigation';
import SecurityMFA from './security/SecurityMFA';
import Billing from './Billing';
import FileUploadSettings from './fileUploadRule/FileUploadRule';
import { MFASetupFlow } from './security/MFAsetupFlow';
import EditRoleModal from './EditRoleModal';
import DashboardPageTitle from '@/components/reusable/DashboardPageTitle';

export default function RolePermision() {

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

    const router = useRouter();
    const searchParams = useSearchParams();
    const triggerClass =
        "rounded-lg bg-white px-2.5 py-2 text-[#777980] transition-colors data-active:bg-[#2563EB] data-active:text-white data-active:hover:text-white";
    const activeTab = searchParams.get("tab") ?? "roles";
    return (
        <div>
            <div className='flex  flex-col sm:flex-row   justify-between pb-8'>
                <div className="flex justify-between w-full"><DashboardPageTitle
                    title="Manage Role"
                    description="Configure platform roles, security, billing, and file upload policies"
                />

                </div>
                <div className='w-full sm:max-w-[200px] sm:mt-0 mt-5'>
                    <button onClick={openAddModal} className="rounded-[8px] bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] py-3.5 px-6 text-white cursor-pointer font-semibold text-[14px] sm:text-[15px] xl:text-base hover:bg-accent w-full">
                        Add New Role
                    </button>
                </div>
            </div>
            <div>
                <Tabs className=" gap-6 md:gap-8"
                    value={activeTab}
                    onValueChange={(value) => {
                        const params = new URLSearchParams(searchParams.toString());
                        params.set("tab", value);
                        router.replace(`?${params.toString()}`);
                    }}
                >
                    <div className="rounded-[10px] bg-[#F5F5F5] h-[120px] md:h-17 ">
                        <div className="rounded-[10px] bg-[#F5F5F5] p-  ">
                            <div className="rounded-[10px] bg-[#F5F5F5] p-3">
                                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full gap-3 bg-transparent">
                                    <TabsTrigger className={`${triggerClass} h-9`} value="roles">
                                        Roles & Permissions
                                    </TabsTrigger>

                                    <TabsTrigger className={`${triggerClass} h-9`} value="permissions">
                                        Security & MFA
                                    </TabsTrigger>

                                    <TabsTrigger className={`${triggerClass} h-9`} value="security">
                                        Stripe Billing
                                    </TabsTrigger>

                                    <TabsTrigger className={`${triggerClass} h-9`} value="stripe">
                                        File Upload Rules
                                    </TabsTrigger>


                                </TabsList>
                            </div>
                        </div>
                    </div>

                    <TabsContent value="roles">
                        <Roles />
                    </TabsContent>

                    <TabsContent value="permissions">
                        <SecurityMFA />


                    </TabsContent>

                    <TabsContent value="security">
                        <Billing />
                    </TabsContent>

                    <TabsContent value="stripe">
                        <FileUploadSettings />
                    </TabsContent>

                </Tabs>
            </div>

            <EditRoleModal
                open={isEditModalOpen}
                onOpenChange={setIsEditModalOpen}
                mode={modalMode}
                initialData={editingData}
                onSave={handleSaveRole}
            />
        </div>
    )
}
