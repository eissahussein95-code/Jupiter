import React from 'react';
import { MadeWithDyad } from '@/components/made-with-dyad';

const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-8">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} JUPITER FREELANCE/EMPLOYER MARKETPLACE. All rights reserved.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;