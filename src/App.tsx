import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "@/components/layout/Layout";
import LoginPage from "./pages/LoginPage"; // Import LoginPage
import RegisterPage from "./pages/RegisterPage"; // Import RegisterPage
import JobsPage from "./pages/JobsPage"; // Import JobsPage

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/jobs" element={<JobsPage />} /> {/* Use JobsPage component */}
            <Route path="/freelancers" element={<div>Freelancers Listing Page (Coming Soon!)</div>} />
            <Route path="/login" element={<LoginPage />} /> {/* Use LoginPage component */}
            <Route path="/register" element={<RegisterPage />} /> {/* Use RegisterPage component */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;