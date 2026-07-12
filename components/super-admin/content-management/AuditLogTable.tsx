"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Download } from "lucide-react";

interface AuditLogEntry {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  field: string;
  beforeValue: string;
  afterValue: string;
}

export default function AuditLogTable() {
  // Mock data reflecting your design parameters
  const [logs] = useState<AuditLogEntry[]>([
    {
      id: "1",
      timestamp: "2024-06-28 14:32",
      user: "Admin (John Smith)",
      action: "Updated AI Prompt",
      field: "Content Generation",
      beforeValue: "...previous version of the prompt containing old structure...",
      afterValue: "...new version of the prompt optimized with structured reasoning variables...",
    },
    {
      id: "2",
      timestamp: "2024-06-28 11:15",
      user: "Admin (John Smith)",
      action: "Updated AI Prompt",
      field: "Content Generation",
      beforeValue: "...previous generic data framework context...",
      afterValue: "...new specialized financial analytics configuration...",
    },
    {
      id: "3",
      timestamp: "2024-06-27 09:44",
      user: "Admin (John Smith)",
      action: "Updated AI Prompt",
      field: "Content Generation",
      beforeValue: "...old landing hero typography copywriting variables...",
      afterValue: "...optimized performance tracking layout context variables...",
    },
  ]);

  // Track expanded row states for diff visibility
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({
    "1": true, // Default open the first one to match your mockup view precisely
  });

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleExport = () => {
    console.log("Exporting audit log ledger...");
  };

  return (
    <div className="w-full bg-white p-6 rounded-[20px] border border-solid border-[#E9E9EA] shadow-[0_4px_12px_0_rgba(0,0,0,0.03)]">
      
      {/* HEADER BAR CONTEXT */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold font-[Archivo] text-[#1A1A1A] tracking-tight">
            Audit Log
          </h1>
          <p className="text-sm font-[Archivo] text-[#71717A] mt-1">
            Track all changes who changed what, when, and from what value
          </p>
        </div>
        
        <button
          onClick={handleExport}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium font-[Archivo] text-[#1A1A1A] bg-white border border-solid border-[#E9E9EA] rounded-xl hover:bg-[#FAFBFC] transition-colors self-start md:self-auto shadow-sm"
        >
          <Download size={16} className="text-[#71717A]" />
          Export Log
        </button>
      </div>

      {/* LEDGER DATA GRID TABLE TABLE */}
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse text-left min-w-[800px]">
          
          {/* STYLED TABLE HEADER ROWS */}
          <thead>
            <tr className="bg-[#F4F4F5] border-b border-solid border-[#E9E9EA]">
              <th className="p-4 text-sm font-semibold text-[#1A1A1A] font-[Archivo] rounded-l-xl w-[20%]">Timestamp</th>
              <th className="p-4 text-sm font-semibold text-[#1A1A1A] font-[Archivo] w-[25%]">User</th>
              <th className="p-4 text-sm font-semibold text-[#1A1A1A] font-[Archivo] w-[20%]">Action</th>
              <th className="p-4 text-sm font-semibold text-[#1A1A1A] font-[Archivo] w-[20%]">Field</th>
              <th className="p-4 text-sm font-semibold text-[#1A1A1A] font-[Archivo] text-right rounded-r-xl w-[15%]">Details</th>
            </tr>
          </thead>

          {/* DYNAMIC ROW RENDER LAYOUT */}
          <tbody className="divide-y divide-solid divide-[#E9E9EA]">
            {logs.map((log) => {
              const isExpanded = !!expandedRows[log.id];
              return (
                <tr key={log.id} className="group transition-colors">
                  <td colSpan={5} className="p-0">
                    
                    {/* TOP SUMMARY LINE CELL WRAPPER */}
                    <div className="flex items-center w-full p-4 text-sm font-[Archivo] text-[#1A1A1A]">
                      <div className="w-[20%] pr-4 text-gray-600">{log.timestamp}</div>
                      <div className="w-[25%] pr-4 font-medium">{log.user}</div>
                      <div className="w-[20%] pr-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#F3E8FF] text-[#A855F7]">
                          {log.action}
                        </span>
                      </div>
                      <div className="w-[20%] pr-4 text-gray-600">{log.field}</div>
                      <div className="w-[15%] text-right">
                        <button
                          type="button"
                          onClick={() => toggleRow(log.id)}
                          className={`inline-flex items-center justify-end gap-1.5 text-sm font-medium transition-colors ${
                            isExpanded ? "text-[#A855F7]" : "text-[#71717A] hover:text-[#1A1A1A]"
                          }`}
                        >
                          <span>{isExpanded ? "Hide" : "View diff"}</span>
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                      </div>
                    </div>

                    {/* EXPANDABLE SIDE-BY-SIDE COMPARE DIFF BLOCK */}
                    {isExpanded && (
                      <div className="px-4 pb-5 pt-1 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                          
                          {/* PREVIOUS VALUE VIEW PANELS */}
                          <div className="flex flex-col gap-1.5">
                            <span className="text-xs font-semibold font-[Archivo] text-[#2563EB]">
                              Before
                            </span>
                            <div className="w-full p-3.5 bg-[#EFF6FF] border border-solid border-[#BFDBFE] rounded-xl text-sm font-[Archivo] text-gray-600 min-h-[60px] whitespace-pre-wrap break-all">
                              {log.beforeValue}
                            </div>
                          </div>

                          {/* REVISED COMPONENT PANELS */}
                          <div className="flex flex-col gap-1.5">
                            <span className="text-xs font-semibold font-[Archivo] text-[#16A34A]">
                              After
                            </span>
                            <div className="w-full p-3.5 bg-[#F0FDF4] border border-solid border-[#BBF7D0] rounded-xl text-sm font-[Archivo] text-gray-600 min-h-[60px] whitespace-pre-wrap break-all">
                              {log.afterValue}
                            </div>
                          </div>

                        </div>
                      </div>
                    )}

                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
}