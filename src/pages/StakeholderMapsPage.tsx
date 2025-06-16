
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { StakeholderMapView } from "@/components/StakeholderMapView";
import { StakeholderFilters } from "@/components/StakeholderFilters";
import { Button } from "@/components/ui/button";
import { Plus, Users, Map } from "lucide-react";

const StakeholderMapsPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <Map className="w-8 h-8" />
                  Stakeholder Maps
                </h1>
                <p className="text-muted-foreground">
                  Map decision makers, influencers, and champions across your deal ecosystem
                </p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Create New Map
              </Button>
            </div>

            <StakeholderFilters />
            <StakeholderMapView />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default StakeholderMapsPage;
