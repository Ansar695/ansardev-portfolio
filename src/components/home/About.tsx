// /* eslint-disable @typescript-eslint/no-explicit-any */
// 'use client'

// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Code, 
//   Server, 
//   Database, 
//   Award 
// } from 'lucide-react';

// // Skill Card Component
// const SkillCard = ({ icon: Icon, title, description }) => (
//   <motion.div
//     whileHover={{ 
//       scale: 1.05,
//       boxShadow: "0px 10px 20px rgba(134, 94, 255, 0.2)"
//     }}
//     className="bg-slate-800 p-6 rounded-xl border border-slate-700 transform transition-all duration-300 group"
//   >
//     <div className="flex items-center mb-4">
//       <div className="bg-purple-500/20 p-3 rounded-full mr-4">
//         <Icon 
//           className="text-purple-400 group-hover:text-purple-300 transition-colors" 
//           size={28} 
//         />
//       </div>
//       <h3 className="text-xl font-semibold text-white">{title}</h3>
//     </div>
//     <p className="text-gray-400 text-sm leading-relaxed">
//       {description}
//     </p>
//   </motion.div>
// );

// // Professional Experience Timeline
// const ExperienceTimeline = () => (
//   <div className="relative pl-8 mt-8">
//     {[
//       { 
//         period: "2022 - Present", 
//         title: "Senior Full Stack Developer",
//         company: "Tech Innovations Inc.",
//         description: "Leading complex web application development using MERN stack."
//       },
//       { 
//         period: "2020 - 2022", 
//         title: "Web Developer",
//         company: "Digital Solutions LLC",
//         description: "Developed scalable web applications and implemented robust backend services."
//       }
//     ].map((exp, index) => (
//       <div 
//         key={index} 
//         className="relative border-l-2 border-purple-500 pl-6 pb-8"
//       >
//         <div className="absolute -left-[26px] top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
//         <div className="bg-slate-800 p-4 rounded-lg">
//           <h4 className="text-white font-semibold text-lg">{exp.title}</h4>
//           <p className="text-purple-400 text-sm mb-2">{exp.company}</p>
//           <p className="text-gray-400 text-sm">{exp.period}</p>
//           <p className="text-gray-300 mt-2">{exp.description}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// );

// export default function AboutSection() {
//   const skills = [
//     {
//       icon: Code,
//       title: "Frontend Development",
//       description: "Crafting responsive and interactive user interfaces using React, Next.js, and modern web technologies."
//     },
//     {
//       icon: Server,
//       title: "Backend Development",
//       description: "Building scalable server-side applications with Node.js, Express, and robust API architectures."
//     },
//     {
//       icon: Database,
//       title: "Database Management",
//       description: "Designing efficient database schemas and optimizing data storage with MongoDB and PostgreSQL."
//     }
//   ];

//   return (
//     <section className="bg-slate-900 text-white py-20 px-4 overflow-hidden xl:px-[100px]">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             About Me
//           </h2>
//           <p className="text-gray-400 max-w-3xl mx-auto">
//             A passionate Full Stack Developer with a keen eye for creating efficient, scalable, and user-friendly web applications. I transform complex problems into elegant digital solutions.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Personal Introduction */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6 bg-slate-800 p-8 rounded-xl"
//           >
//             <div className="flex items-center mb-6">
//               <Award className="text-purple-500 mr-4" size={40} />
//               <h3 className="text-2xl font-semibold">Professional Journey</h3>
//             </div>
//             <p className="text-gray-300 leading-relaxed mb-4">
//               With over 3 years of experience in web development, Ive dedicated my career to creating high-performance web applications that solve real-world challenges.
//             </p>
//             <div className="grid md:grid-cols-2 gap-4">
//               <div className="bg-slate-700 p-4 rounded-lg">
//                 <h4 className="text-purple-400 font-semibold">3+</h4>
//                 <p className="text-gray-300 text-sm">Years of Experience</p>
//               </div>
//               <div className="bg-slate-700 p-4 rounded-lg">
//                 <h4 className="text-purple-400 font-semibold">20+</h4>
//                 <p className="text-gray-300 text-sm">Projects Completed</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Skills Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
//             <h3 className="text-2xl font-semibold mb-6 text-center">
//               My Core Competencies
//             </h3>
//             <div className="grid md:grid-cols-2 gap-6">
//               {skills.map((skill: any, index: number) => (
//                 <SkillCard key={index} {...skill} />
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         {/* Experience Timeline */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mt-16"
//         >
//           <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//             Professional Experience
//           </h3>
//           <div className="max-w-3xl mx-auto">
//             <ExperienceTimeline />
//           </div>
//         </motion.div>
//       </div>

//       {/* Background Decoration */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500 rounded-full blur-3xl" />
//       </div>
//     </section>
//   );
// }