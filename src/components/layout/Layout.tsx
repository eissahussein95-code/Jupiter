import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <TooltipProvider> {/* Moved TooltipProvider to wrap the entire layout div */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container py-8">
          <div>
            <Outlet />
          </div>
        </main>
        <Footer />
        <Toaster />
        <Sonner />
      </div>
    </TooltipProvider>
  );
};

export default Layout;