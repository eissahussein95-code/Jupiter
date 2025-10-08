import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      {/* Additional sections for featured jobs, freelancers, etc. will go here */}
      <section className="container py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">1. Create Your Profile</h3>
            <p className="text-muted-foreground">Sign up as a freelancer or employer and set up your detailed profile.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">2. Find Opportunities</h3>
            <p className="text-muted-foreground">Browse jobs or talent, and connect with the perfect match.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">3. Collaborate & Succeed</h3>
            <p className="text-muted-foreground">Work together, complete projects, and grow your network.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;