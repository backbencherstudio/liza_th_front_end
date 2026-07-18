import React from "react";

interface SpendRow {
    Metric: string;
    Actual: string;
    Plan: string;
    variancePercent: number;
    Status: "Good" | "Bad";
}

const data: SpendRow[] = [
    { Metric: "Revenue", Actual: "$267K", Plan: "$267K", variancePercent: 10, Status: "Good" },
    { Metric: "Spend", Actual: "$145K", Plan: "$145K", variancePercent: 2, Status: "Good" },
    { Metric: "Gross Margin", Actual: "8.3%", Plan: "8.3%", variancePercent: 1, Status: "Good" },
];

const ExecuitiveSummeryKpiTable: React.FC = () => {
    return (
        <div className="w-full h-full  rounded-3xl bg-white p-7  font-sans border [background:var(--W,#FFF)] px-4 py-5 rounded-2xl border-solid border-[#EDEDED]">
            <h2 className="mb-6 mt-1 text-[#1C1C1E] font-medium text-[18px] sm:text-[20px] leading-[24px] sm:leading-[26px]">
                Spend Variance by Category
            </h2>

            <div className="overflow-x-auto rounded-xl">
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-slate-50">
                            <th className="px-2.5 py-4 text-left font-medium text-slate-500 rounded-tl-xl ">
                                Metric
                            </th>
                            <th className="px-2.5 py-4 text-left font-medium text-slate-500">
                                Actual
                            </th>
                            <th className="px-2.5 py-4 text-left font-medium text-slate-500 rounded-tr-xl">
                                Plan
                            </th>
                            <th className="px-2.5 py-4 text-left font-medium text-slate-500 rounded-tr-xl">
                                Variance
                            </th>
                            <th className="px-2.5 py-4 text-left font-medium text-slate-500 rounded-tr-xl">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, idx) => (
                            <tr
                                key={row.Metric}
                                className={idx !== data.length - 1 ? "border-b border-slate-100" : ""}
                            >
                                <td className="px-2.5 py-4 font-semibold 1
text-[#424750] ">
                                    {row.Metric}
                                </td>
                                <td className="px-2.5 py-4 ">{row.Actual}</td>
                                <td className="px-2.5 py-4">
                                    {row.Plan}
                                </td>
                                <td className="px-2.5 py-4">
                                    <span
                                        className={
                                            row.variancePercent > 0
                                                ? "text-emerald-600"
                                                : "text-red-600"
                                        }
                                    >
                                        {row.variancePercent}%{" "}
                                        {row.Status === "Good" ? "Increase" : "decrease"}
                                    </span>
                                </td>
                                <td className="px-2.5 py-4">
                                    <span
                                        className={
                                            row.Status === "Good"
                                                ? "text-emerald-600"
                                                : "text-red-600"
                                        }
                                    >
                                        {row.Status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExecuitiveSummeryKpiTable;