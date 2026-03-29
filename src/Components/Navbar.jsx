import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/mohamed-karim-kribi-31b30b248/",
      icon: FaLinkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/KarimKribi02",
      icon: FaGithub,
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/krm_02/",
      icon: FaInstagram,
      label: "Instagram",
    }
  ];

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md border-b border-opacity-20 bg-[#181C14]/90 border-[#3C3D37]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center group">
          <div className="ml-0">
            <h1 className="text-xl font-bold text-[#ECDFCC]">MK</h1>
            <p className="text-[10px] -mt-1 text-[#697565]">Portfolio</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="text-sm font-medium transition-colors hover:text-[#ECDFCC] text-[#697565]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Links (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 bg-[#3C3D37]/30 text-[#697565] hover:text-[#ECDFCC]"
                aria-label={social.label}
              >
                <IconComponent className="text-lg" />
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#ECDFCC] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 overflow-hidden"
          >
            <div className="flex flex-col gap-4 pb-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="text-lg font-medium text-[#697565] hover:text-[#ECDFCC] border-b border-[#3C3D37]/30 pb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-6 pt-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-[#697565] hover:text-[#ECDFCC]"
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;