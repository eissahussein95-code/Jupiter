import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { Toaster as Sonner } from "@/components/ui/sonner"; // Import Sonner

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-8">
        {children}
      </main>
      <Footer />
      <Toaster /> {/* Moved Toaster here */}
      <Sonner /> {/* Moved Sonner here */}
    </div>
  );
};

export default Layout;