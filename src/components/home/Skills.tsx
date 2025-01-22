'use client'

import { skillsData } from '@/utils/skillsData'
import { motion } from 'framer-motion'
import { SkillCard } from './SkillCard'

export default function SkillsSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8" id='skills'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12">My MERN Stack Skills</h1>
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-blue-400">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + categoryIndex * 0.3 }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

