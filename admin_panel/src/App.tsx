import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { DashboardPage } from './components/DashboardPage';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // Проверка авторизации при загрузке
  useEffect(() => {
    fetch('http://localhost:3001/api/check-auth', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => setIsAuthenticated(data.authenticated))
      .catch(() => setIsAuthenticated(false));
  }, []);

  // Логин через backend
  const handleLogin = async (username: string, password: string) => {
    try {
      const res = await fetch('http://localhost:3001/api/login', {
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
    await fetch('http://localhost:3001/api/logout', {
      method: 'POST',
      credentials: 'include',
    });
    setIsAuthenticated(false);
  };

  if (isAuthenticated === null) {
    return <div>Загрузка...</div>;
  }

  return <Router>
      <div className="w-full min-h-screen bg-gray-50 font-sans text-gray-800">
        <Routes>
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage onLogin={handleLogin} />} />
          <Route path="/dashboard" element={isAuthenticated ? <DashboardPage onLogout={handleLogout} /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />} />
        </Routes>
      </div>
    </Router>;
}