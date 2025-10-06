import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute'; // Import ProtectedRoute
import DashboardPage from '../pages/DashboardPage';
import LoginPage from '../pages/LoginPage';
import SettingsPage from '../pages/SettingsPage'; // Import new pages
import ProfilePage from '../pages/ProfilePage';   // Import new pages

export const router = createBrowserRouter([
  {
    path: '/',
    // Wrap the Layout with ProtectedRoute
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: 'settings', // New route for settings
        element: <SettingsPage />,
      },
      {
        path: 'profile', // New route for profile
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);