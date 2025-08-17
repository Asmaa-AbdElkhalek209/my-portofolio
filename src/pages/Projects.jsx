import React, { lazy, Suspense } from 'react';
import Loader from '../components/shared/Loader';
import Titlesection from '../components/shared/TitleSection';

const ProjectsSection = lazy(() => import('../components/projects/ProjectsSection'));

export default function Projects() {
  return (
    <article>
      {/* SEO Tags  JSX */}
      <title>My Projects | Portfolio</title>
      <meta
        name="description"
        content="Explore my projects showcasing my skills in web development, React, and front-end technologies."
      />
      <meta
        name="keywords"
        content="Asmaa AbdElkhalek, frontend developer, React, React.js, مشاريع فرونت اند, تطوير واجهات المستخدم, portfolio, web development, مشاريع شخصية"
      />

      {/* Page Content */}
      <Suspense fallback={<Loader />}>
        <div className="min-h-screen flex flex-col pt-16">
          <Titlesection title="My" higeLighted="Projects" bakgroundText="Works" />
          <ProjectsSection />
        </div>
      </Suspense>
    </article>
  );
}
