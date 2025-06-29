import React from 'react'
import { ABOUT_TEXT } from '../constants'
import { motion } from "motion/react"
import { FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className='my-20 text-center text-4xl text-[#ECDFCC]'>À propos  
         <span className='text-[#697565]'> de Moi </span>
        </h2>
        <div className='flex flex-wrap'>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className ="rounded-3xl" src="/Karim2.jpg" width={450} height={450} alt="About" />
                </div>
            </motion.div>
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
             className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-4 max-w-xl py-6 text-[#ECDFCC]'>{ABOUT_TEXT}</p>
                    </div>
            <a
                href="./MyCV.pdf"
                download
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#3C3D37] text-[#ECDFCC] font-semibold shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 transform hover:scale-105 
                px-6 py-3 text-sm md:px-8 md:py-4 md:text-base lg:px-10 lg:py-5 lg:text-lg"
              >
                <FaDownload className="text-lg md:text-xl lg:text-2xl" />
                Télécharger le CV
              </a>

            </motion.div>
            
        </div>
       
    </div>
  )
}

export default About
