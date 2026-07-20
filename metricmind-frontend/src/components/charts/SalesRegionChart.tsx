"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { salesRegionData } from "../../lib/chartData";

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];

export default function SalesRegionChart() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-4">
        Sales by Region
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={salesRegionData}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {salesRegionData.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}