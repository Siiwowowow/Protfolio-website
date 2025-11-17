'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdEmail, MdPhone, MdSend, MdLocationOn } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Sending...');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus('Message sent successfully! 🎉');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    // Clear status after 5 seconds
    setTimeout(() => setStatus(''), 5000);
  };

  const socialLinks = [
    {
      icon: <FaFacebook className="text-2xl" />,
      href: "https://www.facebook.com/profile.php?id=61570506449242",
      color: "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600",
      label: "Facebook"
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      href: "https://twitter.com",
      color: "bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600",
      label: "Twitter"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      href: "https://wa.me/01601325068",
      color: "bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600",
      label: "WhatsApp"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      href: "https://linkedin.com",
      color: "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      href: "https://github.com/Siiwowowow",
      color: "bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700",
      label: "GitHub"
    }
  ];

  const contactInfo = [
    {
      icon: <MdEmail className="text-2xl" />,
      title: "Email Address",
      content: "fahimrahman0145@gmail.com",
      href: "mailto:fahimrahman0145@gmail.com",
      color: "text-emerald-400"
    },
    {
      icon: <MdPhone className="text-2xl" />,
      title: "Phone Number",
      content: "+01601325068",
      href: "tel:+01601325068",
      color: "text-green-400"
    },
    {
      icon: <MdLocationOn className="text-2xl" />,
      title: "Location",
      content: "Dhaka, Bangladesh",
      href: "#",
      color: "text-teal-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Emerald Void Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #072607 100%)",
          }}
        />

        {/* Floating Emerald Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            initial={{
              x: Math.random() * 100 + 'vw',
              y: Math.random() * 100 + 'vh',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated Emerald Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-emerald-500/20 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-emerald-400 text-lg">💬</span>
            <span className="text-emerald-300 font-medium">Let's Connect</span>
          </motion.div>

          <motion.h1 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together. 
            I'm always excited to hear about new opportunities.
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Send me a message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                  placeholder="Your full name"
                  required
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </motion.div>

              <motion.div className="flex items-center justify-between">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg hover:from-emerald-600 hover:to-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <MdSend className="text-xl" />
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {status && (
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className={`text-sm font-medium ${
                        status.includes('successfully') ? 'text-green-400' : 'text-emerald-400'
                      }`}
                    >
                      {status}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-gray-700/50 group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-300 text-sm">{item.title}</h3>
                      <p className="text-white font-medium">{item.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 text-white">Connect with me</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl text-white ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    {social.icon}
                    <span className="text-xs font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-center p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-2xl border border-teal-500/20"
            >
              <p className="text-emerald-300 text-sm">
                💫 <strong>Quick Response:</strong> I typically reply within 2-4 hours during business hours.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}