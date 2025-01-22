'use client'

import dynamic from 'next/dynamic'
import Header from '../header/Header'

const HeroContent = dynamic(() => import('./HeroContent'), { ssr: false })
const RandomShapes = dynamic(() => import('./RandomShapes'), { ssr: false })

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-white overflow-hidden">
      <Header />
      <div className="container min-h-screen mx-auto pt-24 pb-12 flex flex-col lg:flex-row items-center justify-between px-[100px]">
        <HeroContent />
      </div>
      <RandomShapes />
    </section>
  )
}

