"use client";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaFigma,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiPostgresql,
  SiPrisma,
  SiGraphql,
  SiGo,
} from "react-icons/si";

const skills = [
  [FaHtml5, FaCss3Alt, FaJsSquare, FaReact, SiRedux, SiTypescript, SiNextdotjs, SiTailwindcss, FaNodeJs, SiMongodb],
  [FaHtml5, FaCss3Alt, FaJsSquare, SiTailwindcss, FaReact, SiRedux, SiTypescript, SiNextdotjs],
  [FaNodeJs, SiExpress, SiFirebase, SiPostgresql, SiPrisma, SiGraphql],
  [FaReact, FaDocker, FaFigma],
  [SiGo],
];

export default function Skills() {
  return (
    <div className="min-h-screen w-full p-14 bg-[#020617] relative overflow-hidden">
      {/* Magenta Orb Grid Background */}
      <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
    }}
  />

      
      {/* Floating Orbs with Enhanced Animations */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-500 rounded-full opacity-20 animate-orb-float-1"></div>
      <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-purple-500 rounded-full opacity-15 animate-orb-float-2"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-400 rounded-full opacity-25 animate-orb-float-3"></div>
      <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-cyan-400 rounded-full opacity-20 animate-orb-float-4"></div>
      <div className="absolute bottom-1/3 right-1/5 w-4 h-4 bg-yellow-400 rounded-full opacity-15 animate-orb-float-5"></div>
      
      {/* Reverse Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-transparent to-orange-900/5 animate-gradient-shift"></div>

      {/* Content */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden z-10">
        {/* Overview Section with Reverse Gradient Text */}
        <div className="text-center z-10 px-4 max-w-4xl mb-12 animate-fade-in-up">
          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          {/* I am a MERN Stack Developer Text */}
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
              I am a{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                MERN Stack Developer
              </span>
            </h3>
          </div>

          {/* Technologies I Work With */}
          <div className="mb-6">
            <p className="text-lg md:text-xl text-gray-300">
              I specialize in{" "}
              <span className="text-orange-400 font-semibold animate-pulse-color">React</span>,{" "}
              <span className="text-blue-400 font-semibold animate-pulse-color" style={{animationDelay: '0.2s'}}>Next.js</span>,{" "}
              <span className="text-green-400 font-semibold animate-pulse-color" style={{animationDelay: '0.4s'}}>MongoDB</span>,{" "}
              <span className="text-yellow-400 font-semibold animate-pulse-color" style={{animationDelay: '0.6s'}}>Firebase</span>,{" "}
              <span className="text-cyan-400 font-semibold animate-pulse-color" style={{animationDelay: '0.8s'}}>Tailwind CSS</span>,{" "}
              <span className="text-red-400 font-semibold animate-pulse-color" style={{animationDelay: '1s'}}>JWT</span>,{" "}
              <span className="text-purple-400 font-semibold animate-pulse-color" style={{animationDelay: '1.2s'}}>Express.js</span>,{" "}
              <span className="text-gray-300 font-semibold animate-pulse-color" style={{animationDelay: '1.4s'}}>Node.js</span>
              
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            I love building full-stack applications using modern web technologies.  
            My skillset includes front-end frameworks, back-end development, databases,  
            and tools that help me design, deploy, and maintain scalable web solutions.
          </p>
        </div>

        {/* Skills Icons with Enhanced Animations */}
        <div className="z-10 space-y-8">
          {skills.map((row, i) => (
            <div key={i} className="flex justify-center gap-4 md:gap-8 lg:gap-10 flex-wrap">
              {row.map((Icon, j) => (
                <div
                  key={j}
                  className="group relative"
                >
                  <div className={`text-3xl md:text-4xl lg:text-5xl animate-icon-float transition-all duration-500 hover:scale-125 relative z-10`}
                       style={{animationDelay: `${(i * 0.5) + (j * 0.1)}s`}}>
                    <Icon
                      color={
                        Icon === FaHtml5
                          ? "#E34F26"
                          : Icon === FaCss3Alt
                          ? "#1572B6"
                          : Icon === FaJsSquare
                          ? "#F7DF1E"
                          : Icon === FaReact
                          ? "#61DBFB"
                          : Icon === SiRedux
                          ? "#764ABC"
                          : Icon === SiTypescript
                          ? "#3178C6"
                          : Icon === SiNextdotjs
                          ? "#ffffff"
                          : Icon === SiTailwindcss
                          ? "#38BDF8"
                          : Icon === FaNodeJs
                          ? "#68A063"
                          : Icon === SiMongodb
                          ? "#47A248"
                          : Icon === SiExpress
                          ? "#ffffff"
                          : Icon === SiFirebase
                          ? "#FFCA28"
                          : Icon === SiPostgresql
                          ? "#336791"
                          : Icon === SiPrisma
                          ? "#0C344B"
                          : Icon === SiGraphql
                          ? "#E535AB"
                          : Icon === FaDocker
                          ? "#2496ED"
                          : Icon === FaFigma
                          ? "#F24E1E"
                          : Icon === SiGo
                          ? "#00ADD8"
                          : "#fff"
                      }
                    />
                  </div>
                  
                  {/* Enhanced Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-current rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500 -z-10 group-hover:scale-150"></div>
                  
                  {/* Pulsing Ring Effect */}
                  <div className="absolute inset-0 border-2 border-current rounded-full opacity-0 group-hover:opacity-30 transition-all duration-700 -z-20 group-hover:scale-150 group-hover:animate-ping-once"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Animation Styles */}
      <style jsx>{`
        @keyframes orb-float-1 {
          0%, 100% { 
            transform: translate(0px, 0px) rotate(0deg) scale(1);
          }
          33% { 
            transform: translate(10px, -15px) rotate(120deg) scale(1.1);
          }
          66% { 
            transform: translate(-5px, 8px) rotate(240deg) scale(0.9);
          }
        }
        
        @keyframes orb-float-2 {
          0%, 100% { 
            transform: translate(0px, 0px) rotate(0deg);
          }
          25% { 
            transform: translate(-12px, -18px) rotate(90deg);
          }
          50% { 
            transform: translate(8px, 12px) rotate(180deg);
          }
          75% { 
            transform: translate(15px, -8px) rotate(270deg);
          }
        }
        
        @keyframes orb-float-3 {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-20px) scale(1.2);
          }
        }
        
        @keyframes orb-float-4 {
          0%, 100% { 
            transform: translate(0px, 0px);
          }
          33% { 
            transform: translate(-15px, 10px);
          }
          66% { 
            transform: translate(10px, -5px);
          }
        }
        
        @keyframes orb-float-5 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          50% { 
            transform: translateY(-15px) rotate(180deg);
          }
        }
        
        @keyframes icon-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          33% { 
            transform: translateY(-8px) rotate(5deg);
          }
          66% { 
            transform: translateY(4px) rotate(-5deg);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% { 
            opacity: 0.1;
          }
          50% { 
            opacity: 0.2;
          }
        }
        
        @keyframes fade-in-up {
          0% { 
            opacity: 0;
            transform: translateY(30px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-color {
          0%, 100% { 
            opacity: 1;
          }
          50% { 
            opacity: 0.7;
          }
        }
        
        @keyframes category-float {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-5px);
          }
        }
        
        @keyframes ping-once {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-orb-float-1 { animation: orb-float-1 8s ease-in-out infinite; }
        .animate-orb-float-2 { animation: orb-float-2 10s ease-in-out infinite; }
        .animate-orb-float-3 { animation: orb-float-3 6s ease-in-out infinite; }
        .animate-orb-float-4 { animation: orb-float-4 9s ease-in-out infinite; }
        .animate-orb-float-5 { animation: orb-float-5 7s ease-in-out infinite; }
        .animate-icon-float { animation: icon-float 4s ease-in-out infinite; }
        .animate-gradient-shift { animation: gradient-shift 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .animate-pulse-color { animation: pulse-color 3s ease-in-out infinite; }
        .animate-category-float { animation: category-float 3s ease-in-out infinite; }
        .animate-ping-once { animation: ping-once 0.7s ease-out; }
      `}</style>
    </div>
  );
}