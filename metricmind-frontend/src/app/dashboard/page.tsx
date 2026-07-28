"use client";
import { useEffect, useState } from "react";
import { getKPIs,getRevenue, getRegions } from "../../services/dashboardService";
import DashboardLayout from "../../components/layout/DashboardLayout";
import KPICard from "../../components/cards/KPICard";
import RevenueChart from "../../components/charts/RevenueChart";
import SalesRegionChart from "../../components/charts/SalesRegionChart";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import TopProductTable from "../../components/dashboard/TopProductTable";
import RecentActivity from "../../components/dashboard/RecentActivity";
import AIForecastCard from "../../components/dashboard/AIForecastCard";
import AIRecommendations from "../../components/dashboard/AIRecommendations";
import AISalesPredictionChart from "../../components/dashboard/AISalesPredictionChart";
import AIAnalyticsPanel from "../../components/dashboard/AIAnalyticsPanel";
import AIReportCenter from "../../components/dashboard/AIReportCenter";
export default function DashboardPage() {
  interface kpis{
    revenue: number;
    profit: number;
    orders: number;
    customers: number;
  }
  const [kpis, setKpis]= useState<kpis | null>(null);
  const [revenue, setRevenue]= useState([]);
   const [regions, setRegions]= useState([]);
    const [loading, setLoading]= useState(true);
     const [error, setError]= useState("");
     useEffect(()=>{
      const fetchDashboard = async () =>{
        try{
          const kpiData= await getKPIs();
           const revenueData= await getRevenue();
            const regionData= await getRegions();
            setKpis(kpiData);
            setRevenue(revenueData);
            setRegions(regionData);
        } catch (error){
          console.error(error);
          setError ("Unable to load dashboard data.")
        } finally {
          setLoading(false);
        }
      };
      fetchDashboard();
     } , []);
     if (loading){
      return(
        <DashboardLayout>
          <h2 className="text-xl">Loading Dashboard....</h2>
        </DashboardLayout>
      );
     }
     if (error){
      return(
        <DashboardLayout>
          <h2 className="text-red-600">{error}</h2>
        </DashboardLayout>
      );
     }
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <DashboardHeader/>
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <KPICard title="Revenue" value={`₹${kpis?.revenue.toLocaleString()}`}change="+12%" positive={true}/>
          <KPICard title="Profit" value={`₹${kpis?.profit.toLocaleString()}`}change="+8%" positive={true} />
          <KPICard title="Orders" value={`₹${kpis?.orders.toLocaleString()}`}change="+15%" positive={true} />
          <KPICard title="Customers" value={`₹${kpis?.customers.toLocaleString()}`}change="+6%" positive={true} />
          </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <AIForecastCard/>
        <AIRecommendations/>
        <AISalesPredictionChart />
        <AIAnalyticsPanel />
        <AIReportCenter />
        </div>
        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <RevenueChart data={revenue} />
          <SalesRegionChart data={regions} />
          <TopProductTable />
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  );
}