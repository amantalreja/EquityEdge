import React, { type JSX } from 'react'; 
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  if (!user) {
    // If user is not logged in, redirect them to the /login page
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;