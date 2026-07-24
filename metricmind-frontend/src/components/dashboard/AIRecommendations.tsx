"use client";
import { Lightbulb, AlertTriangle, TrendingUp } from "lucide-react";
const recommendations=[
    {
    icon: TrendingUp,
    title: "Increase Inventory",
    description:"Demand is expected to grow by 18% next month",
    color:"text-green-600"
    },
    {
    icon: AlertTriangle,
    title: "Revenue Alert",
    description:"South region sales drop by 6% this week.",
    color:"text-red-600"
    },
    {
    icon: Lightbulb,
    title: "Business Oppourtunity",
    description:"Launch a festival disount campaign to boost sales.",
    color:"text-yellow-600"
    },
];
export default function AIRecommendations(){
    return(
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-5">
                🤖 AI Recommendations
            </h2>
            <div className="sapce-y-4">
                {recommendations.map((item, index)=> {
                  const Icon =item.icon;
                  return( 
                    <div key={index}
                    className="flex items-start gap-4 p-4 rounded-xl  border hover:shadow-md transition">
                        <Icon className={item.color} size={24} />
                        <div>
                            <h3 className="font-semibold">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                                {item.description}
                            </p>
                            </div>
                            </div>
                  );
                })}
            </div>
        </div>
    );
}