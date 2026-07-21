"use client";

import {
  Search,
  Star,
  Pin,
  Share2,
  Trash2,
} from "lucide-react";

export default function ChatToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">

      <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-2 flex-1 max-w-md">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search conversations..."
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>

      <div className="flex gap-2">

        <button className="p-2 rounded-lg hover:bg-yellow-100">
          <Star />
        </button>

        <button className="p-2 rounded-lg hover:bg-blue-100">
          <Pin />
        </button>

        <button className="p-2 rounded-lg hover:bg-green-100">
          <Share2 />
        </button>

        <button className="p-2 rounded-lg hover:bg-red-100">
          <Trash2 />
        </button>

      </div>

    </div>
  );
}