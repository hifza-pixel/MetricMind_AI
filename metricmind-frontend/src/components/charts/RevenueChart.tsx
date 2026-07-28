"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
interface RevenueData{
  month: string;
  revenue: number;
}

interface Props{
  data:RevenueData[];
}
export default function RevenueChart({data}:Props) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-4">
        Revenue Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}