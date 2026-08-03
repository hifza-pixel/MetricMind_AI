import api from "../lib/api";
export const getKPIs= async() =>{
    const response= await api.get("/dashboard/kpis");
    return response.data;
};
export const getRevenue= async() =>{
    const response= await api.get("/dashboard/revenue");
    return response.data;
};
export const getRegions= async() =>{
    const response= await api.get("/dashboard/regions");
    return response.data;
};