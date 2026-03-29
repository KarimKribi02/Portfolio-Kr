import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { motion } from "motion/react"
import { FaDownload, FaUser, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section 
      id="about" 
      className="py-12 sm:py-20 px-4 sm:px-6" 
      style={{ backgroundColor: '#181C14' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 sm:w-12 h-0.5 mr-4" style={{ backgroundColor: '#697565' }}></div>
            <FaUser className="text-xl sm:text-2xl" style={{ color: '#697565' }} />
            <div className="w-8 sm:w-12 h-0.5 ml-4" style={{ backgroundColor: '#697565' }}></div>
          </div>
          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold' style={{ color: '#ECDFCC' }}>
            About
            <span className='block text-3xl sm:text-4xl lg:text-5xl mt-2' style={{ color: '#697565' }}>
              Me
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg" style={{ color: '#3C3D37' }}>
            Discover my journey and passion for development
          </p>
        </motion.div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          
          {/* Image Section */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <div className='relative flex items-center justify-center'>
              <div 
                className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl opacity-30 hidden sm:block"
                style={{ backgroundColor: '#697565' }}
              ></div>
              <div 
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-40 hidden sm:block"
                style={{ backgroundColor: '#3C3D37' }}
              ></div>
              
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl p-2 bg-[#3C3D37]"
              >
                <img 
                  className="rounded-2xl w-full max-w-sm sm:max-w-md h-auto object-cover"
                  src="/Karim2.jpg" 
                  alt="Mohamed Karim KRIBI - About" 
                />
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>

              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-2 sm:-right-4 px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg flex items-center gap-2 bg-[#ECDFCC] text-[#181C14]"
              >
                <FaCode className="text-xs" />
                <span className="text-xs sm:text-sm font-semibold">Dev</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='space-y-8'
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div 
                  className="w-1 h-16 rounded-full mt-2 hidden lg:block"
                  style={{ backgroundColor: '#697565' }}
                ></div>
                <div className='lg:text-left text-center w-full'>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3" style={{ color: '#ECDFCC' }}>
                    My Story
                  </h3>
                  <p 
                    className='text-base sm:text-lg leading-relaxed'
                    style={{ color: '#697565' }}
                  >
                    {ABOUT_TEXT}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                className="p-4 rounded-xl border-2 border-opacity-30 flex flex-col items-center sm:items-start"
                style={{ 
                  backgroundColor: 'rgba(60, 61, 55, 0.3)',
                  borderColor: '#3C3D37'
                }}
              >
                <FaCode className="text-2xl mb-2" style={{ color: '#697565' }} />
                <h4 className="font-semibold" style={{ color: '#ECDFCC' }}>
                  Full Stack
                </h4>
                <p className="text-sm" style={{ color: '#697565' }}>
                  Frontend & Backend
                </p>
              </div>
              <div 
                className="p-4 rounded-xl border-2 border-opacity-30 flex flex-col items-center sm:items-start"
                style={{ 
                  backgroundColor: 'rgba(60, 61, 55, 0.3)',
                  borderColor: '#3C3D37'
                }}
              >
                <FaLightbulb className="text-2xl mb-2" style={{ color: '#697565' }} />
                <h4 className="font-semibold" style={{ color: '#ECDFCC' }}>
                  Innovation
                </h4>
                <p className="text-sm" style={{ color: '#697565' }}>
                  Creative Solutions
                </p>
              </div>
            </div>

            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 text-center lg:text-left"
            >
              <a
                href="./MyCV.pdf"
                download
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 relative overflow-hidden bg-[#697565] text-[#ECDFCC] border-[#697565] hover:bg-transparent hover:text-[#697565]"
              >
                <FaDownload className="text-xl group-hover:animate-bounce" />
                <span>Download CV</span>
              </a>

              <p className="mt-3 text-sm flex items-center gap-2 justify-center lg:justify-start" style={{ color: '#3C3D37' }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#697565' }}></span>
                PDF Format • Updated recently
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, scaleX: 1 }}
          initial={{ opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 sm:mt-20 h-0.5 w-full max-w-md mx-auto"
          style={{ backgroundColor: '#3C3D37' }}
        ></motion.div>
      </div>
    </section>
  );
};

export default About;