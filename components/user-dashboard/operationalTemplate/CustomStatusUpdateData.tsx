"use client";

import { useState } from "react";
import { Edit2 } from "lucide-react";
import CustomModal from "@/components/reusable/CustomModal";
import UpdateModal from "./UpdateModal";

export interface StatusItem {
    id: string;
    category: string;
    description: string;
    status: "On Track" | "Watch" | "Datadog";
    percentage?: number;
    color: string;
}

const initialData: StatusItem[] = [
    {
        id: "1",
        category: "Membership & Sales",
        description: "Bulk membership loads continued; regional updates emphasized momentum, target dashboards, revised workbook, and customer-owned applications.",
        status: "On Track",
        percentage: 60,
        color: "#22C55E",
    },
    {
        id: "2",
        category: "Supplier / Services",
        description: "Sidra launched; RemeticHealth agreement completed; Amgen target start referenced as 8/1/26; ARDx opportunity progressing.",
        status: "On Track",
        color: "#3B82F6",
    },
    {
        id: "3",
        category: "Finance / Revenue",
        description: "May entries and OPEX reclass completed; service invoicing process cluttered",
        status: "On Track",
        percentage: 60,
        color: "#F59E0B",
    },
    {
        id: "4",
        category: "Technology / Reporting",
        description: "Website target go-live, SFDC, EDW/Snowflake, standalone email, El vendor setup. Starting P122",
        status: "On Track",
        color: "#3B82F6",
    },
    {
        id: "5",
        category: "Compliance / Governance",
        description: "Sharebacks Sunshine, attestations, SOP review. COI, application integrity, and LOC mechanics remain active controls.",
        status: "Watch",
        color: "#EF4444",
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
                    className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition ${selectedId
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                >
                    Edit Data
                    <Edit2 size={16} />
                </button>
            </div>

            {/* Status Items */}
            <div className="space-y-3">
                {data.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        style={{ borderLeftColor: item.color }}
                        className={`flex gap-4 rounded-xl border border-gray-100 border-l-[8px] bg-white p-5 cursor-pointer transition-all ${selectedId === item.id ? "ring-1 ring-gray-300" : ""
                            }`}
                    >

                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{item.category}</h3>
                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{item.description}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                            <div className={`px-4 py-1.5 text-xs font-semibold rounded-full ${item.status === "On Track" ? "bg-emerald-100 text-emerald-700" :
                                item.status === "Watch" ? "bg-amber-100 text-amber-700" : "bg-purple-100 text-purple-700"
                                }`}>
                                {item.status}
                            </div>
                            {item.percentage && (
                                <div className="text-sm font-semibold text-gray-700">{item.percentage}%</div>
                            )}
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