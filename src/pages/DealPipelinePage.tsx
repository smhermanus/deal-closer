
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DealPipelineView } from "@/components/DealPipelineView";
import { DealFilters } from "@/components/DealFilters";
import { DealKanban } from "@/components/DealKanban";
import { DealAnalytics } from "@/components/DealAnalytics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DealPipelinePage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Deal Pipeline</h1>
                <p className="text-muted-foreground">
                  Manage your deals with AI-powered insights and The Dealcrafter Framework™
                </p>
              </div>
            </div>

            <DealFilters />

            <Tabs defaultValue="list" className="space-y-6">
              <TabsList>
                <TabsTrigger value="list">List View</TabsTrigger>
                <TabsTrigger value="kanban">Kanban Board</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="list">
                <DealPipelineView />
              </TabsContent>

              <TabsContent value="kanban">
                <DealKanban />
              </TabsContent>

              <TabsContent value="analytics">
                <DealAnalytics />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DealPipelinePage;
