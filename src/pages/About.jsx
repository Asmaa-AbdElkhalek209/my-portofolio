import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Loader from '../components/shared/Loader';

const PersonalInfos = lazy(() => import('../components/about/PersonalInfos'));
const Experience = lazy(() => import('../components/about/Experience'));
const Skills = lazy(() => import('../components/about/Skills'));

export default function About() {
  return (
    <>
      {/* SEO Tags */}
      <Helmet>
        <title>About Me | Asmaa AbdElkhalek</title>
        <meta
          name="description"
          content="Learn about Asmaa AbdElkhalek, her personal information, experience, skills, and projects. Frontend developer portfolio."
        />
        <meta
          name="keywords"
          content="Asmaa AbdElkhalek, frontend developer, portfolio, React, Skills, Experience"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Page Content */}
      <Suspense fallback={<Loader />}>
        <PersonalInfos />
        <Experience />
        <Skills />
      </Suspense>
    </>
  );
}
