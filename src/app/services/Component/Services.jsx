'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      id: 1,
      name: 'Frontend Development',
      price: 29,
      popular: false,
      features: [
        'React.js component development',
        'Responsive UI with Tailwind CSS',
        'State management solutions',
        'Basic API integration',
        'Modern UI/UX implementation',
        'Cross-browser compatibility'
      ],
      gradient: 'from-gray-900/80 to-gray-800/80',
      border: 'border-cyan-500/20',
      icon: '⚡',
    },
    {
      id: 2,
      name: 'Full Stack Development',
      price: 79,
      popular: true,
      features: [
        'Next.js/React applications',
        'MERN stack development',
        'Database design & implementation',
        'Authentication systems',
        'API development & integration',
        'Performance optimization',
        'Deployment & hosting'
      ],
      gradient: 'from-blue-600/90 to-purple-600/90',
      border: 'border-blue-400/30',
      icon: '🚀',
    },
    {
      id: 3,
      name: 'Complete Solution',
      price: 199,
      popular: false,
      features: [
        'End-to-end web application development',
        'Custom MERN/MEAN stack solutions',
        'Enterprise-grade architecture',
        'CI/CD pipeline setup',
        'Testing & quality assurance',
        'Ongoing maintenance & support'
      ],
      gradient: 'from-gray-900/80 to-gray-800/80',
      border: 'border-purple-500/20',
      icon: '🏆',
    }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 }
    }
  }

  return (
    <section id="services" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        
        {/* Base Color */}
        <div className="absolute inset-0 bg-[#020617]" />

        {/* GRID + MAGENTA ORB BG */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#020617",
            backgroundImage: `
              linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
              radial-gradient(circle at 50% 60%, rgba(236,72,153,0.18) 0%, rgba(168,85,247,0.07) 45%, transparent 70%)
            `,
            backgroundSize: "40px 40px, 40px 40px, 100% 100%",
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

      </div>

      {/* SECTION CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Label */}
        <div className="text-center mb-4">
          <span className="text-cyan-300 text-xl font-semibold tracking-wide">
            🔧 Service Type
          </span>
        </div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-16"
        >
          Development Services
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              
              className={`relative p-8 rounded-2xl backdrop-blur-xl shadow-xl 
                border ${service.border} bg-gradient-to-br ${service.gradient}
                transition-all duration-300 flex flex-col h-full`}
            >
              
              {/* Badge */}
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 
                  bg-gradient-to-r from-blue-500 to-purple-500 text-white
                  px-5 py-1 rounded-full text-xs font-bold shadow-lg"
                >
                  ⭐ MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="text-5xl text-center mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white text-center">
                {service.name}
              </h3>

              {/* MERN Developer Text */}
              <p className="text-center text-gray-300 text-sm mt-2 mb-5 px-3">
                I am a <span className="text-cyan-300 font-semibold">MERN Stack Developer</span>  
                specializing in scalable & high-performance web applications.
              </p>

              {/* PRICE */}
              <div className="text-center mb-6">
                <span className="text-5xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  ${service.price}
                </span>
                <span className="text-gray-400 text-lg">/hour</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-1">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex gap-2 text-gray-300 text-sm">
                    <span className="text-cyan-300">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA BUTTON */}
              <Link href="/Contract" className="mt-auto">
                <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all">
                  Get Started
                </button>
              </Link>

              <p className="text-center text-xs text-gray-400 mt-4">
                Flexible Hours • Project-Based Work ⭐
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
