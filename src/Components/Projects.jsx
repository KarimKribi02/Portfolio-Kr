import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'motion/react';

function Projects() {
  return (
    <div className="pb-16" style={{ backgroundColor: '#181C14' }}>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="pt-20 pb-12 text-center text-4xl font-bold"
        style={{ color: '#ECDFCC' }}
      >
        Projects
      </motion.h2>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl flex flex-col h-full"
              style={{ backgroundColor: '#3C3D37' }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div 
                  className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: '#697565' }}
                ></div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: '#ECDFCC' }}
                >
                  {project.title}
                </h3>
                
                <p 
                  className="text-sm mb-4 leading-relaxed flex-grow"
                  style={{ color: '#ECDFCC', opacity: 0.8 }}
                >
                  {project.description}
                </p>
                
                {/* Technologies Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
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
                
                {/* Demo Button */}
                <div className="flex justify-center mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                    style={{ 
                      backgroundColor: '#697565',
                      color: '#ECDFCC'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#ECDFCC';
                      e.target.style.color = '#3C3D37';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#697565';
                      e.target.style.color = '#ECDFCC';
                    }}
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;