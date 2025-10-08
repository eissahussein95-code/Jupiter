import React from 'react';
import LoginForm from '../components/auth/LoginForm'; // Changed to relative import
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-[calc(100vh-14rem)] flex items-center justify-center py-12">
      <div className="text-center">
        <LoginForm />
        <p className="mt-4 text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;