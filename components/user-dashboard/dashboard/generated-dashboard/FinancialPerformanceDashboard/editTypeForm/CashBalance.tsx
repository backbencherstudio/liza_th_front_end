"use client";

import React from "react";
import EditFormTable, { ColumnDef, RowData } from "../../EditFormTable";

const COLUMNS: ColumnDef[] = [
    { key: "account", label: "Account" },
    { key: "type", label: "Type" },
    { key: "balance", label: "Balance ($)", isAmount: true },
];

const INITIAL_ROWS: RowData[] = [
    { id: "1", account: "Operating Account", type: "Checking", balance: 1250000 },
    { id: "2", account: "Reserve Fund", type: "Savings", balance: 850000 },
    { id: "3", account: "Payroll Account", type: "Checking", balance: 420000 },
    { id: "4", account: "Investment Account", type: "Money Market", balance: 680000 },
];

interface CashBalanceFormProps {
    onCancel: () => void;
    onUpdate?: (rows: RowData[]) => void;
}

export default function CashBalanceForm({ onCancel, onUpdate }: CashBalanceFormProps) {
    return (
        <EditFormTable
            title="Cash Balance"
            totalLabel="Total Cash Balance"
            columns={COLUMNS}
            initialRows={INITIAL_ROWS}
            onCancel={onCancel}
            onUpdate={onUpdate}
        />
    );
}
