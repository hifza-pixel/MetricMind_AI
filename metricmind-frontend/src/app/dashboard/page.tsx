import DashboardLayout from "../../components/layout/DashboardLayout";
import KPICard from "../../components/cards/KPICard";
import RevenueChart from "../../components/charts/RevenueChart";
import SalesRegionChart from "../../components/charts/SalesRegionChart";
import DashboardHeader from "../../components/dashboard/DashboardHeadrer";
import TopProductTable from "../../components/dashboard/TopProductTable";
import RecentActivity from "../../components/dashboard/RecentActivity";
import AIForecastCard from "../../components/dashboard/AIForecastCard";
import AIRecommendations from "../../components/dashboard/AIRecommendations";
import AISalesPredictionChart from "../../components/dashboard/AISalesPredictionChart";
import AIAnalyticsPanel from "../../components/dashboard/AIAnalyticsPanel";
import AIReportCenter from "../../components/dashboard/AIReportCenter";
export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <DashboardHeader/>
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <KPICard title="Revenue" value="₹12.8L" change="+12%" positive={true} />
          <KPICard title="Profit" value="₹3.4L" change="+8%" positive={true} />
          <KPICard title="Orders" value="2,356" change="+15%" positive={true} />
          <KPICard title="Customers" value="1,240" change="+6%" positive={true} />
        </div>
        <div className="grig grid-cols-1 lg:grid-cols-2 gap-2">
        <AIForecastCard/>
        <AIRecommendations/>
        <AISalesPredictionChart />
        <AIAnalyticsPanel />
        <AIReportCenter />
        </div>
        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <RevenueChart />
          <SalesRegionChart />
          <TopProductTable />
          <RecentActivity />
        </div>

      </div>
    </DashboardLayout>
  );
}