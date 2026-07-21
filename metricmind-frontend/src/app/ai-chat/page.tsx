import DashboardLayout from "../../components/layout/DashboardLayout";
import ChatSidebar from "../../components/chat/ChatSidebar";
import ChatMessage from "../../components/chat/ChatMessage";
import ChatInput from "../../components/chat/ChatInput";
import SuggestedPrompts from "../../components/chat/SuggestedPrompts";
import TypingIndicator from "../../components/chat/TypingIndicator";
import AIResponseCard from "../../components/chat/AIResponseCard";
import ChatToolbar from "../../components/chat/ChatToolbar";
export default function AIChatPage() {
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

  <ChatSidebar />

  <div className="flex-1 flex flex-col"></div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6">

  <ChatMessage
    sender="user"
    message="Show me the sales performance for the last 6 months."
    time="10:30 AM"
  />

  <ChatMessage
    sender="ai"
    message="The sales have increased by 18% over the last six months. March recorded the highest revenue, while February showed a slight decline. I recommend reviewing regional performance for deeper insights."
    time="10:31 AM"
  />

<SuggestedPrompts />
<TypingIndicator />
<AIResponseCard />
</div>

          {/* Chat Input Placeholder */}
          <div className="border-t border-slate-200 dark:border-slate-700 p-4">
  <div className="rounded-xl border border-slate-300 dark:border-slate-600 p-3 text-gray-400">
    Ask MetricMind AI anything...
  </div>
</div>
<ChatInput />

        </div>

      </div>
    </DashboardLayout>
  );
}