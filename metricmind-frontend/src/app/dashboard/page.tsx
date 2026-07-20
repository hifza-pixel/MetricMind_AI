import DashboardLayout from "../../components/layout/DashboardLayout";
import KPICard from "../../components/cards/KPICard";
import RevenueChart from "../../components/charts/RevenueChart";
import SalesRegionChart from "../../components/charts/SalesRegionChart";
export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Executive Dashboard</h1>
          <p className="text-gray-500">
            Welcome to MetricMind AI Analytics Platform
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <KPICard
            title="Revenue"
            value="₹12.8L"
            change="+12%"
          />
          <KPICard
            title="Profit"
            value="₹3.4L"
            change="+8%"
          />
          <KPICard
            title="Orders"
            value="2,356"
            change="+15%"
          />
          <KPICard
            title="Customers"
            value="1,240"
            change="+6%"
          />
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
  <RevenueChart />
  <SalesRegionChart />
</div>
        </div>
      </div>
    </DashboardLayout>
  );
}