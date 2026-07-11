"use client";

import React, { useState } from "react";
import DataTable, { Column } from "@/components/reusable/DataTable"; 
import TableToolBar from "@/components/reusable/TableToolBar";    
import { MoreVertical, CheckCircle2, UserX, Eye } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface RecentSubscriptionsData {
  id: string;
  name: string;
  role: "Admin" | "User" | "Moderator";
  plan: string;
  amount: string;
  joinDate: string;
  endDate: string;
  status: "Active" | "Expired" | "Suspended";
}

const mockUsers: RecentSubscriptionsData[] = [
  { id: "1", name: "John Doe", role: "Admin", plan: "Pro Plan (Monthly)", amount: "$299/mo", joinDate: "1/15/2026", endDate: "1/25/2026", status: "Active" },
  { id: "2", name: "Jane Smith", role: "User", plan: "Premium (Monthly)", amount: "$299/mo", joinDate: "2/20/2026", endDate: "2/20/2026", status: "Active" },
  { id: "3", name: "Bob Johnson", role: "Moderator", plan: "Pro Plan (Yearly)", amount: "$299/mo", joinDate: "3/10/2026", endDate: "3/10/2026", status: "Active" },
  { id: "4", name: "Alice Williams", role: "Admin", plan: "Pro Plan (Yearly)", amount: "$299/mo", joinDate: "1/5/2026", endDate: "1/5/2026", status: "Expired" },
  { id: "5", name: "Charlie Brown", role: "User", plan: "Premium (Yearly)", amount: "$299/mo", joinDate: "4/1/2026", endDate: "1/5/2026", status: "Active" },
];

export default function RecentSubscriptionsTable() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const columns: Column<RecentSubscriptionsData>[] = [
    { header: "Users Name", accessor: "name" },
    { header: "Role", accessor: "role" },
    { header: "Plan", accessor: "plan" },
    { header: "Amount", accessor: "amount" },
    { header: "Join Date", accessor: "joinDate" },
    { header: "End Date", accessor: "endDate" },
    {
      header: "Status",
      cell: (row) => {
        let statusStyles = "bg-[#EBF7EE] text-[#1E854A] border-[#D1EAD6]"; // Active
        let displayLabel = row.status;

        if (row.status === "Expired") {
          statusStyles = "bg-[#F3F4F6] text-[#5E626E] border-[#DDE1E5]";
          displayLabel = "Expired"; // Matches your UI's spelling exactly
        } else if (row.status === "Suspended") {
          statusStyles = "bg-[#FDF2F2] text-[#E02424] border-[#FBD5D5]";
        }

        return (
          <span className={`inline-flex items-center px-2.5 py-1 rounded border text-xs font-medium ${statusStyles}`}>
            {displayLabel}
          </span>
        );
      },
    },
    {
      header: "Actions",
      cell: () => (
        <Popover>
          <PopoverTrigger
            className="rounded-full p-1 text-gray-500 transition-colors hover:bg-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <MoreVertical className="h-4 w-4" />
          </PopoverTrigger>
          <PopoverContent align="end" className="w-40 p-1 bg-white border border-gray-200 rounded-xl shadow-lg">
            <button className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-gray-400" /> Active
            </button>
            <button className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
              <UserX className="w-4 h-4 text-gray-400" /> Suspend
            </button>
            <button className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg border-t border-gray-100 mt-1">
              <Eye className="w-4 h-4 text-gray-400" /> View Details
            </button>
          </PopoverContent>
        </Popover>
      ),
    },
  ];

  const filteredData = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-6 rounded-2xl border border-[#EDEDED] p-4 sm:p-6 bg-white">
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
  );
}