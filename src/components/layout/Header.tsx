import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="inline-block font-bold text-lg">JUPITER FREELANCE/EMPLOYER MARKETPLACE</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/jobs">Find Jobs</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/freelancers">Find Freelancers</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/dashboard">Dashboard</Link> {/* Added Dashboard link */}
          </Button>
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/register">Sign Up</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;