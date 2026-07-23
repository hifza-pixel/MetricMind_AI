import { TrendingUp,TrendingDown } from "lucide-react";
interface KPICardProps {
  title: string;
  value: string;
  change: string;
  positive:boolean;
}
export default function KPICard({
  title,
  value,
  change,
  positive,
}: KPICardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 border hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">
        {title} 
        </p>
        <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
        </div>
        <div className={'p-3 rounded-full ${positive ? "bg-green-100 text-green-600":"bg-red-100 text-red-600"}'}>
          {positive ? <TrendingUp /> : <TrendingDown />}
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2">
        <span className={'font-semibold ${positive ? "text-green-600" : "text-red-600"}'}>
          {change}
        </span>
        <span className="text-sm text-gray-500">
          vs Last Month
        </span>
      </div>
      
    </div>
  );
}