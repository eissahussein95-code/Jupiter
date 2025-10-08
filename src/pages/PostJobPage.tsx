"use client";

import React from 'react';
import JobPostForm from '@/components/jobs/JobPostForm';

const PostJobPage = () => {
  return (
    <div className="min-h-[calc(100vh-14rem)] flex items-center justify-center py-12">
      <JobPostForm />
    </div>
  );
};

export default PostJobPage;