"use client";
import {Calendar, Download, RefreshCw} from "lucide-react";
export default function DashboardHeader(){
    return(
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Executive Dashboard
                </h1>
                <p className="text-gray-500 mt-1">
                    Welcome Back! Here your business overview
                </p>
            </div>
            <div className="flex flex-wrap gap-3">
                <button className="flex items-center gap-2 border-rounded-xl px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    <Calendar size ={18} />
                    Last 30 Days
                </button>
                <button className="flex items-center gap-2 border-rounded-xl px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    <RefreshCw size={18} />
                      Refresh
                </button>
                <button className="flex items-center gap-2 border-rounded-xl px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    <Download size={18} />
                    Export Report
                </button>
            </div>
        </div>
    );
}