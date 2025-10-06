import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const { user, login } = useAuth();
  
  // If the user is already logged in, redirect to the dashboard
  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to EquityEdge</h1>
          <p className="py-6">Please log in to continue.</p>
          <button onClick={login} className="btn btn-primary">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;