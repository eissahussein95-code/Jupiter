"use client";

import React from 'react';
import FreelancerCard from '@/components/freelancers/FreelancerCard'; // Updated import path

// Dummy data for freelancer listings
export const dummyFreelancers = [
  {
    id: 'f1',
    name: 'Alice Johnson',
    title: 'Senior Full Stack Developer',
    location: 'Remote',
    rating: 4.9,
    description: 'Experienced full stack developer with a strong background in React, Node.js, and cloud services. Passionate about building scalable and efficient web applications. I thrive in agile environments and love tackling complex challenges.',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker'],
  },
  {
    id: 'f2',
    name: 'Bob Smith',
    title: 'UI/UX Designer',
    location: 'London, UK',
    rating: 4.7,
    description: 'Creative UI/UX designer with a keen eye for detail and user-centered design principles. Proficient in Figma, Sketch, and Adobe XD. I specialize in creating intuitive and engaging digital experiences.',
    skills: ['Figma', 'Sketch', 'User Research', 'Prototyping', 'Wireframing'],
  },
  {
    id: 'f3',
    name: 'Charlie Brown',
    title: 'Digital Marketing Specialist',
    location: 'New York, NY',
    rating: 4.8,
    description: 'Results-driven digital marketing specialist with expertise in SEO, SEM, social media marketing, and content strategy. I help businesses grow their online presence and achieve their marketing goals.',
    skills: ['SEO', 'SEM', 'Content Marketing', 'Social Media', 'Google Analytics'],
  },
  {
    id: 'f4',
    name: 'Diana Prince',
    title: 'Data Scientist',
    location: 'San Francisco, CA',
    rating: 5.0,
    description: 'Highly analytical data scientist with a strong foundation in machine learning, statistical modeling, and data visualization. I transform raw data into actionable insights to drive business decisions.',
    skills: ['Python', 'R', 'Machine Learning', 'SQL', 'Tableau', 'Pandas'],
  },
];

const FreelancersPage = () => {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Find Top Freelancers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyFreelancers.map((freelancer) => (
          <FreelancerCard key={freelancer.id} {...freelancer} />
        ))}
      </div>
    </div>
  );
};

export default FreelancersPage;