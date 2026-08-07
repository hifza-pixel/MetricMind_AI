"use client";
import { Send, Paperclip, Smile, Mic } from "lucide-react";
import { useState } from "react";
import { streamMessage } from "../../services/aiServices";
interface ChatInputProps {
  onSend?: (message: string, reply: string) => void;
  setStreamingMessage?: (text: string) => void;
}
export default function ChatInput({
  onSend,
  setStreamingMessage,
}: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)
  const handleSend = async () => {
    if (!message.trim()) return;
    try {
      setLoading(true);
      const userMessage = message;
      const response = await streamMessage(userMessage);
      if (!response) return;
      const reader = response.getReader();
      const decoder = new TextDecoder();
      let aiReply = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        aiReply += decoder.decode(value);
        setStreamingMessage?.(aiReply);
      }
      onSend?.(userMessage, aiReply);
      setStreamingMessage?.("");
      setMessage("");
    } catch (error) {
      console.error("Streaming Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="border-t border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
      <div className="flex items-center gap-3 bg-slate-100 dark:bg-slate-800 rounded-2xl px-4 py-3 shadow-sm">
        {/* Attachment */}
        <button
          type="button"
          className="text-slate-500 hover:text-blue-600 transition"
        >
          <Paperclip size={20} />
        </button>
        {/* Input */}
        <input
          type="text"
          placeholder="Ask MetricMind AI anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              handleSend();
            }
          }}
          className="flex-1 bg-transparent outline-none text-sm"
        />
        {/* Emoji */}
        <button
          type="button"
          className="text-slate-500 hover:text-yellow-500 transition"
        >
          <Smile size={20} />
        </button>
        {/* Voice */}
        <button
          type="button"
          className="text-slate-500 hover:text-green-500 transition"
        >
          <Mic size={20} />
        </button>
        {/* Send */}
        <button
          type="button"
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white p-2 rounded-xl transition"
        >
          {loading ? "..." : <Send size={18} />}
        </button>
      </div>
      <p className="text-xs text-center text-slate-400 mt-2">
        MetricMind AI may generate incorrect insights. Always verify critical
        business decisions.
      </p>
    </div>
  );
}