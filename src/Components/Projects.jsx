import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'motion/react';

function Projects() {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoOpen = (video) => {
    setCurrentVideo(video);
    setShowVideo(true);
  };

  const handleVideoClose = () => {
    setShowVideo(false);
    setCurrentVideo(null);
  };

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
                
                {/* Video Play Button Overlay */}
                {project.video && (
                  <button
                    onClick={() => handleVideoOpen(project.video)}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-white rounded-full p-4">
                      <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </button>
                )}
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
                
                {/* Action Buttons */}
                <div className="flex gap-3 justify-center mt-auto">
                  {/* View Demo / View Video Button */}
                  {project.video ? (
                    <button
                      onClick={() => handleVideoOpen(project.video)}
                      className="px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg transform flex items-center gap-2"
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
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      View Demo
                    </button>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg transform flex items-center gap-2"
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
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                        <polyline points="14,2 14,8 20,8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10,9 9,9 8,9"/>
                      </svg>
                      View Demo
                    </a>
                  )}
                  
                  {/* GitHub Button */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg transform flex items-center gap-2"
                      style={{ 
                        backgroundColor: '#3C3D37',
                        color: '#ECDFCC',
                        border: '1px solid #697565'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#ECDFCC';
                        e.target.style.color = '#3C3D37';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#3C3D37';
                        e.target.style.color = '#ECDFCC';
                      }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && currentVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleVideoClose}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleVideoClose}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300 transition-colors duration-200"
            >
              ✕
            </button>
            
            {/* Video Container */}
            <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden">
              {currentVideo.includes("preview") ? (
  <iframe
    src={currentVideo}
    className="absolute inset-0 w-full h-full"
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
    title="Video Preview"
  ></iframe>
) : (
  <video
    src={currentVideo}
    className="absolute inset-0 w-full h-full object-cover"
    controls
    autoPlay
    muted
  >
    Votre navigateur ne supporte pas la vidéo.
  </video>
)}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;