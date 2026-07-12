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
    status: "Active" | "Completed" | "Pending";
}

const mockUsers: UserData[] = [
    { id: "1", name: "John Doe", email: "iva838@outlook.com", Amount: "$299/mo", date: "1/15/2026", plan: "Upgraded to Pro", joinDate: "1/15/2024", status: "Completed" },
    { id: "2", name: "Jane Smith", email: "b.b.lawlor@outlook.com", Amount: "$299/mo", date: "1/15/2026", plan: "Payment Failed", joinDate: "2/20/2024", status: "Completed" },
    { id: "3", name: "Bob Johnson", email: "f.j.swann@aol.com", Amount: "$299/mo", date: "1/15/2026", plan: "Trial Started", joinDate: "3/10/2024", status: "Pending" },
    { id: "4", name: "Bob Johnson", email: "f.j.swann@aol.com", Amount: "$299/mo", date: "1/15/2026", plan: "Cancelled Plan", joinDate: "3/10/2024", status: "Active" },

];

export default function RecentCustomTable() {
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const [viewOpen, setViewOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedUser, setSelectedUser] =
        useState<UserData | null>(null);

    const columns: Column<UserData>[] = [
        {
            header: "Users Name",
            accessor: "name",
        },
        {
            header: "Activity",
            accessor: "plan",
        },
        {
            header: "Date",
            accessor: "Amount",
        },

        {
            header: "Status",
            cell: (row) => {
                const isPaid = row.status === "Active";

                return (
                    <span
                        className={`inline-flex items-center rounded px-2.5 py-1 text-xs font-medium ${row.status === "Active"
                            ? "bg-[#E6F4EA] text-[#137333]"
                            : row.status === "Completed"
                                ? "border border-[#2563EB] text-[#225AD6] text-sm font-medium leading-[14px] tracking-[-0.28px]"
                                : "bg-[#FFFAF0] text-[#FFAB04] border border-[#FFAB04]"
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
            <p className="text-[#1C1C1E] text-[20px] font-medium leading-[26px] tracking-[-0.4px]">Recent Customer Activities</p>

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