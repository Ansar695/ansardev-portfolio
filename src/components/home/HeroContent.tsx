"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { myStaticData } from "@/utils/MyStaticData";
import Link from "next/link";

export const socialsLink = [
    {
      icon: Linkedin,
      link: 'https://www.linkedin.com/in/ansar-saeed-sial-a02019244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      icon: Github,
      link: 'https://github.com/Ansar695'
    },
    {
      icon: Mail,
      link: 'mailto:ansarsaeed988@gmail.com'
    }
  ]

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
          className="text-2xl font-semibold mb-2 text-purple-400"
        >
          Hello, {"I'm"}
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-rose-400"
        >
          Ansar Saeed
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xl mb-6 text-pink-300"
        >
          MERN Stack Developer | 4 Years Experience
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-gray-300 mb-8 max-w-[1000px]"
        >
          {myStaticData.profile}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
        >
          <Link href="/assets/my-portfolio.pdf" download target="_blank">
          <Button
            size="lg"
            variant="outline"
            className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-semibold transition-all duration-300"
          >
            Download Resume
          </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex justify-center lg:justify-start mt-8 gap-6"
        >
          {socialsLink.map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-gray-400 hover:text-pink-500 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={Icon?.link} target="_blank">
                <Icon.icon size={24} />
              </Link>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <div>
        
            <Image
              src="/me.png"
              alt="Ansar Saeed"
              width={450}
              height={450}
              className="w-[350px] h-[400px] rounded-xl object-cover"
            />
      </div>
    </>
  );
}
