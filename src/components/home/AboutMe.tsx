'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Server, Smartphone, Zap } from 'lucide-react'

const skills = [
  { name: 'Frontend Development', icon: Code, color: 'bg-blue-500' },
  { name: 'Backend Development', icon: Server, color: 'bg-green-500' },
  { name: 'Mobile App Development', icon: Smartphone, color: 'bg-yellow-500' },
  { name: 'Performance Optimization', icon: Zap, color: 'bg-purple-500' },
]

const experiences = [
  { year: '2020-Present', role: 'Senior MERN Stack Developer', company: 'Tech Innovators Inc.' },
  { year: '2018-2020', role: 'Full Stack Developer', company: 'WebSolutions Co.' },
  { year: '2017-2018', role: 'Junior Web Developer', company: 'StartUp Ventures' },
]

export default function AboutSection() {
  const [selectedSkill, setSelectedSkill] = useState(0)

  return (
    <section className="py-20 xl:px-[100px] bg-gray-900 text-white" id="aboutme">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-300 mb-6">
              With 3 years of experience in the MERN stack, I have honed my skills in creating robust, scalable web applications. 
              My passion for clean code and user-centric design drives me to deliver exceptional digital experiences.
            </p>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-24 text-sm text-gray-400">{exp.year}</div>
                  <div>
                    <div className="font-medium">{exp.role}</div>
                    <div className="text-sm text-gray-400">{exp.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    selectedSkill === index ? skill.color : 'bg-gray-800'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSkill(index)}
                >
                  <skill.icon className="w-8 h-8 mb-2" />
                  <h4 className="font-medium">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
            <motion.div
              key={selectedSkill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h4 className="font-semibold mb-2">{skills[selectedSkill].name}</h4>
              <p className="text-gray-300">
                {getSkillDescription(selectedSkill)}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function getSkillDescription(index: number): string {
  switch (index) {
    case 0:
      return "Proficient in React, Next.js, and modern CSS frameworks. I create responsive, accessible, and performant user interfaces that delight users and drive engagement."
    case 1:
      return "Experienced with Node.js, Express, and MongoDB. I build robust APIs and efficient database structures to power scalable web applications."
    case 2:
      return "Skilled in React Native for cross-platform mobile app development. I deliver native-like experiences for both iOS and Android platforms."
    case 3:
      return "Focused on optimizing web performance through efficient coding practices, lazy loading, and leveraging modern web technologies to ensure fast load times and smooth user experiences."
    default:
      return ""
  }
}

