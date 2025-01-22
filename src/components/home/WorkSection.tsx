/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/utils/myWorkData'

const categories = ['All', 'ReactJS', 'NextJS', 'MERN']

// const projects = [
//     { id: 1, title: 'E-commerce Platform', category: 'Web', image: '/assets/bg1.jpg' },
//     { id: 2, title: 'Fitness Tracking App', category: 'Mobile', image: '/assets/bg2.jpg' },
//     { id: 3, title: 'Corporate Branding', category: 'Design', image: '/assets/bg3.jpg' },
//     { id: 4, title: 'Social Media Dashboard', category: 'Web', image: '/assets/bg1.jpg' },
//     { id: 5, title: 'Restaurant Booking App', category: 'Mobile', image: '/assets/bg2.jpg' },
//     { id: 6, title: 'Product Packaging', category: 'Design', image: '/assets/bg3.jpg' },
//   ]

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const controls = useAnimation()
  const sectionRef = useRef(null)

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [controls])

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 bg-gray-800"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      id='projects'
    >
      <div className="container mx-auto px-4 xl:px-[100px]">
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          My Work
        </motion.h2>
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                activeCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => {
                  if(project?.link){
                    window.open(project?.link, "_blank")
                  }
                }}
              >
                <Image
                  src={project?.image}
                  alt={project?.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project?.title}</h3>
                  <p className="text-gray-600">{project?.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  )
}

