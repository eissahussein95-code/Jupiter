"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Briefcase } from 'lucide-react';

interface FreelancerCardProps {
  id: string;
  name: string;
  title: string;
  location: string;
  rating: number;
  description: string;
  skills: string[];
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({ id, name, title, location, rating, description, skills }) => {
  return (
    <Card className="flex flex-col justify-between h-full">
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-muted-foreground">
          <Briefcase className="h-4 w-4" /> {title}
        </CardDescription>
        <CardDescription className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" /> {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center gap-1 mb-4">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span className="font-semibold text-yellow-500">{rating.toFixed(1)}</span>
          <span className="text-muted-foreground">/ 5.0</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/freelancers/${id}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FreelancerCard;