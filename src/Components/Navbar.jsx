import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { motion } from "motion/react";

const Navbar = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/mohamed-karim-kribi-31b30b248/",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "#0077B5"
    },
    {
      href: "https://github.com/KarimKribi02",
      icon: FaGithub,
      label: "GitHub",
      color: "#333"
    },
    {
      href: "https://www.instagram.com/krm_02/",
      icon: FaInstagram,
      label: "Instagram",
      color: "#E4405F"
    }
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md border-b border-opacity-20"
      style={{ 
        backgroundColor: 'rgba(24, 28, 20, 0.9)',
        borderColor: '#3C3D37'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center group"
        >
          
          
          {/* Name/Brand - Supprimé */}
          {/* Name/Brand */}
          <div className="ml-3 hidden sm:block">
            <h1 className="text-lg font-bold" style={{ color: '#ECDFCC' }}>
              MK
            </h1>
            <p className="text-xs -mt-1" style={{ color: '#697565' }}>
              Portfolio
            </p>
          </div>
        
        </motion.div>



        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-4"
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                className="relative p-2 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                style={{ 
                  backgroundColor: 'rgba(60, 61, 55, 0.3)',
                  color: '#697565'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(236, 223, 204, 0.1)';
                  e.target.style.color = '#ECDFCC';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(60, 61, 55, 0.3)';
                  e.target.style.color = '#697565';
                }}
                aria-label={social.label}
              >
                <IconComponent className="text-xl" />
                
                {/* Tooltip */}
                <div 
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                  style={{ 
                    backgroundColor: '#3C3D37',
                    color: '#ECDFCC'
                  }}
                >
                  {social.label}
                  {/* Arrow */}
                  <div 
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
                    style={{ backgroundColor: '#3C3D37' }}
                  ></div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Mobile Menu Button - Supprimé */}
      </div>


    </motion.nav>
  )
}

export default Navbar