'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import profileImg from "../../../../public/profile.jpg";
import qrCodeImg from "../../../../public/qrcode.png";

import { 
  FaCode, 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaPalette,
  FaMobile,
  FaRocket,
  FaUserTie,
  FaProjectDiagram,
  FaUsers,
  FaPeopleCarry
} from "react-icons/fa";

export default function About() {

  const skills = [
    { name: "React.js", icon: <FaReact className="text-2xl" />, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: <FaRocket className="text-2xl" />, color: "from-white to-gray-300" },
    { name: "JavaScript", icon: <FaCode className="text-2xl" />, color: "from-yellow-400 to-orange-500" },
    { name: "Tailwind CSS", icon: <FaPalette className="text-2xl" />, color: "from-cyan-400 to-teal-500" },
    { name: "Node.js", icon: <FaNodeJs className="text-2xl" />, color: "from-green-500 to-emerald-600" },
    { name: "MongoDB", icon: <FaDatabase className="text-2xl" />, color: "from-green-400 to-emerald-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Magenta Grid Background */}
        <div
          className="absolute inset-0"
          style={{
            background: "#020617",
            backgroundImage: `
              linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
              radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
            `,
            backgroundSize: "40px 40px, 40px 40px, 100% 100%",
          }}
        />

        {/* Emerald Void */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #072607 100%)",
          }}
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Big Glow Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          

          <h1 className="text-5xl font-bold mt-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-2">
            Get to know the person behind the code and the passion behind the projects
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >

          {/* PROFILE IMAGE + QR */}
          <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-start">
            <div className="relative">

              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-2xl"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-orange-400 shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src={profileImg}
                    alt="Sajjadur Rahman Fahim"
                    className="object-cover"
                    width={320}
                    height={320}
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
              </motion.div>

              {/* FLOAT ICON */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <FaCode className="text-white text-xl" />
              </motion.div>

              {/* QR CODE */}
              <div className="mt-8 text-center">
                <h3 className="text-white text-lg font-semibold mb-3">📱 Scan to Save Contact</h3>

                <div className="flex justify-center">
                  <div className="bg-white p-3 rounded-xl shadow-md border border-emerald-400/20">
                    <Image
                      src={qrCodeImg}
                      alt="QR Code"
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <p className="text-gray-400 text-xs mt-2">
                  Open your camera and scan the code
                </p>
              </div>
            </div>
          </motion.div>

          {/* ABOUT CONTENT */}
          <motion.div variants={itemVariants} className="space-y-6">

            <h2 className="text-4xl font-bold text-white">
              Hello! I'm{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Sajjadur Rahman Fahim
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              A passionate full-stack developer crafting modern web applications using the{" "}
              <span className="text-emerald-300 font-semibold">MERN stack</span> and{" "}
              <span className="text-emerald-300 font-semibold">Next.js</span>.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I enjoy building sleek UIs, integrating scalable backends, and optimizing performance 
              for smooth user experiences.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Outside coding, I enjoy football, photography, and UI/UX design exploration.
            </p>

            {/* SKILLS */}
            <div className="pt-6">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Technologies I Work With
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-r ${skill.color} rounded-xl p-4 text-black shadow-md`}
                  >
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="font-semibold text-sm">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* COUNTER SECTION */}
            <div className="pt-10">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Achievements & Experience
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">

                {/* Years */}
                <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl bg-white/5 border border-pink-500/20 shadow-md text-center">
                  <FaUserTie className="text-pink-400 text-3xl mx-auto mb-2" />
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                    <CountUp end={1} duration={2.5} />
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">Years Experience</p>
                </motion.div>

                {/* Projects */}
                <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl bg-white/5 border border-pink-500/20 shadow-md text-center">
                  <FaProjectDiagram className="text-pink-400 text-3xl mx-auto mb-2" />
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                    <CountUp end={20} duration={2.5} />
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">Projects Completed</p>
                </motion.div>

                {/* Clients */}
                <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl bg-white/5 border border-pink-500/20 shadow-md text-center">
                  <FaUsers className="text-pink-400 text-3xl mx-auto mb-2" />
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                    <CountUp end={18} duration={2.5} />
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">Clients Worked</p>
                </motion.div>

                {/* Group */}
                <motion.div whileHover={{ scale: 1.05 }} className="p-6 rounded-2xl bg-white/5 border border-pink-500/20 shadow-md text-center">
                  <FaPeopleCarry className="text-pink-400 text-3xl mx-auto mb-2" />
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                    <CountUp end={2} duration={2.5} />
                  </h3>
                  <p className="text-gray-300 text-sm mt-1">Group Projects</p>
                </motion.div>

              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
