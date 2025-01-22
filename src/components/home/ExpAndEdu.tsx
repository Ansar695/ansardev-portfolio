'use client'

import { educationData, experienceData } from '@/utils/skillsData'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExperienceCard } from './ExperienceCard'
import { EducationCard } from './EducationCard'

export default function ExperienceEducationSection() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience')

  const tabVariants = {
    active: { color: '#ffffff', borderColor: '#ffffff' },
    inactive: { color: '#9ca3af', borderColor: 'transparent' }
  }

  return (
    <section className="py-24 bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center mb-8">
            My Journey
          </h2>
          <div className="flex justify-center space-x-4 mb-12">
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'experience' ? 'active' : 'inactive'}
              onClick={() => setActiveTab('experience')}
              className="text-lg font-medium pb-2 border-b-2 transition-colors duration-300"
            >
              Experience
            </motion.button>
            <motion.button
              variants={tabVariants}
              animate={activeTab === 'education' ? 'active' : 'inactive'}
              onClick={() => setActiveTab('education')}
              className="text-lg font-medium pb-2 border-b-2 transition-colors duration-300"
            >
              Education
            </motion.button>
          </div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'experience' ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {experienceData.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} index={index} />
                ))}
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {educationData.map((edu, index) => (
                  <EducationCard key={index} {...edu} index={index} />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

