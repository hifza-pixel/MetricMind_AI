"use client";
import { Brain, TrendingUp } from "lucide-react";
export default function AIForecastCard(){
    return(
        <div className="rounded-2xl bg-linear-to-r from-blue-600 to-indigo-700 text-white p-6 shadow-lg ">
            <div className="flex items-center gap-3 mb-4">
                <Brain size={32} />
                <div>
                    <h2 className="text-xl font-bold">AI Forecast</h2>
                    <p className="text-blue-100 text-sm">
                        Machine Learning Prediction
                    </p>
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <p className="text-blue-100">Expected Revenue</p>
                    <h1 className="text-4xl font-bold">₹15.2L</h1>
                </div>
                <div className="flex items-center gap-2">
                    <TrendingUp size={20} />
                    <span className="font-semibold">+18% Expected Growth</span>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                <p className="text-sm">Confidence core</p>
                <h3 className="text-2xl font-bold">92%</h3>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                <p className="font-semibold mb-2">AI Recommendation</p>
                <p className="text-sm"> 
                    Increase inventoryfor North region.
                    Demand is expected to rise significantly next month.
                </p>
                </div>
            </div>
        </div>
    );
}