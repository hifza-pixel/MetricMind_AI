"use client";
import {
  Bell,
  Search,
  Sun,
  UserCircle,
} from "lucide-react";
export default function Navbar() {
  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6 shadow-sm">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
          Executive Dashboard
        </h1>
        <p className="text-sm text-slate-500">
          Welcome back, Hifza 👋
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm"
          />
        </div>
        <button className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
          <Sun className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <UserCircle className="w-9 h-9 text-blue-600" />
          <div className="hidden md:block">
            <p className="text-sm font-semibold">Hifza Tanveer</p>
            <p className="text-xs text-gray-500">Frontend Developer</p>
          </div>
        </div>
      </div>
    </header>
  );
}