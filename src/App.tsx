
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DealPipelinePage from "./pages/DealPipelinePage";
import StakeholderMapsPage from "./pages/StakeholderMapsPage";
import DealWarRoomsPage from "./pages/DealWarRoomsPage";
import SalesAcademyPage from "./pages/SalesAcademyPage";
import AICoachPage from "./pages/AICoachPage";
import ForecastingPage from "./pages/ForecastingPage";
import CalendarPage from "./pages/CalendarPage";
import DealcrafterEnginePage from "./pages/DealcrafterEnginePage";
import DealReplayAIPage from "./pages/DealReplayAIPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/deals" element={<DealPipelinePage />} />
          <Route path="/stakeholder-maps" element={<StakeholderMapsPage />} />
          <Route path="/deal-war-rooms" element={<DealWarRoomsPage />} />
          <Route path="/sales-academy" element={<SalesAcademyPage />} />
          <Route path="/ai-coach" element={<AICoachPage />} />
          <Route path="/forecasting" element={<ForecastingPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/dealcrafter-engine" element={<DealcrafterEnginePage />} />
          <Route path="/deal-replay-ai" element={<DealReplayAIPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
