'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from 'lucide-react'
import Link from 'next/link'

const footerVariants = {
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

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const socialIcons = [
  { Icon: Facebook, href: '#' },
  { Icon: Twitter, href: '#' },
  { Icon: Instagram, href: '#' },
  { Icon: Linkedin, href: '#' },
  { Icon: Github, href: '#' },
  { Icon: Mail, href: '#' },
]

export default function AnimatedFooter() {
  return (
    <motion.footer 
      className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-12 xl:px-[100px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={childVariants}>
          <div>
            <motion.h3 className="text-2xl font-bold mb-4" variants={childVariants}>About Me</motion.h3>
            <motion.p className="text-gray-300" variants={childVariants}>
              I am a passionate MERN stack developer with 3 years of experience. I love creating innovative web solutions and bringing ideas to life.
            </motion.p>
          </div>
          <div>
            <motion.h3 className="text-2xl font-bold mb-4" variants={childVariants}>Quick Links</motion.h3>
            <motion.ul className="space-y-2" variants={childVariants}>
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.li key={item} variants={childVariants}>
                  <Link href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div>
            <motion.h3 className="text-2xl font-bold mb-4" variants={childVariants}>Connect</motion.h3>
            <motion.div className="flex space-x-4" variants={childVariants}>
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  variants={childVariants}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="mt-8 pt-8 border-t border-purple-700 text-center"
          variants={childVariants}
        >
          <p className="text-gray-300">
            © {new Date().getFullYear()} Ansar Saeed. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

