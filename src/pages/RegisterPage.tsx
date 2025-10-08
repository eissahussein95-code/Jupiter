import React from 'react';
import RegisterForm from '../components/auth/RegisterForm'; // Changed to relative import
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="min-h-[calc(100vh-14rem)] flex items-center justify-center py-12">
      <div className="text-center">
        <RegisterForm />
        <p className="mt-4 text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;