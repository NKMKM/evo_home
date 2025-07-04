import React, { useEffect, useState, createContext, useContext } from 'react';
import { toast } from 'react-toastify';
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserProfile: (userData: Partial<User>) => Promise<boolean>;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Check for existing auth token and load user data
    const checkAuth = async () => {
      const token = localStorage.getItem('auth-token');
      if (token) {
        try {
          // In a real app, you would validate the token with your backend
          // For now, we'll simulate a successful auth check
          setUser({
            id: '1',
            name: 'Admin User',
            email: 'admin@example.com',
            role: 'Administrator'
          });
        } catch (error) {
          console.error('Auth check failed:', error);
          localStorage.removeItem('auth-token');
        }
      }
      setIsLoading(false);
    };
    checkAuth();
  }, []);
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      // Demo credentials check
      if (email === 'admin@example.com' && password === 'password') {
        // In a real app, you would get a token from your backend
        const fakeToken = 'fake-auth-token-' + Math.random().toString(36).substring(2);
        localStorage.setItem('auth-token', fakeToken);
        setUser({
          id: '1',
          name: 'Admin User',
          email: 'admin@example.com',
          role: 'Administrator'
        });
        toast.success('Login successful');
        return true;
      } else {
        toast.error('Invalid email or password');
        return false;
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  const logout = () => {
    localStorage.removeItem('auth-token');
    setUser(null);
    toast.info('You have been logged out');
  };
  const updateUserProfile = async (userData: Partial<User>): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      setUser(prevUser => {
        if (!prevUser) return null;
        return {
          ...prevUser,
          ...userData
        };
      });
      toast.success('Profile updated successfully');
      return true;
    } catch (error) {
      console.error('Profile update failed:', error);
      toast.error('Failed to update profile');
      return false;
    } finally {
      setIsLoading(false);
    }
  };
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    updateUserProfile
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};