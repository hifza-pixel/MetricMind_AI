interface KPICardProps {
  title: string;
  value: string;
  change: string;
}
export default function KPICard({
  title,
  value,
  change,
}: KPICardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-6 border hover:shadow-xl transition-all duration-300">
      <p className="text-gray-500 text-sm">
        {title}
      </p>
      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
      <p className="text-green-600 font-semibold mt-4">
        {change} this month
      </p>
    </div>
  );
}