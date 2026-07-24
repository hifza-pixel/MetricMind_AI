"use client";
import { ShieldAlert, Target, Calendar,TrendingUp } from "lucide-react";
export default function AIAnalyticsPanel(){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-blue-600" />
                    <h2 className="font-bold text-lg">
                        Forecast Range
                    </h2>
                </div>
                <select className="w-full border rounded-xl p-3 dark:bg-slate-800">
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>Last 1 Year</option>
                </select>
            </div>
            {/*Accuracy*/}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                    <Target className="text-green-600" />
                    <h2 className="font-bold text-lg">
                        Prediction Accuracy
                    </h2>
                </div>
                <h1 className="text-4xl font-bold">92%</h1>
                <p className="text-gray-500 mt-2">
                    Based on previous data
                    </p>
            </div>
            {/*Risk*/}
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                    <ShieldAlert className="text-red-600" />
                    <h2 className="font-bold text-lg">
                        Risk Level
                    </h2>
                </div>
                <h1 className="text-3xl font-bold text-red-600">
                    Medium
                </h1>
                <div className="mt-4 flex items-center gap-2 text-green-600">
                    <TrendingUp size={20} />
                    Stable Business Growth
                </div>
            </div>
        </div>
    );
}