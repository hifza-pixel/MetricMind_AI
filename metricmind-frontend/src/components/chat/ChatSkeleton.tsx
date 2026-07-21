export default function ChatSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-5 w-1/2 bg-gray-300 rounded"></div>
      <div className="h-24 bg-gray-300 rounded-xl"></div>
      <div className="h-24 bg-gray-300 rounded-xl"></div>
    </div>
  );
}