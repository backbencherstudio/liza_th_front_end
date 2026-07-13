"use client";

import React, { useState } from "react";
import DataTable, { Column } from "@/components/reusable/DataTable";
import TableToolBar from "@/components/reusable/TableToolBar";
import { Pencil, Trash2, CheckCircle2 } from "lucide-react";
import ActionMenu, { MenuAction } from "@/components/reusable/ActionMenu";
import CustomModal from "@/components/reusable/CustomModal";
import CreateDiscountForm from "./CreateDiscountForm";
import { mapDiscountToEditablePlan } from "./Discount.types";

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
  const [selectedDiscount, setSelectedDiscount] = useState<DiscountData | null>(null);
  const [editOpen, setEditOpen] = useState(false);

  const openEdit = (discount: DiscountData) => {
    setSelectedDiscount(discount);
    setEditOpen(true);
  };

  const handleDelete = (id: string) => {
    console.log("Deleting discount:", id);
    // Add delete logic here
  };

  const handleActivate = (id: string) => {
    console.log("Activating discount:", id);
    // Add activate logic here
  };

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
            className={`inline-flex items-center px-2.5 py-1 rounded border text-xs font-medium ${isActive
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
      cell: (row) => {
        const rowActions: MenuAction[] = [
          {
            label: "Active",
            icon: CheckCircle2,
            onClick: () => handleActivate(row.id),
          },
          {
            label: "Edit",
            icon: Pencil,
            onClick: () => openEdit(row),
          },
          {
            label: "Delete",
            icon: Trash2,
            onClick: () => handleDelete(row.id),

          },
        ];

        return <ActionMenu actions={rowActions} />;
      },
    },
  ];

  const filteredData = mockDiscounts.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase())
  );

  const editablePlan = selectedDiscount
    ? mapDiscountToEditablePlan(selectedDiscount)
    : undefined;

  return (
    <div className="mt-6 rounded-2xl border border-[#EDEDED] p-4 sm:p-6 bg-white">
      <TableToolBar
        searchPlaceholder="Search by discount name or code..."
        onSearchChange={setSearch}
      >
        <select className="sf-select">
          <option>All Discounts</option>
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

      {/* Edit Discount Modal */}
      <CustomModal
        open={editOpen}
        onOpenChange={setEditOpen}
        title="Edit Discount"
        size="lg"
      >
        {editablePlan && (
          <CreateDiscountForm
            key={selectedDiscount?.id}
            plan={editablePlan}
            onSuccess={() => {
              setEditOpen(false);
              setSelectedDiscount(null);
              // You can refresh data here if needed
            }}
          />
        )}
      </CustomModal>
    </div>
  );
}