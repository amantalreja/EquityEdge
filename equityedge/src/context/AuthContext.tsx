import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react'; // <-- The fix is applied here

import Cookies from 'js-cookie';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const sessionCookie = Cookies.get('auth_session');
    if (sessionCookie) {
      try {
        const loggedInUser: User = JSON.parse(sessionCookie);
        setUser(loggedInUser);
      } catch (e) {
        console.error("Failed to parse user from cookie", e);
        Cookies.remove('auth_session');
      }
    }
  }, []);

  const login = () => {
    const mockUser: User = { name: 'Amandeep Talreja', email: 'aman@example.com' };
    const inFiveMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);
    
    setUser(mockUser);
    Cookies.set('auth_session', JSON.stringify(mockUser), { expires: inFiveMinutes }); 
  };

  const logout = () => {
    setUser(null);
    Cookies.remove('auth_session');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};