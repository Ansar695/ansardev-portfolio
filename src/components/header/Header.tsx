'use client'

import { motion } from 'framer-motion'
import { CircleUser, Code, Layers, Menu, MonitorCog, Send, X } from 'lucide-react'
import { useState } from 'react';

const menus = [
  { icon: <CircleUser size={20} />, label: 'About Me', id:"aboutme" },
  { icon: <MonitorCog size={20} />, label: 'Services', id:"services" },
  { icon: <Layers size={20} />, label: 'Projects', id:"projects" },
  { icon: <Code size={20} />, label: 'Skills', id:"skills" },
  { icon: <Send size={20} />, label: 'Contact', id:"contact" }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed w-full z-50 bg-transparent backdrop-blur-sm px-10 xl:px-[90px]">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <motion.div
              animate={{
                rotate: [0, 5, 0, -5, 0],
                scale: [1, 1.05, 1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100" 
                className="w-12 h-12"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path 
                  d="M20 50 Q50 20, 80 50 T50 80 Q20 50, 50 20" 
                  fill="none" 
                  stroke="url(#logoGradient)" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                />
                <circle cx="50" cy="50" r="5" fill="url(#logoGradient)" />
              </svg>
            </motion.div>
            <h1 className="text-xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Ansar Saeed
            </h1>
          </div>

          {/* Navigation for larger screens */}
          <nav className="hidden md:flex items-center space-x-6">
            {menus?.map((item, index) => (
              <motion.a
                key={index}
                href={`#${item?.id}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center space-x-2 text-gray-300 hover:text-white hover:border-b-2 transition-colors"
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <motion.button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </header>
  )
}

