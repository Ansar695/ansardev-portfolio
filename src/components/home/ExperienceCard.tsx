import { ExperienceItem } from '@/utils/types'
import { motion } from 'framer-motion'

export function ExperienceCard({ company, position, duration, description, index }: ExperienceItem & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{position}</h3>
      <p className="text-indigo-400 mb-4">{company}</p>
      <p className="text-gray-400 text-sm mb-4">{duration}</p>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}
