'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CircleUser, Code, Layers, MonitorCog, Send, X } from 'lucide-react'
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
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

          {/* Animated Hamburger Button */}
          <motion.button 
            className="md:hidden relative z-50 p-2"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.div
                className="w-6 h-0.5 bg-white mb-1"
                animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-white mb-1"
                animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-white"
                animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
            className="fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 shadow-2xl z-50 md:hidden"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-3">
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
                    width={40}
                    height={40}
                  />
                </motion.div>
                <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Menu
                </h2>
              </div>
              <motion.button
                onClick={closeMenu}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <X size={24} className="text-white" />
              </motion.button>
            </div>

            {/* Drawer Navigation */}
            <nav className="p-6">
              <ul className="space-y-2">
                {menus.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 100
                    }}
                  >
                    <motion.a
                      href={`#${item.id}`}
                      onClick={closeMenu}
                      whileHover={{ 
                        scale: 1.02,
                        x: 5
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800/50 text-gray-300 hover:text-white transition-all duration-300 group"
                    >
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="text-purple-400 group-hover:text-pink-400 transition-colors"
                      >
                        {item.icon}
                      </motion.div>
                      <span className="text-lg font-medium">{item.label}</span>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="ml-auto text-purple-400"
                      >
                        →
                      </motion.div>
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Drawer Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <p className="text-gray-400 text-sm">
                  © 2025 Ansar Saeed
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Fullstack Web Developer
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}