import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// LayoutProps no longer needs 'children' directly as Outlet handles nested content
interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-8">
        <TooltipProvider>
          <div> {/* Changed from React.Fragment to a div */}
            <Outlet />
          </div>
        </TooltipProvider>
      </main>
      <Footer />
      <Toaster />
      <Sonner />
    </div>
  );
};

export default Layout;