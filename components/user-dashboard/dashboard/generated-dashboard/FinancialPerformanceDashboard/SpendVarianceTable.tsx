import React from "react";

interface SpendRow {
  description: string;
  totalSpend: string;
  variancePercent: number;
  direction: "increase" | "decrease";
}

const data: SpendRow[] = [
  { description: "AWS Cloud Service", totalSpend: "$267K", variancePercent: 10, direction: "increase" },
  { description: "Salesforce", totalSpend: "$145K", variancePercent: 2, direction: "decrease" },
  { description: "Staples", totalSpend: "8.3%", variancePercent: 1, direction: "increase" },
  { description: "Office Solutions", totalSpend: "$12,737", variancePercent: 4, direction: "increase" },
  { description: "Other", totalSpend: "$41,415", variancePercent: 1, direction: "decrease" },
];

const SpendVarianceTable: React.FC = () => {
  return (
    <div className="w-full  rounded-3xl bg-white p-7  font-sans border [background:var(--W,#FFF)] px-4 py-5 rounded-2xl border-solid border-[#EDEDED]">
      <h2 className="mb-6 mt-1 text-2xl font-bold text-slate-900">
        Spend Variance by Category
      </h2>

      <div className="overflow-x-auto rounded-xl">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-slate-50">
              <th className="px-2.5 py-4 text-left font-medium text-slate-500 rounded-tl-xl ">
                Description
              </th>
              <th className="px-2.5 py-4 text-left font-medium text-slate-500">
                Total Spend
              </th>
              <th className="px-2.5 py-4 text-left font-medium text-slate-500 rounded-tr-xl">
                Variance prior period
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={row.description}
                className={idx !== data.length - 1 ? "border-b border-slate-100" : ""}
              >
                <td className="px-2.5 py-4 font-semibold 1
text-[#424750] ">
                  {row.description}
                </td>
                <td className="px-2.5 py-4 text-slate-500">{row.totalSpend}</td>
                <td className="px-2.5 py-4">
                  <span
                    className={
                      row.direction === "increase"
                        ? "text-emerald-600"
                        : "text-red-600"
                    }
                  >
                    {row.variancePercent}%{" "}
                    {row.direction === "increase" ? "Increase" : "decrease"}
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

export default SpendVarianceTable;