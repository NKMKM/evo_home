import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { CMSPage } from './components/CMSPage';
import { useTranslation } from 'react-i18next';

export function App() {
  useTranslation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';
  // Проверка авторизации при загрузке
  useEffect(() => {
    fetch(`${backendUrl}/check-auth`, {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setIsAuthenticated(data.authenticated))
      .catch(() => setIsAuthenticated(false));
  }, []);

  // Логин через backend
  const handleLogin = async (username: string, password: string) => {
    try {
      const res = await fetch(`${backendUrl}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password })
      });
      if (res.ok) {
        setIsAuthenticated(true);
        return true;
      } else {
        setIsAuthenticated(false);
        return false;
      }
    } catch {
      setIsAuthenticated(false);
      return false;
    }
  };

  // Логаут (можно вызвать из компонента Layout)
  const handleLogout = async () => {
    await fetch(`${backendUrl}/api/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    setIsAuthenticated(false);
  };

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return <Router>
      <div className="w-full min-h-screen bg-gray-50 font-sans text-gray-800">
        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/dashboard/*"
            element={
              isAuthenticated ? (
                <CMSPage onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />} />
        </Routes>
      </div>
    </Router>;
}