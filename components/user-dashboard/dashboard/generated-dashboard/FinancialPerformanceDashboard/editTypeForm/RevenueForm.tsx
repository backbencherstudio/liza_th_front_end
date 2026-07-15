"use client";

import React from "react";
import EditFormTable, { ColumnDef, RowData } from "../../EditFormTable";

const COLUMNS: ColumnDef[] = [
    { key: "source", label: "Revenue Source" },
    { key: "category", label: "Category" },
    { key: "amount", label: "Amount ($)", isAmount: true },
];

const INITIAL_ROWS: RowData[] = [
    { id: "1", source: "Product A", category: "Software License", amount: 113457 },
    { id: "2", source: "Product B", category: "SaaS Subscription", amount: 134457 },
    { id: "3", source: "Professional Services", category: "Consulting", amount: 133457 },
    { id: "4", source: "Other Income", category: "Miscellaneous", amount: 133457 },
];

interface RevenueFormProps {
    onCancel: () => void;
    onUpdate?: (rows: RowData[]) => void;
}

export default function RevenueForm({ onCancel, onUpdate }: RevenueFormProps) {
    return (
        <EditFormTable
            title="Total Revenue"
            totalLabel="Total Revenue"
            columns={COLUMNS}
            initialRows={INITIAL_ROWS}
            onCancel={onCancel}
            onUpdate={onUpdate}
        />
    );
}
