"use client";

import { useEffect, useState } from "react";
import { Plus, MessageSquare } from "lucide-react";
import { getSessions } from "../../services/aiServices";

interface ChatSidebarProps {
  onSelectSession: (id: string) => void;
}

export default function ChatSidebar({
  onSelectSession,
}: ChatSidebarProps) {

  const [sessions, setSessions] = useState<string[]>([]);

  useEffect(() => {
    getSessions().then(setSessions);
  }, []);

  return (
    <div className="w-72 h-full bg-slate-950 text-white flex flex-col border-r border-slate-800">

      {/* Header */}
      <div className="p-5 border-b border-slate-800">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 rounded-xl py-3 font-semibold transition">
          <Plus size={18} />
          New Chat
        </button>
      </div>

      {/* Recent Chats */}
      <div className="flex-1 overflow-y-auto p-4">
        <h2 className="text-sm text-gray-400 mb-4 uppercase tracking-wide">
          Recent Chats
        </h2>

        {sessions.map((session) => (
          <button
            key={session}
            onClick={() => onSelectSession(session)}
            className="w-full flex items-center gap-3 text-left p-3 rounded-xl hover:bg-slate-800 transition mb-2"
          >
            <MessageSquare size={18} />
            <span className="truncate">{session}</span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800 text-xs text-gray-400">
        MetricMind AI v1.0
      </div>
    </div>
  );
}