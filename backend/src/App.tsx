import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Pages
import LoginPage from './pages/LoginPage';
import Layout from './components/layout/Layout';
import DashboardPage from './pages/DashboardPage';
import PagesListPage from './pages/content/PagesListPage';
import PageEditor from './pages/content/PageEditor';
import MediaManager from './pages/media/MediaManager';
import SiteStructure from './pages/structure/SiteStructure';
import SeoSettings from './pages/seo/SeoSettings';
import TemplatesPage from './pages/templates/TemplatesPage';
import TemplateEditor from './pages/templates/TemplateEditor';
import IntegrationsPage from './pages/integrations/IntegrationsPage';
import SettingsPage from './pages/settings/SettingsPage';
import BackupPage from './pages/backup/BackupPage';
// Protected Route Component
const ProtectedRoute = ({
  children
}) => {
  const isAuthenticated = localStorage.getItem('auth-token') !== null;
  return isAuthenticated ? children : <Navigate to="/login" />;
};
export function App() {
  return <AuthProvider>
      <Router>
        <div className="w-full min-h-screen bg-gray-50">
          <ToastContainer position="top-right" autoClose={3000} />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<ProtectedRoute>
                  <Layout>
                    <Routes>
                      <Route path="/" element={<DashboardPage />} />
                      <Route path="/pages" element={<PagesListPage />} />
                      <Route path="/pages/new" element={<PageEditor />} />
                      <Route path="/pages/edit/:id" element={<PageEditor />} />
                      <Route path="/media" element={<MediaManager />} />
                      <Route path="/structure" element={<SiteStructure />} />
                      <Route path="/seo" element={<SeoSettings />} />
                      <Route path="/templates" element={<TemplatesPage />} />
                      <Route path="/templates/new" element={<TemplateEditor />} />
                      <Route path="/templates/edit/:id" element={<TemplateEditor />} />
                      <Route path="/integrations" element={<IntegrationsPage />} />
                      <Route path="/settings" element={<SettingsPage />} />
                      <Route path="/backup" element={<BackupPage />} />
                    </Routes>
                  </Layout>
                </ProtectedRoute>} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>;
}