
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DealPipeline } from "@/components/DealPipeline";
import { AIInsights } from "@/components/AIInsights";
import { QuickActions } from "@/components/QuickActions";
import { RevenueMetrics } from "@/components/RevenueMetrics";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <RevenueMetrics />
                <DealPipeline />
              </div>
              <div className="space-y-6">
                <AIInsights />
                <QuickActions />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
