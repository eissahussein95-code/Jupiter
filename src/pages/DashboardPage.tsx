"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  // In a real application, this page would display user-specific content
  // like posted jobs, applications, messages, profile management, etc.
  // For now, it's a placeholder.

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Your Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Manage your personal information, skills, and portfolio.</p>
            <Button asChild>
              <Link to="/profile">Edit Profile</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>My Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">View jobs you've posted or applied for.</p>
            <Button asChild>
              <Link to="/my-jobs">View Jobs</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Communicate with employers or freelancers.</p>
            <Button asChild>
              <Link to="/messages">View Messages</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="mt-10 text-center">
        <p className="text-lg text-muted-foreground">
          More features coming soon!
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;