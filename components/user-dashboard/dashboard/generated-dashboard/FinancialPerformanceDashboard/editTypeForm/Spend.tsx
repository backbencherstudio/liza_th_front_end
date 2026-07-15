"use client";

import React from "react";
import EditFormTable, { ColumnDef, RowData } from "../../EditFormTable";

const COLUMNS: ColumnDef[] = [
    { key: "vendor", label: "Vendor" },
    { key: "category", label: "Category" },
    { key: "amount", label: "Amount ($)", isAmount: true },
];

const INITIAL_ROWS: RowData[] = [
    { id: "1", vendor: "AWS Cloud Service", category: "Infrastructure", amount: 80750 },
    { id: "2", vendor: "Salesforce", category: "CRM", amount: 114500 },
    { id: "3", vendor: "Staples", category: "Office Supplies", amount: 8300 },
    { id: "4", vendor: "Office Solutions", category: "Facilities", amount: 612737 },
    { id: "5", vendor: "Other", category: "Miscellaneous", amount: 42415 },
];

interface SpendFormProps {
    onCancel: () => void;
    onUpdate?: (rows: RowData[]) => void;
}

export default function SpendForm({ onCancel, onUpdate }: SpendFormProps) {
    return (
        <EditFormTable
            title="Total Spend"
            totalLabel="Total Spend"
            columns={COLUMNS}
            initialRows={INITIAL_ROWS}
            onCancel={onCancel}
            onUpdate={onUpdate}
        />
    );
}
