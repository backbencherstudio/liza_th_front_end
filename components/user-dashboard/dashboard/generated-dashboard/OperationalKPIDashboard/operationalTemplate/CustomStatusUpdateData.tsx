"use client";

import { useState } from "react";
import { Edit2, SquarePen } from "lucide-react";
import CustomModal from "@/components/reusable/CustomModal";
import UpdateModal from "./UpdateModal";

export interface StatusItem {
    id: string;
    category: string;
    description: string;
    status: "On Track" | "Watch" | "Complete" | "Not Started" | "On Hold";
    percentage?: number;
    color: string;
}

const STATUS_STYLES: Record<StatusItem["status"], string> = {
    "On Track": "bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] text-white",
    Watch: "bg-amber-100 text-amber-700",
    Complete: "bg-emerald-100 text-emerald-700",
    "Not Started": "bg-slate-100 text-slate-700",
    "On Hold": "bg-rose-100 text-rose-700",
};

const initialData: StatusItem[] = [
    {
        id: "1",
        category: "Membership & Sales",
        description: "Bulk membership loads continued; regional updates emphasized momentum, target dashboards, revised workbook, and customer-owned applications.",
        status: "On Track",
        percentage: 60,
        color: "#8CDAAA",
    },
    {
        id: "2",
        category: "Supplier / Services",
        description: "Sidra launched; RemeticHealth agreement completed; Amgen target start referenced as 8/1/26; ARDx opportunity progressing.",
        status: "On Track",
        color: "#8C9EFD",
    },
    {
        id: "3",
        category: "Finance / Revenue",
        description: "May entries and OPEX reclass completed; service invoicing process cluttered",
        status: "On Track",
        percentage: 60,
        color: "#FFBE70",
    },
    {
        id: "4",
        category: "Technology / Reporting",
        description: "Website target go-live, SFDC, EDW/Snowflake, standalone email, El vendor setup. Starting P122",
        status: "On Track",
        color: "#75B6F3",
    },
    {
        id: "5",
        category: "Compliance / Governance",
        description: "Sharebacks Sunshine, attestations, SOP review. COI, application integrity, and LOC mechanics remain active controls.",
        status: "Watch",
        color: "#FF9187",
    },
];

export default function CustomStatusUpdate() {
    const [data, setData] = useState<StatusItem[]>(initialData);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<StatusItem | null>(null);

    const selectedItem = data.find(item => item.id === selectedId);

    const openEditModal = () => {
        if (!selectedItem) return;
        setEditingItem({ ...selectedItem });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
    };

    const handleChange = (field: keyof StatusItem, value: any) => {
        if (editingItem) {
            setEditingItem(prev => prev ? { ...prev, [field]: value } : null);
        }
    };

    const saveChanges = () => {
        if (!editingItem) return;
        setData(prev => prev.map(item =>
            item.id === editingItem.id ? editingItem : item
        ));
        closeModal();
    };


    return (
        <div className="bg-[#F0F4FB] border border-gray-200 rounded-2xl p-6 shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                    Custom Status Update (User Defined)
                </h2>
                <button
                    onClick={openEditModal}
                    disabled={!selectedId}
                    className={`flex items-center gap-2 text-sm font-medium border border-[#142E80] bg-white px-4 py-2 rounded-lg transition ${selectedId
                        ? " text-[#142E80] border border-[#142E80]"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Edit Data
                    <SquarePen className="text-[]" />
                </button>
            </div>

            {/* Status Items */}
            {/* Status Items */}
            <div className="space-y-3">
                {data.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        style={{ borderLeftColor: item.color }}
                        className={`flex rounded-xl border border-gray-100 border-l-[6px] bg-white p-5 cursor-pointer transition-all hover:shadow-sm ${selectedId === item.id ? "ring-2 ring-blue-200 bg-blue-50" : ""
                            }`}
                    >
                        <div className="flex-1 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                            {/* Left */}
                            <div className="flex-1 flex flex-col lg:flex-row gap-3 lg:gap-6">
                                <h3 className="min-w-[220px] text-[15px] font-semibold text-gray-900">
                                    {item.category}
                                </h3>

                                <p className="flex-1 text-sm leading-relaxed text-gray-600">
                                    {item.description}
                                </p>
                            </div>

                            {/* Right */}
                            <div className="flex shrink-0 items-center gap-4 w-full lg:w-[200px]">
                                <div
                                    className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap ${STATUS_STYLES[item.status]}`}
                                >
                                    {item.status}
                                </div>

                                {item.percentage && (
                                    <div className="min-w-[50px] text-right text-sm font-semibold text-gray-700">
                                        {item.percentage}%
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <CustomModal
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
                title="Edit KPI Custom Status"
                size="md"
            >
                <UpdateModal
                    editingItem={editingItem}
                    onChange={handleChange}
                    onSave={saveChanges}
                />
            </CustomModal>
        </div>
    );
}