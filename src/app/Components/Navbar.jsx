'use client'

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Projects', href: '/project' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/Contract' },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50">
      
      {/* 🌌 NAVBAR BACKGROUND WITH YOUR MAGENTA GRID */}
      <div
        className="w-full backdrop-blur-xl border-b border-pink-500/10"
        style={{
          background: "#020617",
          
          backgroundSize: "40px 40px, 40px 40px, 100% 100%"
        }}
      >
        <div className="container mx-auto px-4 py-4 md:flex md:items-center md:justify-between">
          
          {/* ⭐ Logo */}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-white">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#ec4899" />
                <circle cx="16" cy="16" r="8" fill="#FFFFFF" />
                <circle cx="16" cy="16" r="4" fill="#ec4899" />
              </svg>
              <span className="text-xl font-bold">Sajjadur Rahman</span>
            </Link>

            {/* ☰ Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 rounded-md focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* 🌐 Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-medium transition duration-300 ${
                  pathname === link.href
                    ? 'text-pink-400 font-bold drop-shadow-[0_0_6px_rgba(236,72,153,0.7)]'
                    : 'hover:text-pink-300 text-white'
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="block w-full h-0.5 bg-pink-400 mt-1 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* 📄 Desktop Resume Button */}
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              download="Sajjadur_Rahman_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-pink-600 rounded-full transition duration-300 hover:bg-pink-500 shadow-lg shadow-pink-500/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
            isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
          style={{
            background: "#020617",
            backgroundImage: `
              linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
              radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
            `,
            backgroundSize: "40px 40px, 40px 40px, 100% 100%"
          }}
        >
          <div className="flex flex-col items-center gap-3 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`w-full py-3 px-4 rounded-lg text-lg font-medium transition ${
                  pathname === link.href
                    ? 'bg-pink-500/10 text-pink-400 font-bold border border-pink-400/30'
                    : 'text-white hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* 📄 Mobile Resume Button */}
            <a
              href="/resume.pdf"
              download="Sajjadur_Rahman_Resume.pdf"
              onClick={() => setIsMenuOpen(false)}
              className="w-full mt-2 bg-gradient-to-r from-pink-600 to-purple-600 py-3 px-4 rounded-lg text-white font-medium flex items-center justify-center gap-2 shadow-md shadow-pink-600/30"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
