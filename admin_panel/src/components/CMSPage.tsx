import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Layout } from './Layout';
import { DashboardPage } from './DashboardPage';
import { SubmissionsPage } from './submissions/SubmissionsPage';
import { VideosPage } from './videos/VideosPage';
import { TextsPage } from './texts/TextsPage';
import { PagesSitePage } from './pages/PagesSitePage';
import { SEOPage } from './seo/SEOPage';

interface CMSPageProps {
  onLogout: () => void;
}

export function CMSPage({ onLogout }: CMSPageProps) {



  return (
    <Layout onLogout={onLogout}>
      <Routes>
        <Route path="" element={<DashboardPage />} />
        <Route path="submissions" element={<SubmissionsPage />} />
  {/* Media (FullImagesPage) removed */}
        <Route path="videos" element={<VideosPage />} />
        <Route path="texts" element={<TextsPage />} />
        <Route path="pages" element={<PagesSitePage />} />
  {/* Backups removed from navigation by request */}
        <Route path="seo" element={<SEOPage />} />
      </Routes>
    </Layout>
  );
}