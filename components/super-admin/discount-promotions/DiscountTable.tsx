"use client";

import React, { useState } from "react";
import DataTable, { Column } from "@/components/reusable/DataTable"; 
import TableToolBar from "@/components/reusable/TableToolBar";    
import { MoreVertical, CheckCircle2, Pencil, Trash2, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface DiscountData {
  id: string;
  name: string;
  percentage: string;
  code: string;
  used: number;
  startDate: string;
  endDate: string;
  status: "Active" | "Expired";
}

const mockDiscounts: DiscountData[] = [
  { id: "1", name: "Subscription Discount", percentage: "5%", code: "261548f", used: 3, startDate: "1/15/2026", endDate: "1/25/2026", status: "Active" },
  { id: "2", name: "Winter Discount", percentage: "5%", code: "261548f", used: 5, startDate: "2/20/2026", endDate: "2/20/2026", status: "Active" },
  { id: "3", name: "Summer Discount", percentage: "5%", code: "548f56", used: 23, startDate: "3/10/2026", endDate: "3/10/2026", status: "Active" },
  { id: "4", name: "WELCOME50", percentage: "10%", code: "261548f", used: 8, startDate: "1/5/2026", endDate: "1/5/2026", status: "Expired" },
];

export default function DiscountTable() {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const columns: Column<DiscountData>[] = [
    { header: "Discount", accessor: "name" },
    { header: "Percentage", accessor: "percentage" },
    { header: "Code", accessor: "code" },
    { header: "Used", accessor: "used" },
    { header: "Start Date", accessor: "startDate" },
    { header: "End Date", accessor: "endDate" },
    {
      header: "Status",
      cell: (row) => {
        const isActive = row.status === "Active";
        return (
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded border text-xs font-medium ${
              isActive
                ? "bg-[#EBF7EE] text-[#1E854A] border-[#D1EAD6]"
                : "bg-[#F3F4F6] text-[#5E626E] border-[#DDE1E5]"
            }`}
          >
            {row.status}
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
          <PopoverContent align="end" className="w-44 p-1 bg-white border border-gray-200 rounded-xl shadow-lg relative">
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100 mb-1">
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Options</span>
              <X className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:text-gray-600" />
            </div>
            <button className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-[#070707] hover:bg-gray-50 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-[#4A4C56]" /> Active
            </button>
            <button className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-[#070707] hover:bg-gray-50 rounded-lg">
              <Pencil className="w-4 h-4 text-[#4A4C56]" /> Edit
            </button>
            <button className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-[#070707] hover:bg-gray-50 rounded-lg border-t border-gray-100 mt-1">
              <Trash2 className="w-4 h-4 text-[#4A4C56]" /> Delete
            </button>
          </PopoverContent>
        </Popover>
      ),
    },
  ];

  const filteredData = mockDiscounts.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-6 rounded-2xl border border-[#EDEDED] p-4 sm:p-6 bg-white">
      <TableToolBar
        searchPlaceholder="Search by name or email..."
        onSearchChange={setSearch}
      >
        <select className="sf-select">
          <option>All Subscriptions</option>
        </select>
        <select className="sf-select">
          <option>All Status</option>
          <option>Active</option>
          <option>Expired</option>
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