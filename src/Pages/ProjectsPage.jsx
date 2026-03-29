import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../constants";
import { FaPlay, FaFileAlt, FaGithub, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsPage = () => {
    const projects = PROJECTS;
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-24 min-h-screen relative pb-20"
            style={{ backgroundColor: '#181C14' }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center" style={{ color: '#ECDFCC' }}>
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            onClick={() => openModal(project)}
                            className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full"
                            style={{ backgroundColor: '#2D3027' }}
                        >
                            {/* Image Wrapper */}
                            <div className="relative overflow-hidden shrink-0">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full aspect-video object-cover"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all"></div>
                            </div>
                            
                            {/* Content Wrapper */}
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-bold mb-4" style={{ color: '#ECDFCC' }}>
                                    Site Web {project.title}
                                </h3>
                                
                                <div className="flex-1 mb-8">
                                    <p className="leading-relaxed text-sm sm:text-base font-medium" style={{ color: '#8F9B8A' }}>
                                        {project.description}
                                    </p>
                                </div>
                                
                                <div className="space-y-10 mt-auto">
                                    {/* Tags Section */}
                                    <div className="flex flex-wrap gap-2.5">
                                        {project.technologies.map((tech, idx) => (
                                            <span 
                                                key={idx} 
                                                className="px-4 py-1.5 text-[11px] sm:text-xs rounded-full font-bold uppercase tracking-wider"
                                                style={{ backgroundColor: '#3E4139', color: '#8F9B8A' }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons Section */}
                                    <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
                                        <button 
                                            onClick={() => openModal(project)}
                                            className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-sm transition-all hover:brightness-110 shadow-md flex-1 justify-center whitespace-nowrap"
                                            style={{ backgroundColor: '#5E6157', color: '#ECDFCC' }}
                                        >
                                            {project.video ? <FaPlay size={12} /> : <FaFileAlt size={12} />}
                                            <span>View Demo</span>
                                        </button>
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-2.5 rounded-lg border font-bold text-sm transition-all hover:bg-[#3E4139]/30 flex-1 justify-center whitespace-nowrap"
                                            style={{ borderColor: '#3E4139', color: '#ECDFCC' }}
                                        >
                                            <FaGithub size={16} />
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-6xl aspect-video bg-[#1e2319] rounded-2xl overflow-hidden shadow-2xl border border-[#3C3D37]"
                        >
                            {/* Close Button UI */}
                            <button 
                                onClick={closeModal}
                                className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-50 text-3xl"
                            >
                                <FaTimes />
                            </button>

                            {/* Browser-like Header */}
                            <div className="absolute top-4 right-4 z-50 flex gap-2">
                                <a 
                                    href={selectedProject.link || selectedProject.video} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-black/50 backdrop-blur-md rounded-lg text-[#ECDFCC] hover:bg-white/10 transition-all border border-white/10"
                                    title="Open in new tab"
                                >
                                    <FaExternalLinkAlt size={20} />
                                </a>
                            </div>

                            {/* Project Preview Content */}
                            <iframe
                                src={selectedProject.link || selectedProject.video}
                                className="w-full h-full border-none rounded-2xl"
                                title={selectedProject.title}
                                allow="autoplay"
                            ></iframe>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectsPage;
