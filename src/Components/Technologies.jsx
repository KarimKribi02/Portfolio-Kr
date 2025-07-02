import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { DiJavascript1 } from "react-icons/di"
import { SiMongodb } from 'react-icons/si'
import { DiPhp } from "react-icons/di"
import { DiBootstrap } from "react-icons/di"
import { DiMysql } from "react-icons/di"
import { motion } from "framer-motion"
import { DiGithubBadge } from "react-icons/di"
import { DiPython } from "react-icons/di"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
})

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const Technologies = () => {
  const technologies = [
    { icon: RiReactjsLine, color: "#61DAFB", name: "React", duration: 2.5 },
    { icon: DiJavascript1, color: "#F7DF1E", name: "JavaScript", duration: 3 },
    { icon: SiMongodb, color: "#47A248", name: "MongoDB", duration: 5 },
    { icon: DiPhp, color: "#777BB4", name: "PHP", duration: 2 },
    { icon: DiBootstrap, color: "#7952B3", name: "Bootstrap", duration: 6 },
    { icon: DiMysql, color: "#4479A1", name: "MySQL", duration: 4 },
    { icon: DiGithubBadge, color: "#ECDFCC", name: "GitHub", duration: 3.5 },
    { icon: DiPython, color: "#3776AB", name: "Python", duration: 2.8 }
  ]

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center py-20 px-8"
      style={{ backgroundColor: '#181C14' }}
    >
      {/* Titre principal */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h2 
          className="text-5xl md:text-6xl font-bold mb-4 tracking-wide"
          style={{ color: '#ECDFCC' }}
        >
          Technologies
        </h2>
        <div 
          className="w-24 h-1 mx-auto rounded-full"
          style={{ backgroundColor: '#697565' }}
        />
        <p 
          className="text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#697565' }}
        >
          Voici les technologies et outils que j'utilise pour créer des solutions innovantes et performantes
        </p>
      </motion.div>

      {/* Grille des technologies */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Container de l'icône */}
            <div 
              className="relative p-6 md:p-8 rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 border border-opacity-20"
              style={{ 
                backgroundColor: '#3C3D37',
                borderColor: '#697565'
              }}
            >
              {/* Effet de brillance au hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: tech.color }}
              />
              
              {/* Icône animée */}
              <motion.div
                variants={iconVariants(tech.duration)}
                initial="initial"
                animate="animate"
                className="relative z-10"
              >
                <tech.icon 
                  size={48}
                  color={tech.color}
                  className="md:w-16 md:h-16 transition-all duration-300 group-hover:drop-shadow-lg"
                />
              </motion.div>
            </div>

            {/* Nom de la technologie */}
            <motion.h3 
              className="text-lg md:text-xl font-semibold mt-4 transition-colors duration-300 group-hover:scale-105"
              style={{ color: '#ECDFCC' }}
              whileHover={{ color: tech.color }}
            >
              {tech.name}
            </motion.h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full opacity-50" style={{ backgroundColor: '#697565' }} />
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full opacity-30" style={{ backgroundColor: '#ECDFCC' }} />
      <div className="absolute bottom-32 left-1/4 w-1 h-1 rounded-full opacity-40" style={{ backgroundColor: '#697565' }} />
      <div className="absolute bottom-20 right-1/3 w-2 h-2 rounded-full opacity-20" style={{ backgroundColor: '#3C3D37' }} />
      
      {/* Gradient subtil en arrière-plan */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, #697565 0%, transparent 70%)`
        }}
      />
    </div>
  )
}

export default Technologies