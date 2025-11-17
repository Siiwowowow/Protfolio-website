"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaLaptopCode, FaDatabase, FaMobile, FaCloud, FaCode } from "react-icons/fa";

const experiences = [
  {
    title: "React Native Developer",
    company: "Tesla",
    date: "Jan 2021 – Feb 2022",
    icon: <FaReact className="text-cyan-400 text-xl" />,
    details: [
      "Developing mobile applications using React Native",
      "Collaborating with cross-functional teams",
      "Implementing responsive UI components",
      "Participating in code reviews",
    ],
  },
  {
    title: "Web Developer",
    company: "Shopify",
    date: "Jan 2022 – Jan 2023",
    icon: <FaNodeJs className="text-green-400 text-xl" />,
    details: [
      "Building scalable backend with Node.js",
      "Integrating APIs and databases",
      "Working with authentication systems",
      "Creating UIs with Tailwind CSS",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    date: "Jan 2023 – Present",
    icon: <FaLaptopCode className="text-purple-400 text-xl" />,
    details: [
      "Developing websites using Next.js",
      "Managing state with Redux",
      "Integrating REST APIs",
      "Optimizing performance and SEO",
    ],
  },
  {
    title: "Backend Specialist",
    company: "Tech Solutions Inc",
    date: "Mar 2022 – Dec 2022",
    icon: <FaDatabase className="text-yellow-400 text-xl" />,
    details: [
      "Database design and optimization",
      "API development and documentation",
      "Server deployment and maintenance",
      "Performance monitoring",
    ],
  },
  {
    title: "Mobile App Developer",
    company: "AppWorks",
    date: "Jun 2021 – Nov 2022",
    icon: <FaMobile className="text-blue-400 text-xl" />,
    details: [
      "Cross-platform mobile development",
      "UI/UX implementation",
      "App store deployment",
      "Performance optimization",
    ],
  },
  {
    title: "Cloud Engineer",
    company: "CloudTech",
    date: "Aug 2022 – May 2023",
    icon: <FaCloud className="text-orange-400 text-xl" />,
    details: [
      "Cloud infrastructure management",
      "CI/CD pipeline setup",
      "Containerization with Docker",
      "AWS services implementation",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    date: "Feb 2023 – Present",
    icon: <FaCode className="text-red-400 text-xl" />,
    details: [
      "End-to-end web development",
      "Team leadership and mentoring",
      "Client requirement analysis",
      "Project deployment",
    ],
  },
];

export default function Experience() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center py-16 px-4"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
      }}
    >
      {/* Overview Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl text-center mb-12 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold  mb-4 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
          Professional Journey
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          I'm a <span className="text-cyan-400 font-medium">MERN Stack Developer</span> specializing in 
          React, Next.js, Node.js, and modern web technologies. I create interactive, 
          secure, and high-performance applications with focus on user experience.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-6xl">
        {/* Vertical Timeline Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_#00ffff] hidden md:block"
        ></motion.div>

        {/* Timeline Items */}
        <div className="space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: index * 0.1 
              }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col md:flex-row justify-between items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Experience Card */}
              <div className={`bg-[#0f172a]/80 backdrop-blur-lg border border-cyan-800/40 p-4 rounded-xl shadow-lg w-full md:w-[42%] text-gray-200 hover:scale-[1.02] transition-all duration-300 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}>
                <div className="flex items-center gap-3 md:hidden mb-3">
                  <div className="bg-[#111827] border-2 border-cyan-500 rounded-full p-2 shadow-[0_0_15px_#00ffff]">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                    <p className="text-sm text-cyan-400">{exp.company}</p>
                    <p className="text-xs text-gray-400 mt-1">{exp.date}</p>
                  </div>
                </div>

                <div className="hidden md:block">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-cyan-400 mb-2">{exp.company}</p>
                  <p className="text-xs text-gray-400 mb-3">{exp.date}</p>
                </div>

                <ul className={`text-xs text-gray-400 space-y-1.5 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}>
                  {exp.details.map((d, i) => (
                    <li key={i} className="leading-relaxed">• {d}</li>
                  ))}
                </ul>
              </div>

              {/* Center Icon (Desktop) */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="hidden md:flex relative flex-col items-center z-10"
              >
                <div className="bg-[#111827] border-3 border-cyan-500 rounded-full p-3 shadow-[0_0_20px_#00ffff] hover:scale-110 transition-transform duration-300">
                  {exp.icon}
                </div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-gray-400 text-xs mt-2 font-medium bg-[#0f172a] px-2 py-1 rounded-full border border-cyan-800/30"
                >
                  {exp.date}
                </motion.span>
              </motion.div>

              {/* Spacer for desktop layout */}
              <div className="hidden md:block w-[42%]"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full blur-sm opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full blur-sm opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full blur-sm opacity-30 animate-pulse delay-500"></div>
      </div>
    </section>
  );
}