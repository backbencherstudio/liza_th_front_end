"use client";

import React from "react";
import { MonthlyData, CATEGORY_COLORS, CATEGORY_LABELS } from "./TableDataDepartment";

interface CategoryTableProps {
    data: MonthlyData[];
}

const formatCurrency = (value: number) =>
    `$${value.toLocaleString("en-US")}`;

const OperationalCatergoryTable: React.FC<CategoryTableProps> = ({ data }) => {
    return (
        <div className="w-full overflow-x-auto  border border-solid border-[#E2E8F0]  bg-white font-[Archivo]">
            <table className="w-full border-collapse text-[15px]">
                <thead>
                    <tr>
                        {/* Empty top-left cell */}
                        <th className="border-b border-r border-solid border-[#E2E8F0] bg-white px-5 py-3.5" />

                        {/* Headers with signature light blue/indigo tint background */}
                        {data.map((row) => (
                            <th
                                key={row.month}
                                className="bg-[#EDF2FE] border-b border-r last:border-r-0 border-solid border-[#E2E8F0] px-2 py-1 text-center font-normal text-[#334155] whitespace-nowrap "
                            >
                                {row.month}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {CATEGORY_LABELS.map(({ key, label }) => (
                        <tr key={key} className="hover:bg-slate-50/50 transition-colors">
                            {/* Category label row cell */}
                            <td className="border-b last:border-b-0 border-r border-solid border-[#E2E8F0] px-2 py-1 text-left font-normal text-[#334155] whitespace-nowrap bg-white">
                                <span
                                    className="mr-3 inline-block h-[11px] w-[11px] rounded-[3px] align-middle shadow-sm"
                                    style={{ backgroundColor: CATEGORY_COLORS[key] }}
                                />
                                <span className="align-middle">{label}</span>
                            </td>

                            {/* Financial value data cells */}
                            {data.map((row) => (
                                <td
                                    key={row.month + key}
                                    className="border-b  border-r last:border-r border-solid border-[#E2E8F0] px-2  font-normal text-[#334155] whitespace-nowrap bg-white text-center"
                                >
                                    {formatCurrency(row[key])}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OperationalCatergoryTable;