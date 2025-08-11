import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Layout } from './Layout';
import { DashboardPage } from './DashboardPage';
import { FullImagesPage } from './images/FullImagesPage';
import { SubmissionsPage } from './submissions/SubmissionsPage';
import { VideosPage } from './videos/VideosPage';
import { TextsPage } from './texts/TextsPage';

interface CMSPageProps {
  onLogout: () => void;
}

export function CMSPage({ onLogout }: CMSPageProps) {



  return (
    <Layout onLogout={onLogout}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/submissions" element={<SubmissionsPage />} />
        <Route path="/media" element={<FullImagesPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/texts" element={<TextsPage />} />
      </Routes>
    </Layout>
  );
}