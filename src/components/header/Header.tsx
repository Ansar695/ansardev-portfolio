'use client'

import { motion } from 'framer-motion'
import { CircleUser, Code, Layers, Menu, MonitorCog, Send, X } from 'lucide-react'
import Image from 'next/image';
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
              <Image 
                src='/logo.svg'
                alt='web-logo'
                width={70}
                height={70}
              />
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

