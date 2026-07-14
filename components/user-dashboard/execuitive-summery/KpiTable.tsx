"use client";

import { useState } from "react";
import DataTable, { Column } from "@/components/reusable/DataTable";

interface UserData {
    id: string;
    Description: string;
    spend: string;
    plan: string;
    variance: string;
    status: string;

}

const mockUsers: UserData[] = [
    { id: "1", Description: "Payroll", spend: "$1,145,457", plan: "$1,145,457", variance: "35%", status: "Good" },
    { id: "2", Description: "Cost of Goods", spend: "$1,145,457", plan: "$1,145,457", variance: "35%", status: "Good" },
    { id: "3", Description: "Marketing", spend: "$1,145,457", plan: "$1,145,457", variance: "35%", status: "Good" },
    { id: "4", Description: "Software", spend: "$1,145,457", plan: "$1,145,457", variance: "35%", status: "Good" },
    { id: "4", Description: "Other", spend: "$1,145,457", plan: "$1,145,457", variance: "35%", status: "Good" },

];

export default function KpiTable() {
    const [search, setSearch] = useState("");
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const [viewOpen, setViewOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedUser, setSelectedUser] =
        useState<UserData | null>(null);

    const columns: Column<UserData>[] = [
        {
            header: "Metric",
            accessor: "Description",
        },
        {
            header: "Actual",
            accessor: "spend",
        },
        {
            header: "Plan",
            accessor: "plan",
        },
        {
            header: "Variance",
            accessor: "variance",
        },
        {
            header: "Status",
            accessor: "status",
        },


    ];

    const filteredData = mockUsers.filter(
        (user) =>
            user.Description.toLowerCase().includes(search.toLowerCase()) ||
            user.spend.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className=" rounded-2xl border border-[#EDEDED] p-4 sm:p-6">
            <p className="text-[#1C1C1E] text-[20px] font-medium leading-[26px] tracking-[-0.4px]">KPIs</p>

            <div className="mt-8">
                <DataTable
                    columns={columns}
                    data={mockUsers}
                    idKey="id"
                    selectedId={selectedId}
                    onSelectionChange={setSelectedId}
                    pageSize={10}
                />
            </div>




        </div>
    );
}