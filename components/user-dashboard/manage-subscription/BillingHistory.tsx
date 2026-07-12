"use client";

import { useState } from "react";
import DataTable, { Column } from "@/components/reusable/DataTable";
import TableToolBar from "@/components/reusable/TableToolBar";

import ActionMenu, { MenuAction } from "@/components/reusable/ActionMenu";
import CustomModal from "@/components/reusable/CustomModal";

import ActionIcons from "@/components/icons/ActionIcons";
import UserDetails from "@/components/super-admin/manage-users/UserDetails";

interface UserData {
    id: string;
    name: string;
    email: string;
    Amount: string;
    date: string;
    plan: string;
    joinDate: string;
    status: "Paid" | "Expired";
}

const mockUsers: UserData[] = [
    { id: "1", name: "John Doe", email: "iva838@outlook.com", Amount: "$299/mo", date: "1/15/2026", plan: "Monthly", joinDate: "1/15/2024", status: "Paid" },
    { id: "2", name: "Jane Smith", email: "b.b.lawlor@outlook.com", Amount: "$299/mo", date: "1/15/2026", plan: "Monthly", joinDate: "2/20/2024", status: "Paid" },
    { id: "3", name: "Bob Johnson", email: "f.j.swann@aol.com", Amount: "$299/mo", date: "1/15/2026", plan: "Yearly", joinDate: "3/10/2024", status: "Expired" },

];

export default function BillingHistory() {
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const [viewOpen, setViewOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedUser, setSelectedUser] =
        useState<UserData | null>(null);

    const columns: Column<UserData>[] = [
        {
            header: "Description",
            accessor: "name",
        },
        {
            header: "Plan",
            accessor: "plan",
        },
        {
            header: "Amount",
            accessor: "Amount",
        },
        {
            header: "Payment Date",
            accessor: "date",
        },
        {
            header: "Status",
            cell: (row) => {
                const isPaid = row.status === "Paid";

                return (
                    <span
                        className={`inline-flex items-center rounded px-2.5 py-1 text-xs font-medium ${isPaid
                            ? "bg-[#E6F4EA] text-[#137333]"
                            : "border border-[#8DA2B8] text-[#8DA2B8]"
                            }`}
                    >
                        {row.status}
                    </span>
                );
            },
        },
    ];

    const filteredData = mockUsers.filter(
        (user) =>
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="mt-6 rounded-2xl border border-[#EDEDED] p-4 sm:p-6">


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
    );
}