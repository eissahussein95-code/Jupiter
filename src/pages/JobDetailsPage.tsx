import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dummyJobs } from './JobsPage'; // Import dummyJobs
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, MapPin, Briefcase, CalendarDays } from 'lucide-react';

const JobDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const job = dummyJobs.find((j) => j.id === id);

  if (!job) {
    return (
      <div className="min-h-[calc(100vh-14rem)] flex items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
          <p className="text-xl text-gray-600 mb-4">The job you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/jobs">Back to Job Listings</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl mb-2">{job.title}</CardTitle>
          <CardDescription className="flex items-center gap-2 text-muted-foreground text-lg">
            <Briefcase className="h-5 w-5" /> {job.company}
          </CardDescription>
          <CardDescription className="flex items-center gap-2 text-muted-foreground text-lg">
            <MapPin className="h-5 w-5" /> {job.location}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-6">
            <DollarSign className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-600 text-xl">{job.salary}</span>
          </div>

          <h3 className="text-xl font-semibold mb-3">Job Description</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{job.description}</p>

          <h3 className="text-xl font-semibold mb-3">Required Skills</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {job.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1 text-base">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button variant="outline" asChild>
              <Link to="/jobs">Back to Listings</Link>
            </Button>
            <Button>Apply Now</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobDetailsPage;