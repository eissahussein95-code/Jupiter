import HeroSection from "@/components/HeroSection";
import JobCard from "@/components/jobs/JobCard"; // Import JobCard
import FreelancerCard from "@/components/freelancers/FreelancerCard"; // Import FreelancerCard
import { dummyJobs } from "./JobsPage"; // Import dummyJobs
import { dummyFreelancers } from "./FreelancersPage"; // Import dummyFreelancers
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Take a few jobs and freelancers to feature
  const featuredJobs = dummyJobs.slice(0, 3);
  const featuredFreelancers = dummyFreelancers.slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center space-y-16">
      <HeroSection />

      {/* How It Works Section */}
      <section className="container py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm bg-card text-card-foreground">
            <h3 className="text-xl font-semibold mb-2">1. Create Your Profile</h3>
            <p className="text-muted-foreground">Sign up as a freelancer or employer and set up your detailed profile.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-card text-card-foreground">
            <h3 className="text-xl font-semibold mb-2">2. Find Opportunities</h3>
            <p className="text-muted-foreground">Browse jobs or talent, and connect with the perfect match.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-card text-card-foreground">
            <h3 className="text-xl font-semibold mb-2">3. Collaborate & Succeed</h3>
            <p className="text-muted-foreground">Work together, complete projects, and grow your network.</p>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Job Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link to="/jobs">View All Jobs</Link>
          </Button>
        </div>
      </section>

      {/* Featured Freelancers Section */}
      <section className="container py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Top Freelancers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredFreelancers.map((freelancer) => (
            <FreelancerCard key={freelancer.id} {...freelancer} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg">
            <Link to="/freelancers">View All Freelancers</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;