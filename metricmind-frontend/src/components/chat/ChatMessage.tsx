"use client";

import { motion } from "framer-motion";
import { Bot, User, Copy, ThumbsUp, ThumbsDown } from "lucide-react";

interface ChatMessageProps {
  sender: "user" | "ai";
  message: string;
  time?: string;
}

export default function ChatMessage({
  sender,
  message,
  time,
}: ChatMessageProps) {
  const isAI = sender === "ai";

  return (
    <motion.div
      className={`flex gap-4 mb-6 ${
        isAI ? "justify-start" : "justify-end"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {isAI && (
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
          <Bot size={20} />
        </div>
      )}

      <div
        className={`max-w-[70%] rounded-2xl p-4 shadow ${
          isAI
            ? "bg-slate-100 dark:bg-slate-800"
            : "bg-blue-600 text-white"
        }`}
      >
        <p>{message}</p>

        <div className="flex items-center justify-between mt-4 text-xs opacity-70">
          <span>{time}</span>

          {isAI && (
            <div className="flex gap-3">
              <Copy
                size={16}
                className="cursor-pointer hover:text-blue-500"
              />
              <ThumbsUp
                size={16}
                className="cursor-pointer hover:text-green-500"
              />
              <ThumbsDown
                size={16}
                className="cursor-pointer hover:text-red-500"
              />
            </div>
          )}
        </div>
      </div>

      {!isAI && (
        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
          <User size={20} />
        </div>
      )}
    </motion.div>
  );
}