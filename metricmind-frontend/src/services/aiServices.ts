import api from "../lib/api";
export const sendMessage = async (message: string) => {
  const response = await api.post("/ai/chat", {
    message,
  });

  return response.data;
};
export async function streamMessage(message:string) {
  const response =await fetch (
    "http://localhost:8000/ai/chat/stream",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({message}),
    }
  );
  return response.body
}
export async function getSessions() {
  const response = await api.get("/ai/sessions");
  return response.data.sessions;
}

export async function getHistory(sessionId: string) {
  const response = await api.get(`/ai/history/${sessionId}`);
  return response.data.messages;
}