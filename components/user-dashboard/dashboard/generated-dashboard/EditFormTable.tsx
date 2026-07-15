"use client";

import CustomButton from "@/components/reusable/CustomButton";
import React, { useMemo, useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ColumnDef {
  key: string;
  label: string;
  /** which field holds the numeric value used for the running total */
  isAmount?: boolean;
}

export type RowData = Record<string, string | number> & { id: string };

interface EditFormTableProps {
  title: string;
  totalLabel: string;
  columns: ColumnDef[];
  initialRows: RowData[];
  onCancel: () => void;
  onUpdate?: (rows: RowData[]) => void;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const formatCurrency = (value: number) => `$${value.toLocaleString("en-US")}`;

// ─── Component ───────────────────────────────────────────────────────────────

export default function EditFormTable({
  title,
  totalLabel,
  columns,
  initialRows,
  onCancel,
  onUpdate,
}: EditFormTableProps) {
  const [rows, setRows] = useState<RowData[]>(initialRows);

  const amountKey = columns.find((c) => c.isAmount)?.key ?? "";

  const total = useMemo(
    () =>
      rows.reduce((sum, r) => {
        const val = Number(r[amountKey]);
        return sum + (Number.isFinite(val) ? val : 0);
      }, 0),
    [rows, amountKey]
  );

  const updateRow = (id: string, key: string, value: string) => {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              [key]:
                key === amountKey
                  ? Number(value.replace(/[^0-9.-]/g, "")) || 0
                  : value,
            }
          : row
      )
    );
  };

  return (
    <div className="flex w-full flex-col rounded-2xl bg-white">
      {/* Header */}
      <div className="text-[#101828] font-[Archivo] text-[24px] font-medium leading-[32px]">
        <h2>
          {title} ({formatCurrency(total)})
        </h2>
      </div>

      {/* Table */}
      <div className="max-h-[50vh] overflow-y-auto mt-4">
        <table className="w-full border-collapse text-sm border border-[#E9E9E9]">
          <thead className="sticky top-0 z-10 bg-[#E9EFFD]">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-3 py-3.5 text-left font-medium text-slate-600"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-slate-100">
                {columns.map((col) => (
                  <td key={col.key} className="px-1 py-1.5">
                    <input
                      value={
                        col.isAmount
                          ? formatCurrency(Number(row[col.key]))
                          : String(row[col.key])
                      }
                      onChange={(e) =>
                        updateRow(row.id, col.key, e.target.value)
                      }
                      className="w-full rounded-lg border border-transparent px-2 py-2.5 text-[#3D3D3C] text-sm font-normal leading-normal outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total row */}
      <div className="flex items-center justify-between bg-[#E9EFFD] px-3 py-4 mt-2 rounded-lg">
        <span className="text-sm font-semibold text-slate-800">{totalLabel}:</span>
        <span className="text-sm font-semibold text-slate-900">
          {formatCurrency(total)}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-5">
        <CustomButton variant="outline" onClick={onCancel}>
          Cancel
        </CustomButton>
        <CustomButton type="button" onClick={() => onUpdate?.(rows)}>
          Update
        </CustomButton>
      </div>
    </div>
  );
}
