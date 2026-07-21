"use client";

import { Bot } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-3 mt-6">
      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
        <Bot size={20} />
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl px-5 py-3">
        <div className="flex gap-2">
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          MetricMind AI is thinking...
        </p>
      </div>
    </div>
  );
}