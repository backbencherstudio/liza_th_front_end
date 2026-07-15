"use client";

import React from "react";
import EditFormTable, { ColumnDef, RowData } from "../../EditFormTable";

const COLUMNS: ColumnDef[] = [
    { key: "department", label: "Department" },
    { key: "category", label: "Category" },
    { key: "budgeted", label: "Budgeted ($)", isAmount: true },
];

const INITIAL_ROWS: RowData[] = [
    { id: "1", department: "Engineering", category: "Salaries", budgeted: 420000 },
    { id: "2", department: "Marketing", category: "Campaigns", budgeted: 185000 },
    { id: "3", department: "Operations", category: "Infrastructure", budgeted: 230000 },
    { id: "4", department: "Sales", category: "Commissions", budgeted: 165000 },
];

interface BudgetedSpendFormProps {
    onCancel: () => void;
    onUpdate?: (rows: RowData[]) => void;
}

export default function BudgetedSpendForm({ onCancel, onUpdate }: BudgetedSpendFormProps) {
    return (
        <EditFormTable
            title="Budgeted Spend"
            totalLabel="Total Budgeted"
            columns={COLUMNS}
            initialRows={INITIAL_ROWS}
            onCancel={onCancel}
            onUpdate={onUpdate}
        />
    );
}
