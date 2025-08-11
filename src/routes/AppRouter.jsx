import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import Loader from '../components/shared/Loader';

// Lazy imports
const Home = lazy(() => import('./../pages/Home'));
const About = lazy(() => import('./../pages/About'));
const Projects = lazy(() => import('./../pages/Projects'));
const Contact = lazy(() => import('./../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
