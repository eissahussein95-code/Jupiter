import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DollarSign, MapPin, Briefcase } from 'lucide-react';

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  description: string;
  skills: string[];
}

const JobCard: React.FC<JobCardProps> = ({ id, title, company, location, salary, description, skills }) => {
  return (
    <Card className="flex flex-col justify-between h-full">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-muted-foreground">
          <Briefcase className="h-4 w-4" /> {company}
        </CardDescription>
        <CardDescription className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" /> {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-4 w-4 text-green-600" />
          <span className="font-semibold text-green-600">{salary}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/jobs/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;