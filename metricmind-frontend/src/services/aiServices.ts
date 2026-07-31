import api from "../lib/api";
export const sendMessage = async (message: string) => {
  const response = await api.post("/ai/chat", {
    message,
  });

  return response.data;
};