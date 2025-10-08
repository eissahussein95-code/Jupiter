import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"; // Import Outlet
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "@/components/layout/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import JobsPage from "./pages/JobsPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import FreelancersPage from "./pages/FreelancersPage";
import FreelancerDetailsPage from "./pages/FreelancerDetailsPage";
import DashboardPage from "./pages/DashboardPage";
import PostJobPage from "./pages/PostJobPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        {/* Define a parent route for the Layout */}
        <Route path="/" element={<Layout />}>
          {/* The index route will be rendered by default when at "/" */}
          <Route index element={<Index />} />
          {/* All other routes that should use the Layout are nested here */}
          <Route path="jobs" element={<JobsPage />} />
          <Route path="jobs/:id" element={<JobDetailsPage />} />
          <Route path="freelancers" element={<FreelancersPage />} />
          <Route path="freelancers/:id" element={<FreelancerDetailsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="post-job" element={<PostJobPage />} />
        </Route>
        {/* The NotFound route is outside the Layout route if it doesn't use the layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;