import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 md:py-32 rounded-lg shadow-lg overflow-hidden">
      <div className="container relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          JUPITER FREELANCE/EMPLOYER MARKETPLACE
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-up delay-200">
          Connect with top talent or find your next project. Your gateway to a world of opportunities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-400">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 shadow-lg" asChild>
            <Link to="/jobs">Find Jobs</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 shadow-lg" asChild>
            <Link to="/freelancers">Hire Talent</Link>
          </Button>
        </div>
      </div>
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" fill="none" viewBox="0 0 1200 600">
          <circle cx="100" cy="100" r="80" fill="currentColor" className="text-blue-400" />
          <circle cx="1100" cy="500" r="120" fill="currentColor" className="text-purple-400" />
          <rect x="300" y="50" width="150" height="150" fill="currentColor" className="text-blue-500" transform="rotate(15 375 125)" />
          <rect x="700" y="400" width="200" height="100" fill="currentColor" className="text-purple-500" transform="rotate(-25 800 450)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;