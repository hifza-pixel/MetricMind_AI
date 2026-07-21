"use client";

const prompts = [
  "📈 Show revenue trend",
  "💰 Monthly profit report",
  "👥 Top customers",
  "🌍 Sales by region",
  "📦 Best selling products",
  "📉 Forecast next month's sales",
];

export default function SuggestedPrompts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
      {prompts.map((prompt, index) => (
        <button
          key={index}
          className="rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 text-left hover:border-blue-500 hover:shadow-lg transition-all duration-300"
        >
          <p className="font-medium">{prompt}</p>
        </button>
      ))}
    </div>
  );
}