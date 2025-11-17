'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCode, 
  FaExternalLinkAlt,
  FaGithub,
  FaArrowLeft,
  FaEye,
  FaBrain,
  FaShieldAlt,
  FaRocket,
  FaLayerGroup,
  FaPalette,
  FaLightbulb,
  FaStar,
  FaFire,
  FaMagic,
  FaMobile,
  FaDatabase,
  FaCloud,
  FaUsers,
  FaChartLine,
  FaLock,
  FaBolt,
  FaServer,
  FaCogs,
  FaGlobe,
  FaSync,
  FaPlug,
  FaShield,
  FaRobot,
  FaCog,
  FaNetworkWired,
  FaInfinity
} from 'react-icons/fa';
import ss from '../../../../public/ss.png';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setMounted(true);
  }, []);

  const projectFeatures = {
    productivity: { icon: <FaBolt />, color: 'from-emerald-400 to-cyan-400' },
    management: { icon: <FaUsers />, color: 'from-orange-400 to-red-400' },
    social: { icon: <FaGlobe />, color: 'from-purple-400 to-pink-400' },
    education: { icon: <FaChartLine />, color: 'from-blue-400 to-cyan-400' }
  };

  const techIcons = {
    'React': <FaCode />,
    'Node.js': <FaServer />,
    'MongoDB': <FaDatabase />,
    'JWT': <FaLock />,
    'Firebase': <FaCloud />,
    'Stripe': <FaPlug />,
    'Tailwind': <FaPalette />,
    'Redux': <FaSync />,
    'Chat': <FaUsers />,
    'MERN Stack': <FaNetworkWired />,
    'Full Stack': <FaCogs />
  };

  const projects = [
    {
      name: 'Food Expiry Tracker',
      overview: 'Smart food tracking with predictive alerts to reduce waste through intelligent analytics.',
      imageUrl: 'https://i.postimg.cc/Wb2JdXjs/Screenshot-1.png',
      liveLink: 'https://food-tracker-auth.web.app/',
      githubLink: 'https://github.com/Siiwowowow/Food-Tracker',
      techStack: ['React', 'Node.js', 'MongoDB', 'JWT'],
      challenges: ['Real-time notifications', 'Predictive algorithms', 'Data security'],
      futurePlans: ['Barcode scanner', 'Recipe engine', 'Social features'],
      features: ['AI Predictions', 'Real-time Tracking', 'Smart Alerts', 'Analytics Dashboard'],
      screenshots: [ss],
      icon: '🥑',
      category: 'Productivity',
      status: 'Live',
      color: 'from-emerald-400 to-cyan-400',
      accentColor: 'emerald',
      complexity: 'Advanced',
      timeline: '3 months'
    },
    {
      name: 'Sports Club System',
      overview: 'Complete platform for membership, bookings, payments, and admin management.',
      imageUrl: 'https://i.postimg.cc/JhRFvwWh/Screenshot-3.png',
      liveLink: 'https://a-12-sport-org.web.app/',
      githubLink: 'https://github.com/Siiwowowow/SPORTS-CLUB-MANAGEMENT-SYSTEM',
      techStack: ['React', 'Firebase', 'Stripe', 'Tailwind'],
      challenges: ['Multi-role access', 'Payment integration', 'Booking system'],
      futurePlans: ['Tournaments', 'Community', 'Analytics'],
      features: ['Multi-role System', 'Payment Gateway', 'Booking Management', 'Admin Dashboard'],
      screenshots: [ss],
      icon: '💪',
      category: 'Management',
      status: 'Live',
      color: 'from-orange-400 to-red-400',
      accentColor: 'orange',
      complexity: 'Intermediate',
      timeline: '2 months'
    },
    {
      name: 'Roommate Finder',
      overview: 'AI-powered platform connecting compatible roommates through smart matching.',
      imageUrl: 'https://i.postimg.cc/WzSmdyHp/Screenshot-5.png',
      liveLink: 'https://room-mate-auth.web.app/',
      githubLink: 'https://github.com/Siiwowowow/Room-Mate-Finder',
      techStack: ['React', 'Firebase', 'Redux', 'Chat'],
      challenges: ['Secure auth', 'Real-time chat', 'Search optimization'],
      futurePlans: ['AI matching', 'Group housing', 'Mobile app'],
      features: ['AI Matching', 'Real-time Chat', 'Secure Authentication', 'Smart Search'],
      screenshots: [ss],
      icon: '🏠',
      category: 'Social',
      status: 'Live',
      color: 'from-purple-400 to-pink-400',
      accentColor: 'purple',
      complexity: 'Advanced',
      timeline: '4 months'
    },
    {
      name: 'Student Toolkit',
      overview: 'All-in-one MERN platform for student productivity and organization.',
      imageUrl: 'https://i.postimg.cc/PrsnyRJ0/Screenshot-4.png',
      liveLink: 'https://student-toolkit-17af6.web.app/',
      githubClient: 'https://github.com/Siiwowowow/Student-toolkit-rep-client',
      githubServer: 'https://github.com/Siiwowowow/Student-toolkit-real-server',
      techStack: ['MERN Stack', 'Tailwind', 'Full Stack'],
      challenges: ['Multi-tool integration', 'CRUD operations', 'Dashboard design'],
      futurePlans: ['AI suggestions', 'Collaboration', 'Mobile version'],
      features: ['Multi-tool Platform', 'CRUD Operations', 'Dashboard Analytics', 'Task Management'],
      screenshots: [ss],
      icon: '🎓',
      category: 'Education',
      status: 'Live',
      color: 'from-blue-400 to-cyan-400',
      accentColor: 'blue',
      complexity: 'Intermediate',
      timeline: '3 months'
    },
    {
  name: 'E-Commerce Website',
  overview: 'Modern full-stack E-Commerce platform built with Next.js, featuring dynamic products, user authentication, secure checkout, and an optimized shopping experience.',
  imageUrl: 'https://i.postimg.cc/WbbPFJyP/Screenshot-2.png',
  liveLink: 'https://next-ecommerce-website-chi.vercel.app/',
  githubClient: 'https://github.com/Siiwowowow/nextjs-rafs_san_mart',
  githubServer: null, // If no server repo, keep null or remove
  techStack: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Full Stack'],
  challenges: [
    'Product management & dynamic filtering',
    'User authentication & secure login system',
    'Database integration with MongoDB',
    'Responsive UI & optimized performance'
  ],
  futurePlans: [
    'Payment Gateway Integration (Stripe)',
    'Admin Dashboard for Products & Orders',
    'User Order History & Wishlist',
    'Enhanced SEO & analytics tracking'
  ],
  features: [
    'Dynamic Product Listing',
    'Product Details Page',
    'User Authentication (Signup & Login)',
    'Add to Cart System',
    'Responsive & Modern UI',
    'MongoDB Database Integration'
  ],
  screenshots: [ss], 
  icon: '🛒',
  category: 'E-Commerce',
  status: 'Live',
  color: 'from-pink-500 to-orange-400',
  accentColor: 'orange',
  complexity: 'Intermediate',
  timeline: '2.5 months'
}

  ];

  const filters = [
    { id: 'all', label: 'All', icon: <FaLayerGroup /> },
    { id: 'productivity', label: 'Productivity', icon: <FaBolt /> },
    { id: 'management', label: 'Management', icon: <FaUsers /> },
    { id: 'social', label: 'Social', icon: <FaGlobe /> },
    { id: 'education', label: 'Education', icon: <FaChartLine /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter);

  if (!mounted) return null;

  return (
    <section id="projects" className="min-h-screen w-full bg-black relative overflow-hidden py-8 px-4 sm:px-6">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Tech Icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/20 text-2xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {Object.values(techIcons)[i % Object.values(techIcons).length]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-blue-500/20 shadow-lg"
            whileHover={{ scale: 1.02 }}
          >
            <FaCode className="text-cyan-400 text-sm" />
            <span className="text-cyan-300 font-medium text-sm">Featured Projects</span>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          >
            My Projects
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Building digital solutions with modern technology and creative design. 
            Each project represents my passion for creating clean, efficient, and user-friendly applications.
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 backdrop-blur-sm ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {filter.icon}
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div
              key="details"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectDetails 
                project={selectedProject} 
                onBack={() => setSelectedProject(null)}
                techIcons={techIcons}
              />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={index} 
                  project={project} 
                  index={index}
                  onSelect={setSelectedProject}
                  techIcons={techIcons}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onSelect, techIcons }) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const bounds = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        show: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 12,
            delay: index * 0.1
          }
        }
      }}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 400 }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer w-80 h-96" // Fixed size for all cards
    >
      {/* Glowing Border Effect */}
      <div className="relative w-full h-full rounded-2xl p-px bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 backdrop-blur-md overflow-hidden shadow-2xl">
        {/* Animated Gradient Blob */}
        <div 
          className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300 size-60 absolute z-0 transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            top: position.y - 120, 
            left: position.x - 120,
          }}
        />
        
        {/* Main Card Content */}
        <div className="relative z-10 bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-2 h-full w-full rounded-[15px] flex flex-col backdrop-blur-sm">
          
          {/* Gradient Accent */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />
          
          {/* Image Container */}
          <div className="relative h-40 mb-4 rounded-xl overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.name}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            
            {/* Project Icon */}
            <motion.div 
              className="absolute top-2 left-2 text-xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {project.icon}
            </motion.div>

            {/* Status & Complexity Badges */}
            <div className="absolute top-2 right-2 flex flex-col gap-1">
              <motion.span 
                className="px-2 py-1 bg-green-500/20 backdrop-blur-sm text-green-300 text-xs font-medium rounded-full border border-green-500/30"
                whileHover={{ scale: 1.05 }}
              >
                {project.status}
              </motion.span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <motion.h3 
                className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 flex-1"
                whileHover={{ x: 2 }}
              >
                {project.name}
              </motion.h3>
              <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30 ml-2">
                {project.category}
              </span>
            </div>
            
            <p className="text-gray-300 text-xs mb-3 leading-relaxed line-clamp-2 flex-1">
              {project.overview}
            </p>

            {/* Tech Stack with Icons */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-1 px-2 py-1 bg-white/5 text-cyan-200 text-xs rounded-lg border border-cyan-500/20"
                >
                  {techIcons[tech] || <FaCode />}
                  <span className="text-xs">{tech}</span>
                </motion.span>
              ))}
            </div>

            {/* Project Features */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.features.slice(0, 2).map((feature, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="px-2 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20"
                >
                  {feature}
                </motion.span>
              ))}
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-2 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm mt-auto`}
              onClick={() => onSelect(project)}
            >
              <span>Explore</span>
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaEye className="text-xs" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Outer Glow Effect */}
      <motion.div 
        className={`absolute -inset-2 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity duration-500 -z-10`}
        animate={{ opacity: isHovered ? 0.2 : 0 }}
      />
    </motion.div>
  );
}

// ProjectDetails component remains the same as before
function ProjectDetails({ project, onBack, techIcons }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [imageLoaded, setImageLoaded] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <FaLightbulb /> },
    { id: 'features', label: 'Features', icon: <FaStar /> },
    { id: 'tech', label: 'Technology', icon: <FaCogs /> },
    { id: 'challenges', label: 'Challenges', icon: <FaBrain /> },
    { id: 'future', label: 'Future Plans', icon: <FaRocket /> },
  ];

  const featureIcons = [
    <FaBolt />,
    <FaSync />,
    <FaShieldAlt />,
    <FaChartLine />,
    <FaUsers />,
    <FaRobot />
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl border border-cyan-500/20 shadow-2xl p-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          whileHover={{ scale: 1.02, x: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 mb-6 transition-colors group text-sm backdrop-blur-sm bg-white/5 px-4 py-2 rounded-xl border border-cyan-500/20"
        >
          <motion.div
            animate={{ x: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaArrowLeft className="text-sm" />
          </motion.div>
          <span>Back to Projects</span>
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image & Actions Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative h-80 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl">
              <Image
                src={project.imageUrl}
                alt={project.name}
                fill
                className={`object-cover transition-all duration-500 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
                onLoad={() => setImageLoaded(true)}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 animate-pulse" />
              )}
              
              {/* Overlay Content */}
              <div className="absolute top-4 left-4 text-3xl">
                {project.icon}
              </div>

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Project Metadata */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/5 rounded-xl p-3 border border-cyan-500/10">
                <FaInfinity className="text-cyan-400 mx-auto mb-2 text-lg" />
                <p className="text-cyan-300 font-semibold text-sm">Status</p>
                <p className="text-white text-xs">{project.status}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-blue-500/10">
                <FaBolt className="text-blue-400 mx-auto mb-2 text-lg" />
                <p className="text-blue-300 font-semibold text-sm">Complexity</p>
                <p className="text-white text-xs">{project.complexity}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 border border-green-500/10">
                <FaChartLine className="text-green-400 mx-auto mb-2 text-lg" />
                <p className="text-green-300 font-semibold text-sm">Timeline</p>
                <p className="text-white text-xs">{project.timeline}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`py-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/20`}
              >
                <FaExternalLinkAlt className="text-xs" />
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubLink || project.githubClient}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="py-4 bg-gray-800 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-gray-600/50 hover:border-gray-500"
              >
                <FaGithub className="text-xs" />
                Source Code
              </motion.a>
            </div>

            {/* Additional Links */}
            {project.githubServer && (
              <motion.a
                href={project.githubServer}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.01 }}
                className="block py-3 bg-blue-500/10 text-blue-300 rounded-xl font-medium text-sm text-center border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
              >
                <FaServer className="inline mr-2 text-xs" />
                Backend Repository
              </motion.a>
            )}
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <motion.h1 
                className="text-2xl lg:text-3xl font-bold text-white mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {project.name}
              </motion.h1>
              <motion.div 
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full">
                  {project.status}
                </span>
              </motion.div>
            </div>

            {/* Tabs */}
            <motion.div 
              className="border-b border-cyan-500/20 pb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-wrap gap-1">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-4 py-3 text-xs font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm ${
                      activeTab === tab.id
                        ? `bg-gradient-to-r ${project.color} text-white shadow-md`
                        : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.overview}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                          <FaCode className="text-2xl text-cyan-400 mx-auto mb-2" />
                          <p className="text-white font-semibold text-sm">Full Stack</p>
                          <p className="text-cyan-300 text-xs">Development</p>
                        </div>
                        <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                          <FaShieldAlt className="text-2xl text-green-400 mx-auto mb-2" />
                          <p className="text-white font-semibold text-sm">Secure</p>
                          <p className="text-green-300 text-xs">Architecture</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'features' && (
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="p-3 bg-white/5 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                        >
                          <div className="flex items-center gap-2">
                            <div className="text-cyan-400 text-sm">
                              {featureIcons[i] || <FaStar />}
                            </div>
                            <p className="text-white font-medium text-sm">{feature}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'tech' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {project.techStack.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-3 bg-white/5 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 group"
                          >
                            <div className="flex items-center gap-2">
                              <div className="text-blue-400 text-sm group-hover:scale-110 transition-transform">
                                {techIcons[tech] || <FaCode />}
                              </div>
                              <p className="text-white font-medium text-sm">{tech}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'challenges' && (
                    <div className="space-y-3">
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-orange-500/10 rounded-xl border border-orange-500/20"
                          >
                            <FaBrain className="text-orange-400 mt-0.5 flex-shrink-0 text-sm" />
                            <span className="text-gray-300 text-sm">{challenge}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === 'future' && (
                    <div className="space-y-3">
                      <ul className="space-y-2">
                        {project.futurePlans.map((plan, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 p-3 bg-purple-500/10 rounded-xl border border-purple-500/20"
                          >
                            <FaRocket className="text-purple-400 mt-0.5 flex-shrink-0 text-sm" />
                            <span className="text-gray-300 text-sm">{plan}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}