import React from 'react';
import Header from '@/components/layout/Header'; // Updated import path
import Footer from '@/components/layout/Footer'; // Updated import path

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
    </div>
  );
};

export default Layout;