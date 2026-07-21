"use client";

import { Send, Paperclip, Smile, Mic } from "lucide-react";

interface ChatInputProps {
  onSend?: () => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  return (
    <div className="border-t border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900">

      <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 rounded-2xl px-4 py-3 shadow-sm">

        {/* Attachment */}
        <button className="text-slate-500 hover:text-blue-600 transition">
          <Paperclip size={20} />
        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="Ask MetricMind AI anything..."
          className="flex-1 bg-transparent outline-none text-sm"
        />

        {/* Emoji */}
        <button className="text-slate-500 hover:text-yellow-500 transition">
          <Smile size={20} />
        </button>

        {/* Voice */}
        <button className="text-slate-500 hover:text-green-500 transition">
          <Mic size={20} />
        </button>

        {/* Send */}
        <button
          onClick={onSend}
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-xl transition"
        >
          <Send size={18} />
        </button>

      </div>

      <p className="text-xs text-center text-slate-400 mt-2">
        MetricMind AI may generate incorrect insights. Always verify critical business decisions.
      </p>

    </div>
  );
}