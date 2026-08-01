import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ---- Data -----------------------------------------------------------------

interface DataPoint {
  month: string;
  spend: number;
  expense: number;
}

const data: DataPoint[] = [
  { month: "Jan", spend: 22, expense: 64 },
  { month: "Feb", spend: 41, expense: 62 },
  { month: "Mar", spend: 28, expense: 39 },
  { month: "Apr", spend: 58, expense: 70 },
  { month: "May", spend: 18, expense: 90 },
  { month: "Jun", spend: 30, expense: 65 },
  { month: "Jul", spend: 65, expense: 77 },
  { month: "Aug", spend: 55, expense: 38 },
  { month: "Sep", spend: 51, expense: 28 },
  { month: "Oct", spend: 100, expense: 42 },
];

// ---- Colors -----------------------------------------------------------------

const SPEND_COLOR = "#3b6fe0"; // blue
const EXPENSE_COLOR = "#3ecf9b"; // teal/green

// ---- Custom Tooltip ---------------------------------------------------------

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ dataKey: string; value: number; color: string }>;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
}) => {
  if (!active || !payload || payload.length === 0) return null;

  const spend = payload.find((p) => p.dataKey === "spend")?.value;
  const expense = payload.find((p) => p.dataKey === "expense")?.value;

  return (
    <div className="bg-white rounded-[14px] shadow-[0_8px_24px_rgba(20,30,60,0.12)] px-[18px] py-[14px] min-w-[190px]">
      <TooltipRow color={EXPENSE_COLOR} label="Spend" value={expense} />
      <div className="h-2.5" />
      <TooltipRow color={SPEND_COLOR} label="Expense" value={spend} />
    </div>
  );
};

const TooltipRow: React.FC<{
  color: string;
  label: string;
  value: number | undefined;
}> = ({ color, label, value }) => (
  <div className="flex items-center gap-2.5">
    <span
      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
      style={{ background: color }}
    />
    <span className="text-sm text-slate-600 flex-1">{label}</span>
    <span className="text-sm font-bold text-slate-900">${value}K</span>
  </div>
);

// ---- Custom active dot (only rendered on the hovered point) -----------------

const ActiveDot = (color: string) => (props: any) => {
  const { cx, cy } = props;
  return (
    <g>
      <circle cx={cx} cy={cy} r={9} fill={color} fillOpacity={0.18} />
      <circle cx={cx} cy={cy} r={5} fill={color} stroke="#fff" strokeWidth={2} />
    </g>
  );
};

// ---- Custom legend ------------------------------------------------------------

const CustomLegend: React.FC = () => (
  <div className="flex justify-center gap-7 mt-2">
    <LegendItem color={SPEND_COLOR} label="Spend" />
    <LegendItem color={EXPENSE_COLOR} label="Expense" />
  </div>
);

const LegendItem: React.FC<{ color: string; label: string }> = ({
  color,
  label,
}) => (
  <div className="flex items-center gap-2">
    <span
      className="w-[9px] h-[9px] rounded-[3px] inline-block"
      style={{ background: color }}
    />
    <span className="text-sm text-slate-600">{label}</span>
  </div>
);

// ---- Main component -----------------------------------------------------------

const SpendExpenseChart: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl  py-5 px-7 w-full max font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] border [background:var(--W,#FFF)] px-4 py-5 rounded-2xl border-solid border-[#EDEDED]">
      <h2 className="m-1 mb-6 text-[22px] font-bold text-slate-900">
        Monthly Spend&nbsp;vs&nbsp;Expense
      </h2>

      <ResponsiveContainer width="100%" height={360}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={SPEND_COLOR} stopOpacity={0.28} />
              <stop offset="100%" stopColor={SPEND_COLOR} stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={EXPENSE_COLOR} stopOpacity={0.28} />
              <stop
                offset="100%"
                stopColor={EXPENSE_COLOR}
                stopOpacity={0.02}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            vertical={false}
            strokeDasharray="4 6"
            stroke="#e5e9f0"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 13, fill: "#94a3b8" }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 13, fill: "#94a3b8" }}
            tickFormatter={(v) => `$${v}`}
            domain={[0, 120]}
            ticks={[0, 20, 40, 60, 80, 100, 120]}
            width={48}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#cbd5e1", strokeDasharray: "4 4" }}
          />

          {/* Expense (teal) drawn first so Spend's line sits above it, matching the reference */}
          <Area
            type="linear"
            dataKey="expense"
            stroke={EXPENSE_COLOR}
            strokeWidth={2.5}
            fill="url(#expenseGradient)"
            dot={false}
            activeDot={ActiveDot(EXPENSE_COLOR)}
          />
          <Area
            type="linear"
            dataKey="spend"
            stroke={SPEND_COLOR}
            strokeWidth={2.5}
            fill="url(#spendGradient)"
            dot={false}
            activeDot={ActiveDot(SPEND_COLOR)}
          />
        </AreaChart>
      </ResponsiveContainer>

      <CustomLegend />
    </div>
  );
};

export default SpendExpenseChart;