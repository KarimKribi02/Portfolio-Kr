import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { motion } from "motion/react"
import { FaDownload, FaUser, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section 
      id="about" 
      className="py-20 px-6" 
      style={{ backgroundColor: '#181C14' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 mr-4" style={{ backgroundColor: '#697565' }}></div>
            <FaUser className="text-2xl" style={{ color: '#697565' }} />
            <div className="w-12 h-0.5 ml-4" style={{ backgroundColor: '#697565' }}></div>
          </div>
          <h2 className='text-5xl lg:text-6xl font-bold' style={{ color: '#ECDFCC' }}>
            À propos
            <span className='block text-4xl lg:text-5xl mt-2' style={{ color: '#697565' }}>
              de Moi
            </span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: '#3C3D37' }}>
            Découvrez mon parcours et ma passion pour le développement
          </p>
        </motion.div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          
          {/* Image Section */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <div className='relative flex items-center justify-center'>
              {/* Decorative elements */}
              <div 
                className="absolute -top-6 -left-6 w-20 h-20 rounded-2xl opacity-30"
                style={{ backgroundColor: '#697565' }}
              ></div>
              <div 
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-40"
                style={{ backgroundColor: '#3C3D37' }}
              ></div>
              
              {/* Main image container */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl p-2"
                style={{ backgroundColor: '#3C3D37' }}
              >
                <img 
                  className="rounded-2xl w-full max-w-md h-auto object-cover"
                  src="/Karim2.jpg" 
                  alt="Mohamedkarim Kribi - À propos" 
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating badge */}
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
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                style={{ backgroundColor: '#ECDFCC', color: '#181C14' }}
              >
                <FaCode className="text-sm" />
                <span className="text-sm font-semibold">Dev</span>
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
            {/* Text Content */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div 
                  className="w-1 h-16 rounded-full mt-2"
                  style={{ backgroundColor: '#697565' }}
                ></div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ color: '#ECDFCC' }}>
                    Mon Histoire
                  </h3>
                  <p 
                    className='text-lg leading-relaxed'
                    style={{ color: '#697565' }}
                  >
                    {ABOUT_TEXT}
                  </p>
                </div>
              </div>
            </div>

            {/* Skills highlight */}
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="p-4 rounded-xl border-2 border-opacity-30"
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
                className="p-4 rounded-xl border-2 border-opacity-30"
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
                  Solutions créatives
                </p>
              </div>
            </div>

            {/* Download CV Button */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="./MyCV.pdf"
                download
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 relative overflow-hidden"
                style={{ 
                  backgroundColor: '#697565',
                  color: '#ECDFCC',
                  borderColor: '#697565'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#697565';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#697565';
                  e.target.style.color = '#ECDFCC';
                }}
              >
                <FaDownload className="text-xl group-hover:animate-bounce" />
                <span>Télécharger le CV</span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>

              {/* Additional info */}
              <p className="mt-3 text-sm flex items-center gap-2" style={{ color: '#3C3D37' }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#697565' }}></span>
                Format PDF • Mise à jour récente
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          whileInView={{ opacity: 1, scaleX: 1 }}
          initial={{ opacity: 0, scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 h-0.5 w-full max-w-md mx-auto"
          style={{ backgroundColor: '#3C3D37' }}
        ></motion.div>
      </div>
    </section>
  )
}

export default About