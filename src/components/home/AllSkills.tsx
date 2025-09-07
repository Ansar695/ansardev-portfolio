/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: 'React', icon: '/assets/reactjs-logo.png' },
  { name: 'Node.js', icon: '/assets/node-logo.png' },
  { name: 'Express', icon: '/assets/express-logo.png' },
  { name: 'JavaScript', icon: '/assets/javascript-logo.png' },
  { name: 'TypeScript', icon: '/assets/typescript-logo.png' },
  { name: 'Next.js', icon: '/assets/nextjs-logo.webp' },
  { name: 'Tailwind CSS', icon: '/assets/tailwindcss-logo.png' },
  { name: 'Materialize UI', icon: '/assets/mui-icon.png' },
  { name: 'MongoDB', icon: '/assets/mongodb.png' },
  { name: 'Postgre SQL', icon: '/assets/postgres.png' },
  { name: 'AWS', icon: '/assets/aws.png' },
  { name: 'Microsoft Azure', icon: '/assets/azure.jpg' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function AllSkillsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 xl:px-[100px]" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center">
                <img src={skill.icon} alt={skill.name} className="w-20 h-16 mb-4 object-contain" />
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

