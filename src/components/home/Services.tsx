'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Server, 
  Smartphone, 
  Cloud 
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0px 15px 30px rgba(134, 94, 255, 0.2)"
    }}
    className="bg-slate-800 p-6 rounded-xl border border-slate-700 group"
  >
    <div className="flex items-center mb-4">
      <div className="bg-purple-500/20 p-3 rounded-full mr-4">
        <Icon 
          className="text-purple-400 group-hover:text-purple-300 transition-colors" 
          size={32} 
        />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed">
      {description}
    </p>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors"
    >
      Learn More
    </motion.button>
  </motion.div>
);

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web application development using modern frameworks like React, Next.js, and Vue.js, ensuring responsive and high-performance solutions."
    },
    {
      icon: Server,
      title: "Backend Solutions",
      description: "Robust backend development with Node.js, Express, and various databases, creating scalable and secure server-side architectures."
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform mobile application development using React Native, delivering native-like experiences with efficient code sharing."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure setup, deployment strategies, and CI/CD pipeline implementation to streamline development workflows."
    }
  ];

  return (
    <section className="bg-slate-900 text-white py-20 px-4 overflow-hidden xl:px-[100px]" id='services'>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            My Quality Services
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to transform your business ideas into powerful, scalable technologies.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}