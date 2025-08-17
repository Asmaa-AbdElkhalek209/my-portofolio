import React, { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
const ProjectsSection = lazy(() => import('../components/projects/ProjectsSection'))
import Loader from '../components/shared/Loader'
import Titlesection from './../components/shared/TitleSection';

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>My Projects | Portfolio</title>
        <meta
          name="description"
          content="Explore my projects showcasing my skills in web development, React, and front-end technologies."
        />
      </Helmet>

      <Suspense fallback={<Loader />}>
        <div className="min-h-screen flex flex-col pt-16">
          <Titlesection title="My" higeLighted="Projects" bakgroundText="Works" />
          <ProjectsSection />
        </div>
      </Suspense>
    </>
  )
}
