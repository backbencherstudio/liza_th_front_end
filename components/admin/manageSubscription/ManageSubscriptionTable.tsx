"use client";

import React, { useState } from "react";
import { Eye, Pencil } from "lucide-react";
import DataTable, { Column } from "@/components/reusable/DataTable";
import TableToolBar from "@/components/reusable/TableToolBar";
import ActionMenu, { MenuAction } from "@/components/reusable/ActionMenu";
import CustomModal from "@/components/reusable/CustomModal";
import { mapSubscriptionToEditablePlan, RecentSubscription } from "@/components/super-admin/manage-subscription/subscription.types";
import PlanDetails from "@/components/super-admin/manage-subscription/PlanDetails";
import SubscriptionForm from "@/components/super-admin/manage-subscription/CreatePlan";


const mockSubscriptions: RecentSubscription[] = [
    { id: "1", name: "John Doe", role: "Admin", plan: "Monthly", amount: "$299/mo", joinDate: "1/15/2026", endDate: "1/25/2026", status: "Active" },
    { id: "2", name: "Jane Smith", role: "User", plan: "Monthly", amount: "$299/mo", joinDate: "2/20/2026", endDate: "2/20/2026", status: "Active" },
    { id: "3", name: "Bob Johnson", role: "Moderator", plan: "Yearly", amount: "$299/mo", joinDate: "3/10/2026", endDate: "3/10/2026", status: "Active" },
    { id: "4", name: "Alice Williams", role: "Admin", plan: "Yearly", amount: "$299/mo", joinDate: "1/5/2026", endDate: "1/5/2026", status: "Expired" },
    { id: "5", name: "Charlie Brown", role: "User", plan: "Yearly", amount: "$299/mo", joinDate: "4/1/2026", endDate: "1/5/2026", status: "Active" },
];

export default function ManageSubscriptionTable() {
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [viewOpen, setViewOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedSubscription, setSelectedSubscription] =
        useState<RecentSubscription | null>(null);

    const openView = (subscription: RecentSubscription) => {
        setSelectedSubscription(subscription);
        setViewOpen(true);
    };

    // const openEdit = (subscription: RecentSubscription) => {
    //     setSelectedSubscription(subscription);
    //     setEditOpen(true);
    // };

    const getRowActions = (row: RecentSubscription): MenuAction[] => [
        {
            label: "View Details",
            icon: Eye,
            onClick: () => openView(row),
        },
        // {
        //     label: "Edit Plan",
        //     icon: Pencil,
        //     onClick: () => openEdit(row),
        // },
    ];

    const columns: Column<RecentSubscription>[] = [
        { header: "Users Name", accessor: "name" },
        { header: "Role", accessor: "role" },
        { header: "Plan", accessor: "plan" },
        { header: "Amount", accessor: "amount" },
        { header: "Join Date", accessor: "joinDate" },
        { header: "End Date", accessor: "endDate" },
        {
            header: "Status",
            cell: (row) => {
                let statusStyles = "bg-[#EBF7EE] text-[#1E854A] border-[#D1EAD6]";
                let displayLabel = row.status;

                if (row.status === "Expired") {
                    statusStyles = "bg-[#F3F4F6] text-[#5E626E] border-[#DDE1E5]";
                } else if (row.status === "Suspended") {
                    statusStyles = "bg-[#FDF2F2] text-[#E02424] border-[#FBD5D5]";
                }

                return (
                    <span
                        className={`inline-flex items-center rounded border px-2.5 py-1 text-xs font-medium ${statusStyles}`}
                    >
                        {displayLabel}
                    </span>
                );
            },
        },
        {
            header: "Actions",
            cell: (row) => <ActionMenu actions={getRowActions(row)} />,
        },
    ];

    const filteredData = mockSubscriptions.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.role.toLowerCase().includes(search.toLowerCase()) ||
            user.plan.toLowerCase().includes(search.toLowerCase())
    );

    const editablePlan = selectedSubscription
        ? mapSubscriptionToEditablePlan(selectedSubscription)
        : undefined;

    return (
        <>
            <div className="mt-6 rounded-2xl border border-[#EDEDED] bg-white p-4 sm:p-6">
                <TableToolBar
                    searchPlaceholder="Search by name or email..."
                    onSearchChange={setSearch}
                >
                    <select className="sf-select">
                        <option>All Role</option>
                    </select>
                    <select className="sf-select">
                        <option>All Subscriptions</option>
                    </select>
                    <select className="sf-select">
                        <option>All Status</option>
                    </select>
                </TableToolBar>

                <div className="mt-8">
                    <DataTable
                        columns={columns}
                        data={filteredData}
                        idKey="id"
                        selectedId={selectedId}
                        onSelectionChange={setSelectedId}
                        pageSize={10}
                    />
                </div>
            </div>

            <CustomModal
                open={viewOpen}
                onOpenChange={setViewOpen}
                showCloseButton={false}
                size="lg"
            >
                {selectedSubscription && (
                    <PlanDetails
                        subscription={selectedSubscription}
                        onClose={() => setViewOpen(false)}
                    />
                )}
            </CustomModal>

            {/* <CustomModal
                open={editOpen}
                onOpenChange={setEditOpen}
                title="Edit Subscription Plan"
                size="lg"
            >
                {editablePlan && (
                    <SubscriptionForm
                        key={selectedSubscription?.id}
                        plan={editablePlan}
                        onSuccess={() => setEditOpen(false)}
                    />
                )}
            </CustomModal> */}
        </>
    );
}
