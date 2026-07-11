"use client";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Column<T> = {
    header: string;
    accessor?: keyof T;
    cell?: (row: T) => React.ReactNode;
};

type DataTableProps<T> = {
    columns: Column<T>[];
    data: T[];
    pageSize?: number;
    toolbar?: React.ReactNode; // Inject custom search/filter UI
    selectedId?: string | null; // Changed to single string
    onSelectionChange?: (id: string | null) => void;
    idKey?: keyof T;
};

export default function DataTable<T>({
    columns,
    data,
    pageSize = 5,
    selectedId,
    onSelectionChange,
    idKey
}: DataTableProps<T>) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / pageSize);

    const paginatedData = data.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const handleRowClick = (id: string) => {
        // If the same row is clicked, deselect it. Otherwise, select the new one.
        onSelectionChange?.(selectedId === id ? null : id);
    };

    // Helper function to render page numbers with clean custom ellipsis
    const renderPageNumbers = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 4) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 2) {
                pages.push(1, 2, 3, "...", totalPages);
            } else if (currentPage >= totalPages - 1) {
                pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, "...", currentPage, "...", totalPages);
            }
        }

        return pages.map((page, index) => {
            if (page === "...") {
                return (
                    <span key={`ellipsis-${index}`} className="text-[#9AA5B5] px-1 font-bold select-none tracking-tight">
                        &middot;&middot;&middot;&middot;
                    </span>
                );
            }

            const isCurrent = currentPage === page;
            return (
                <button
                    key={`page-${page}`}
                    onClick={() => setCurrentPage(Number(page))}
                    className={`w-8 h-8 flex items-center justify-center text-sm font-medium rounded-lg border transition-colors ${isCurrent
                            ? "bg-[#2F65F6] text-white border-[#2F65F6]"
                            : "bg-white text-[#9AA5B5] border-gray-200 hover:bg-gray-50 hover:text-gray-600"
                        }`}
                >
                    {page}
                </button>
            );
        });
    };

    return (
        <div className="w-full min-w-0">
            <div className="rounded-[4px] border-b border-[#EDEDED]">
                <Table className="min-w-[960px] ">
                    <TableHeader className="rounded-xl">
                        <TableRow className="border-b border-[#EDEDED] bg-[#F0F4F9] hover:bg-[#F9F9FB] rounded-xl">
                            {columns.map((col, i) => (
                                <TableHead
                                    key={i}
                                    className="px-4 py-3 text-left font-archivo text-base font-normal leading-5 text-[#070707] "
                                >
                                    {col.header}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedData.map((row, i) => {
                            const rowId = String(row[idKey!]);
                            const isSelected = selectedId === rowId;

                            return (
                                <TableRow
                                    key={i}
                                    onClick={() => handleRowClick(rowId)}
                                    className={isSelected ? "cursor-pointer bg-blue-50 hover:bg-blue-50" : "cursor-pointer"}
                                >
                                    {columns.map((col, j) => (
                                        <TableCell key={j} className="p-4 text-base font-normal leading-5 text-[#070707]">
                                            {col.cell ? col.cell(row) : String(row[col.accessor!])}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>

            {totalPages > 0 && (
                <div className="flex flex-col gap-3 bg-white px-2 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <p className="text-sm font-archivo text-[#5C6F84]">
                        Showing {paginatedData.length} entries
                    </p>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>

                        <div className="flex items-center gap-1.5">
                            {renderPageNumbers()}
                        </div>

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}