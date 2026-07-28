"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444",
];
interface RegionData{
  name: string;
  value: number;
}
interface Props{
  data:RegionData[];
}
export default function SalesRegionChart({data}:Props) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-4">
        Sales by Region
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart data={data}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {data.map((_, index) => (
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