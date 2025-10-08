"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dummyFreelancers } from './FreelancersPage'; // Import dummyFreelancers
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Briefcase, Mail } from 'lucide-react';

const FreelancerDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const freelancer = dummyFreelancers.find((f) => f.id === id);

  if (!freelancer) {
    return (
      <div className="min-h-[calc(100vh-14rem)] flex items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Freelancer Not Found</h1>
          <p className="text-xl text-gray-600 mb-4">The freelancer you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/freelancers">Back to Freelancer Listings</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl mb-2">{freelancer.name}</CardTitle>
          <CardDescription className="flex items-center gap-2 text-muted-foreground text-lg">
            <Briefcase className="h-5 w-5" /> {freelancer.title}
          </CardDescription>
          <CardDescription className="flex items-center gap-2 text-muted-foreground text-lg">
            <MapPin className="h-5 w-5" /> {freelancer.location}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-1 mb-6">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-yellow-500 text-xl">{freelancer.rating.toFixed(1)}</span>
            <span className="text-muted-foreground text-lg">/ 5.0</span>
          </div>

          <h3 className="text-xl font-semibold mb-3">About {freelancer.name}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{freelancer.description}</p>

          <h3 className="text-xl font-semibold mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {freelancer.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1 text-base">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button variant="outline" asChild>
              <Link to="/freelancers">Back to Listings</Link>
            </Button>
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Contact Freelancer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FreelancerDetailsPage;