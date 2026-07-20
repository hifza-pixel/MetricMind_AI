"use client";
import Link from "next/link";
import {
    LayoutDashboard,
    BarChart3,
    Users,
    Package,
    TrendingUp,
    MessageSquare,
    FileText,
    Settings,
} from "lucide-react";
const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Sales", href: "/sales", icon: BarChart3 },
  { name: "Customers", href: "/customers", icon: Users },
  { name: "Products", href: "/products", icon: Package },
  { name: "Forecast", href: "/forecast", icon: TrendingUp },
  { name: "AI Chat", href: "/ai-chat", icon: MessageSquare },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];
export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-blue-400">
          MetricMind AI
        </h1>
      </div>
      <nav className="flex-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 mb-2 hover:bg-slate-800 transition"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="p-4 border-t border-slate-700 text-sm text-slate-400">
        © 2026 MetricMind
      </div>
    </aside>
  );
}