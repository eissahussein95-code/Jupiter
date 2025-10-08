import React from 'react';
import JobCard from '../components/jobs/JobCard'; // Re-confirming relative import

// Dummy data for job listings
const dummyJobs = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    salary: '$100,000 - $130,000',
    description: 'We are looking for a highly skilled Senior React Developer to join our dynamic team. You will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack. You will also be responsible for profiling and improving front-end performance.',
    skills: ['React', 'TypeScript', 'Redux', 'Node.js', 'AWS'],
  },
  {
    id: '2',
    title: 'Full Stack Engineer',
    company: 'Innovate Co.',
    location: 'New York, NY',
    salary: '$110,000 - $140,000',
    description: 'Join our team as a Full Stack Engineer to build scalable web applications. You will work on both front-end and back-end development, contributing to all phases of the development lifecycle. Experience with modern JavaScript frameworks and cloud platforms is a plus.',
    skills: ['JavaScript', 'Node.js', 'Express', 'React', 'MongoDB', 'Docker'],
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    company: 'Creative Agency',
    location: 'San Francisco, CA',
    salary: '$80,000 - $100,000',
    description: 'We need a talented UI/UX Designer to create intuitive and aesthetically pleasing user interfaces. You will be involved in user research, wireframing, prototyping, and visual design. A strong portfolio demonstrating your design skills is essential.',
    skills: ['Figma', 'Sketch', 'Adobe XD', 'User Research', 'Prototyping'],
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'Cloud Builders',
    location: 'Remote',
    salary: '$120,000 - $150,000', // Fixed the string literal syntax here
    description: 'Seeking an experienced DevOps Engineer to manage our cloud infrastructure and CI/CD pipelines. You will implement and maintain automation tools, ensure system reliability, and work closely with development teams to streamline deployment processes.',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
];

const JobsPage = () => {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Explore Job Opportunities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyJobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;