import React, { lazy, Suspense } from 'react'
import Loader from '../components/shared/Loader'

const PersonalInfos = lazy(() => import('../components/about/PersonalInfos'))
const Experience = lazy(() => import('../components/about/Experience'))
const Skills = lazy(() => import('../components/about/Skills'))

export default function About() {
  return (
    <Suspense fallback={<Loader />}>
      <PersonalInfos />
      <Experience />
      <Skills />
    </Suspense>
  )
}
