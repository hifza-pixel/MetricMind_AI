"use client";
import { Download, FileSpreadsheet, Mail, Sparkles } from "lucide-react";
export default function AIReportCenter(){
    return(
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-5">
                <Sparkles className="text-blue-600" />
                <h2 className="text-xl font-bold">
                    AI Report Center 
                </h2>
            </div>
            <div className="rounded-2xl bg-slate-100 dark:bg-slate-800 p-5 mb-6">
                <h3 className="font-semibold mb-2">
                    AI Summery
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Revenue is projected to grow by 18% next month.
                    The North Region continues to perform best.
                    Consider increasing inventory and launching promotional campaigns in underperformng regions.
                </p>
            </div>
            <div className="grid grid-cols-1 mg:grid-cols-3 gap-4">
                <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl transition">
                    <Download size={18} />
                    Export PDF
                </button>
                <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition">
                        <FileSpreadsheet size={18} />
                        Export CSV
                     </button>
                     <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition">
                        <Mail size={18} />
                        Email Report
                     </button>
            </div>
        </div>
    );
}