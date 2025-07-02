import React from 'react'
import {EXPERIENCES} from '../constants'
import { motion } from "motion/react"

const Experience = () => {
  return (
    <div className='pb-16' style={{ backgroundColor: '#181C14' }}>
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 0.5}}
        className='pt-20 pb-12 text-center text-4xl font-bold'
        style={{ color: '#ECDFCC' }}
      >
        Experiences
      </motion.h2>
      
      <div className="container mx-auto px-6">
        <div className="relative">
          {/* Timeline Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full hidden lg:block"
            style={{ backgroundColor: '#697565' }}
          ></div>
          
          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={index} 
              whileInView={{opacity: 1, y: 0}}
              initial={{opacity: 0, y: 50}}
              transition={{duration: 0.6, delay: index * 0.1}}
              className={`mb-12 flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10">
                <div 
                  className="w-4 h-4 rounded-full border-4"
                  style={{ 
                    backgroundColor: '#ECDFCC',
                    borderColor: '#697565'
                  }}
                ></div>
              </div>
              
              {/* Experience Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
                  style={{ backgroundColor: '#3C3D37' }}
                >
                  {/* Year Badge */}
                  <div className="mb-4">
                    <span 
                      className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                      style={{ 
                        backgroundColor: '#697565',
                        color: '#ECDFCC'
                      }}
                    >
                      {exp.year}
                    </span>
                  </div>
                  
                  {/* Role and Company */}
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: '#ECDFCC' }}
                  >
                    {exp.role}
                  </h3>
                  <h4 
                    className="text-lg font-medium mb-4"
                    style={{ color: '#697565' }}
                  >
                    {exp.company}
                  </h4>
                  
                  {/* Description */}
                  <p 
                    className="text-sm mb-6 leading-relaxed"
                    style={{ color: '#ECDFCC', opacity: 0.8 }}
                  >
                    {exp.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 hover:scale-105"
                        style={{ 
                          backgroundColor: '#697565',
                          color: '#ECDFCC'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Empty space for timeline balance */}
              <div className="hidden lg:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience