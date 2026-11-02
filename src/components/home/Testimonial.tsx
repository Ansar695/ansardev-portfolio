/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'


const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'Ansar is an exceptional developer. His attention to detail and problem-solving skills are unmatched.',
    avatar: '/assets/bg3.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Project Manager, WebSolutions',
    content: 'Working with Ansar was a pleasure. He consistently delivered high-quality work on time.',
    avatar: '/assets/bg2.jpg',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'CTO, MobileTech',
    content: "Ansar's expertise in mobile app development helped us launch our product ahead of schedule.",
    avatar: '/assets/bg1.jpg',
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">What Clients Say</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl p-8 relative"
            >
              <Quote className="text-purple-500 w-12 h-12 absolute top-4 left-4 opacity-20" />
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              <p className="text-gray-800 text-lg italic">{testimonials[currentIndex].content}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-purple-100 transition-colors"
          >
            <ChevronLeft className="text-purple-500" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-purple-100 transition-colors"
          >
            <ChevronRight className="text-purple-500" />
          </button>
        </div>
      </div>
    </section>
  )
}
