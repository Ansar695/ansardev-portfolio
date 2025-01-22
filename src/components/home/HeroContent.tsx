"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function HeroContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold mb-2 text-purple-300"
        >
          Hello, {"I'm"}
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Ansar Saeed
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-6 text-indigo-300"
        >
          MERN Stack Developer | 3 Years Experience
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gray-300 mb-8 max-w-[1000px]"
        >
          I’m a passionate MERN Stack Developer with over 3 years of hands-on
          experience in building scalable, efficient, and user-friendly web
          applications. I thrive in collaborative environments, where I work
          closely with teams to deliver high-quality solutions that meet tight
          deadlines. Whether leading projects or contributing as a team member,
          I’m dedicated to turning innovative ideas into seamless digital
          experiences. Let’s work together to bring your vision to life!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
        >
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Explore My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white"
          >
            Download Resume
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex justify-center lg:justify-start mt-8 gap-6"
        >
          {[Github, Linkedin, Mail].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center relative"
      >
        <div className="relative">
          <motion.div
            animate={{
              rotate: [0, 5, 0, -5, 0],
              scale: [1, 1.05, 1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl"
          >
            <Image
              src="/assets/me3.jpeg"
              alt="Ansar Saeed"
              width={400}
              height={400}
              className="w-[400px] h-[500px] rounded-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -top-4 -right-4 bg-pink-600 text-white p-3 rounded-full shadow-lg"
          >
            <code className="text-sm font-bold">{"{ }"}</code>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
