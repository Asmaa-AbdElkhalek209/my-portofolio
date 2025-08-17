import React, { lazy, Suspense } from 'react';
import Loader from '../components/shared/Loader';

const PersonalInfos = lazy(() => import('../components/about/PersonalInfos'));
const Experience = lazy(() => import('../components/about/Experience'));
const Skills = lazy(() => import('../components/about/Skills'));

export default function About() {
  return (
    <article>
      {/* SEO Tags JSX */}
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

      {/* Page Content */}
      <Suspense fallback={<Loader />}>
        <PersonalInfos />
        <Experience />
        <Skills />
      </Suspense>
    </article>
  );
}
