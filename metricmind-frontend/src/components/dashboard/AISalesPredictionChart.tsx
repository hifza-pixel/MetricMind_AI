"use client";
import { ResponsiveContainer, LineChart, Line,XAxis,YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { forecastData } from "../../lib/forecastData";
export default function AISalesPredictionChart(){
    return(
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-5">
                📈 AI Sales Prediction
            </h2>
            <ResponsiveContainer width="100%" height={350} >
            <LineChart data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={"month"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="actual" stroke="#2563eb" strokeWidth={3} name="Actual Sales" />
            <Line type="monotone" dataKey="predicted" stroke="#22c55e" strokeWidth={3} strokeDasharray="5 5" name="Predicted Sales" />
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
}