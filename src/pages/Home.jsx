import React, { lazy, Suspense } from 'react'
import Loader from '../components/shared/Loader'

const HeroSection = lazy(() => import('../components/home/HeroSection'))

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <HeroSection />
      </Suspense>
    </>
  )
}
