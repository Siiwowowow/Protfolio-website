'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import profileImg from "../../../public/profile.jpg";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter, FaDownload } from "react-icons/fa6";

export default function Banner() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ["Frontend Web Developer", "Next.js Specialist", "MERN Stack Developer"];
  const [textIndex, setTextIndex] = useState(0);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, textIndex, texts]);

  return (
    <section className="min-h-screen w-full bg-[#020617] relative overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 z-0"
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
      
      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-500 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-purple-500 rounded-full opacity-15 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-400 rounded-full opacity-25 animate-float" style={{animationDelay: '1s'}}></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/5 to-pink-900/5 animate-pulse-slow"></div>

      {/* Banner Content */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-8 md:gap-12">
          
          {/* Left Content */}
          <div className="text-white flex flex-col items-center md:items-start animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Sajjadur Rahman
              <span className=" bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Fahim
              </span>
            </h1>
            
            <div className="mt-4 h-8">
              <h2 className="text-xl md:text-2xl font-medium text-orange-400 min-h-[2rem]">
                {displayText}
                <span className="ml-1 inline-block w-1 h-6 bg-orange-400 animate-pulse"></span>
              </h2>
            </div>
            
            <p className="mt-4 text-sm md:text-base text-gray-300 text-center md:text-left max-w-md">
              Specializing in building modern, responsive, and dynamic web 
              applications using <span className="text-orange-400 font-semibold">Next.js</span> and 
              the <span className="text-orange-400 font-semibold">MERN stack</span>.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-5 mt-6">
              {[
                { href: "https://github.com/Siiwowowow", icon: <FaGithub />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/sajjadur-rahman-fahim-9384b3379", icon: <FaLinkedin />, label: "LinkedIn" },
                { href: "https://x.com/rafsan_ev48302", icon: <FaXTwitter />, label: "Twitter" },
                { href: "https://www.facebook.com/rafsan1469", icon: <FaFacebook />, label: "Facebook" }
              ].map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="text-white hover:text-orange-400 text-2xl transition-all duration-300 hover:scale-125 transform"
                  aria-label={social.label}
                  style={{ animationDelay: `${index * 100 + 800}ms` }}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/Contract">
                <button className="px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:from-orange-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Hire Me
                  <span className="text-lg">🚀</span>
                </button>
              </Link>
              
              <button className="px-8 py-3 bg-transparent border-2 border-orange-400 text-orange-400 font-semibold rounded-full shadow-lg hover:bg-orange-400 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Download CV
                <FaDownload className="text-sm" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="mt-10 md:mt-0 relative animate-fade-in-right">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-orange-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
              
              {/* Profile Image Container */}
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
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Add custom animations to your global CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.3s both;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}