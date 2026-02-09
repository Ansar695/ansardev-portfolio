/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "@/utils/myWorkData";
import { Button } from "../ui/button";

const categories = ["All", "ReactJS", "NextJS", "MERN"];

// const projects = [
//     { id: 1, title: 'E-commerce Platform', category: 'Web', image: '/assets/bg1.jpg' },
//     { id: 2, title: 'Fitness Tracking App', category: 'Mobile', image: '/assets/bg2.jpg' },
//     { id: 3, title: 'Corporate Branding', category: 'Design', image: '/assets/bg3.jpg' },
//     { id: 4, title: 'Social Media Dashboard', category: 'Web', image: '/assets/bg1.jpg' },
//     { id: 5, title: 'Restaurant Booking App', category: 'Mobile', image: '/assets/bg2.jpg' },
//     { id: 6, title: 'Product Packaging', category: 'Design', image: '/assets/bg3.jpg' },
//   ]

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [loadAll, setLoadAll] = useState(false);

  const filteredProjects = projects
    .slice(0, loadAll ? 50 : 9)
    .filter(
      (project) =>
        activeCategory === "All" || project.category === activeCategory
    );

  const paginationHandler = () => {
    setLoadAll(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      id="projects"
    >
      {/* Background accent glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4 xl:px-[100px]">
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          My Work
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`mx-2 px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
                className="bg-slate-800/50 rounded-xl overflow-hidden shadow-lg cursor-pointer border border-slate-700 hover:border-purple-600/50 transition-all group"
                onClick={() => {
                  if (project?.link) {
                    window.open(project?.link, "_blank");
                  }
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="p-4 bg-gradient-to-b from-slate-800/50 to-slate-900">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {project?.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{project?.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      {!loadAll && <div className="w-full flex items-center justify-center mt-8">
        <Button
          size="lg"
          variant="outline"
          className="w-full max-w-[280px] mx-auto h-12 bg-transparent border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all"
          onClick={paginationHandler}
        >
          Load All
        </Button>
      </div>}
    </motion.section>
  );
}
