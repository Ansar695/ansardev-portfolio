/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { testimonialData } from '@/utils/skillsData'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { TestimonialCard } from './cards/TestimonialCard'

export default function MultiCardTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialData.length - 3 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialData.length - 3 : prevIndex - 1
    )
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            What My Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Dont just take my word for it - hear from some of my satisfied clients
          </p>
        </motion.div>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-all duration-300 ease-in-out"
              animate={{ x: `${-currentIndex * 33.33}%` }}
            >
              {testimonialData.map((testimonial:any, index:number) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-4">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full text-white hover:bg-opacity-30 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full text-white hover:bg-opacity-30 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

