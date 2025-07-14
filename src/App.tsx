import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import InmateProfile from "./components/InmateProfile";
import VisitManagement from "./components/VisitManagement";
import Statistics from "./components/Statistics";
import GracePanel from "./components/GracePanel";
import SecurityDashboard from "./components/SecurityDashboard";
import UserManagement from "./components/UserManagement";
import Settings from "./components/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inmates" element={<InmateProfile />} />
            <Route path="/visits" element={<VisitManagement />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/grace" element={<GracePanel />} />
            <Route path="/security" element={<SecurityDashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
