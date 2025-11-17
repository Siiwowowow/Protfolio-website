"use client";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectsCarousel() {
  const [projects, setProjects] = useState([]);
  const [stopScroll, setStopScroll] = useState(false);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  if (!projects.length) return null;

  const marqueeProjects = [...projects, ...projects];

  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden py-16">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #000000 40%, #16222a 100%)",
        }}
      />

      {/* Section Title */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Here are some of my recent projects that showcase my skills in modern web development. 
          Each project represents my passion for creating clean, efficient, and user-friendly applications.
        </p>
      </div>

      {/* Marquee Carousel */}
      <div
        className="overflow-hidden relative z-10 max-w-[90%] mx-auto"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent" />

        {/* Marquee Inner */}
        <div
          className="flex animate-marquee gap-6"
          style={{
            animationPlayState: stopScroll ? "paused" : "running",
            animationDuration: `${marqueeProjects.length * 3000}ms`,
          }}
        >
          {marqueeProjects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="w-72 rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/80 relative"
              style={{
                background: "linear-gradient(135deg, #16222a 0%, #0a141c 50%, #16222a 100%)",
                boxShadow: "0 0 20px rgba(58, 96, 115, 0.15), 0 0 40px rgba(58, 96, 115, 0.1)",
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{
                     background: "radial-gradient(circle at center, rgba(58, 96, 115, 0.2) 0%, transparent 70%)",
                     boxShadow: "0 0 60px rgba(58, 96, 115, 0.3)",
                   }} 
              />
              
              {/* Image */}
              <div className="relative z-10">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full p-2 rounded-2xl h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                  {p.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                  {p.overview}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.techStack?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-cyan-900/40 border border-cyan-500/30 text-cyan-200 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={p.liveLink}
                    target="_blank"
                    className="flex items-center gap-1 bg-cyan-600/40 hover:bg-cyan-600/60 px-3 py-1 rounded-md text-cyan-200 text-sm font-medium transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/60"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={p.githubLink || p.githubClient}
                    target="_blank"
                    className="flex items-center gap-1 bg-gray-800/40 hover:bg-gray-700/60 px-3 py-1 rounded-md text-gray-200 text-sm font-medium transition-all duration-300 border border-gray-600/30 hover:border-gray-400/60"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
}