'use client'

import dynamic from 'next/dynamic'
import Header from '../header/Header'

const HeroContent = dynamic(() => import('./HeroContent'), { ssr: false })
const RandomShapes = dynamic(() => import('./RandomShapes'), { ssr: false })

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-hidden relative">
      {/* Top-left accent glow */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[var(--primary)]/20 rounded-full blur-3xl opacity-30 -z-10 glow-pulse"></div>
      
      {/* Center accent glow */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-[var(--accent)]/12 rounded-full blur-3xl opacity-25 -z-10 glow-pulse"></div>
      
      {/* Bottom-right accent glow */}
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-[var(--primary)]/18 rounded-full blur-3xl opacity-30 -z-10 glow-pulse"></div>
      
      <Header />
      <div className="container min-h-screen mx-auto pt-24 pb-12 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-[100px]">
        <div className="w-full animate-fade-up">
          <HeroContent />
        </div>
      </div>
      <RandomShapes />
    </section>
  )
}

