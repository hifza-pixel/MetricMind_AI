import DashboardLayout from "../../components/layout/DashboardLayout";
import { Download, Eye, FileText } from "lucide-react";
const reports=[
    {
        id: 1,
        name: "Monthly Sales Report",
        type: "Sales",
        date: "15 July 2026",
        status: "Completed",
    },
    {
        id: 2,
        name: "Revenue Analysis",
        type: "Finance",
        date: "14 July 2026",
        status: "Completed",
    },
    {
        id: 3,
        name: "Customer Insights",
        type: "Analytics",
        date: "13 July 2026",
        status: "Processing",
    },
];
export default function ReportsPage(){
    return(
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">
                        Reports
                    </h1>
                    <p className="text-gray-500">
                        View and Download your generated reports.
                    </p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                                <th className="text-left p-4">Report</th>
                                <th className="text-left p-4">Type</th>
                                <th className="text-left p-4">Generated</th>
                                <th className="text-left p-4">Status</th>
                                <th className="text-left p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report)=>(
                                <tr key={report.id}
                                className="border-t hover:bg-slate-50 dark:hover:bg-slate-800">
                                    <td className="p-4 flex items-center gap-3">
                                        <FileText className="text-blue-600" />
                                        {report.name}
                                    </td>
                                    <td className="p-4">{report.type}</td>
                                    <td className="p-4">{report.date}</td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-sm $ 
                                        {report.status === "Completed"
                                        ? "bg-green-100 text-green-700":
                                        "bg-yellow-100 text-yellow-700"
                                        }`} >
                                        {report.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex gap-3">
                                            <button className="text-blue-600 hover:text-green-800">
                                                <Eye size={18} />
                                            </button>
                                            <button className="text-green-600 hover:text-green-800">
                                                <Download size={18} />
                                            </button>                                  
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    );
}