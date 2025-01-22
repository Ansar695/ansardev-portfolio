'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Progress } from '@/components/ui/progress'
import { Code } from 'lucide-react'

export default function LoadingPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + 10
      })
    }, 500)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-4">
      <AnimatePresence>
        <motion.div
          key="logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="mb-8"
        >
          <div className="w-24 h-24 bg-blue-500 rounded-lg flex items-center justify-center">
            <Code className="w-16 h-16 text-white" />
          </div>
        </motion.div>

        <motion.div
          key="text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Loading Your Experience</h1>
          <p className="text-xl text-gray-400">Please wait while we prepare something amazing for you</p>
        </motion.div>

        <motion.div
          key="progress"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="w-full max-w-md"
        >
          <Progress value={progress} className="h-2 mb-2" />
          <p className="text-center text-sm text-gray-400">{progress}% Complete</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

