import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Loader from '../components/shared/Loader';

const HeroSection = lazy(() => import('../components/home/HeroSection'));

export default function Home() {
  return (
    <>
      {/* SEO Tags */}
      <Helmet>
        <title>Asmaa AbdElkhalek | Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to Asmaa AbdElkhalek's portfolio. Explore projects, skills, and experience of a frontend developer."
        />
        <meta
          name="keywords"
          content="Asmaa AbdElkhalek, frontend developer, React, portfolio, projects, skills"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Page Content */}
      <Suspense fallback={<Loader />}>
        <HeroSection />
      </Suspense>
    </>
  );
}
