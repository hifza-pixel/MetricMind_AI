"use client";
import { Bell, Moon, Sun, Settings, User } from "lucide-react";
import { useState } from "react";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };
  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-6 flex items-center justify-between">
      <h1 className="text-xl font-bold text-slate-800 dark:text-white">
        MetricMind AI
      </h1>
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        {/* Notification */}
        <button className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        {/* Settings */}
        <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">
          <Settings size={20} />
        </button>
        {/* User Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <User size={18} />
          </div>
          <div className="hidden md:block">
            <p className="font-medium text-sm dark:text-white">
              Hifza Tanveer
            </p>
            <p className="text-xs text-gray-500">
              Data Analyst
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}