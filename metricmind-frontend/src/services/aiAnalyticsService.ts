import api from "../lib/api";
export const getForecast = () =>
  api.get("/ai/forecast");
export const getRecommendations = () =>
  api.get("/ai/recommendations");
export const getAnalytics = () =>
  api.get("/ai/analytics");