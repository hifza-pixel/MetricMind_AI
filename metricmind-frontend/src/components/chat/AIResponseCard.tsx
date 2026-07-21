"use client";
import AIKPI from "./AIKPI";
import RevenueChart from "../charts/RevenueChart";
import {
  Database,
  FileText,
  Download,
  Link2,
  Lightbulb,
} from "lucide-react";

export default function AIResponseCard() {
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-md p-6">

      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="text-yellow-500" />
        <h2 className="text-lg font-bold">
          AI Business Insight
        </h2>
      </div>

      {/* Summary */}
      <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-4 mb-4">
        <p className="text-sm">
          Revenue has increased by <strong>18%</strong> in the last six
          months. North Region contributed the highest sales while February
          showed a slight decline.
        </p>
      </div>
<AIKPI />

<div className="mt-6">
  <RevenueChart />
</div>

<div className="mt-6 rounded-xl bg-blue-50 dark:bg-slate-800 p-4">
  <h3 className="font-semibold text-lg mb-3">
    📌 Key Insights
  </h3>

  <ul className="list-disc pl-5 space-y-2 text-sm">
    <li>Revenue increased by 18% in the last 6 months.</li>
    <li>North region generated the highest sales.</li>
    <li>February recorded the lowest revenue.</li>
    <li>Customer growth remained consistent.</li>
  </ul>
</div>
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 text-white px-4 py-2 hover:bg-blue-700">
          <Database size={18} />
          Copy SQL
        </button>

        <button className="flex items-center gap-2 rounded-lg bg-green-600 text-white px-4 py-2 hover:bg-green-700">
          <Link2 size={18} />
          View API
        </button>

        <button className="flex items-center gap-2 rounded-lg bg-red-600 text-white px-4 py-2 hover:bg-red-700">
          <FileText size={18} />
          Export PDF
        </button>

        <button className="flex items-center gap-2 rounded-lg bg-purple-600 text-white px-4 py-2 hover:bg-purple-700">
          <Download size={18} />
          Download CSV
        </button>

      </div>
    </div>
  );
}