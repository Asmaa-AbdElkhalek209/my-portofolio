import React, { lazy, Suspense } from 'react'
const ProjectsSection = lazy(() => import('../components/projects/ProjectsSection'))
import Loader from '../components/shared/Loader'
import Titlesection from './../components/shared/TitleSection';

export default function Projects() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <div className="min-h-screen flex flex-col pt-16">
          <Titlesection title="My" higeLighted= "Projects" bakgroundText ="Works"/>
          <ProjectsSection />
        </div>
      </Suspense>
    </>
  )
}
