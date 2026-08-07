"use client";
import { useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import ChatSidebar from "../../components/chat/ChatSidebar";
import ChatMessage from "../../components/chat/ChatMessage";
import ChatInput from "../../components/chat/ChatInput";
import SuggestedPrompts from "../../components/chat/SuggestedPrompts";
import TypingIndicator from "../../components/chat/TypingIndicator";
import AIResponseCard from "../../components/chat/AIResponseCard";
import ChatToolbar from "../../components/chat/ChatToolbar";
import { getHistory } from "../../services/aiServices";

export default function AIChatPage() {
  type Message = {
    sender: "user" | "ai";
    message: string;
    time: string;
  };
  const [messages, setMessages] = useState <Message[]>([
  {
    sender: "user",
    message: "Show me the sales performance for the last 6 months.",
    time: "10:30 AM",
  },
  {
    sender: "ai",
    message:
      "The sales have increased by 18% over the last six months. March recorded the highest revenue, while February showed a slight decline. I recommend reviewing regional performance for deeper insights.",
    time: "10:31 AM",
  },
]);
const [streamingMessage,setStreamingMessage]=useState("");
type HistoryMessage = {
  role: "user" | "assistant";
  message: string;
};
const openChat= async (id: string) => {
  const history =await getHistory(id);
  const formattedMessages= history.map((msg: HistoryMessage)=>
  ({
    sender: msg.role == "assistant" ? "ai" : "user",
    message:msg.message, time : "",
  }));
  setMessages(formattedMessages);
};
  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-100px)]">

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
            MetricMind AI Assistant
          </h1>

          <p className="text-gray-500 mt-2">
            Ask questions about your business data and get AI-powered insights.
          </p>
        </div>
<ChatToolbar />
        {/* Chat Container */}
        <div className="flex-1 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 flex overflow-hidden">

  <ChatSidebar  onSelectSession={openChat}/>

  <div className="flex-1 flex flex-col">

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6">

{messages.map((msg, index) => (
  <ChatMessage
    key={index}
    sender={msg.sender}
    message={msg.message}
    time={msg.time}
  />
))}
{streamingMessage && (
  <ChatMessage sender="ai" message={streamingMessage} time="Typing...." />
)}
<SuggestedPrompts />
<TypingIndicator />
<AIResponseCard />
</div>

          {/* Chat Input Placeholder */}
       
<ChatInput
  setStreamingMessage={setStreamingMessage}
  onSend={(userMessage, aiReply) => {
    setStreamingMessage("");
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        message: userMessage,
        time: new Date().toLocaleTimeString(),
      },
      {
        sender: "ai",
        message: aiReply,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  }}
/>
</div>
        </div>

      </div>
    </DashboardLayout>
  );
}