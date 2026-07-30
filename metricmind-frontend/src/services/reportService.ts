import api from "../lib/api";
export interface Report{
    name: string,
    report_type: string,
    generated_date: string,
    status: string;
}
export const getReports = () =>
    api.get("/reports");
export const createReport= (data: Report) =>
    api.post("/reports",data);
export const updateReport= (id: number,data: Report) =>
    api.put(`/reports/${id}`,data);
export const deleteReport= (id: number) =>
    api.delete(`/reports/${id}`);