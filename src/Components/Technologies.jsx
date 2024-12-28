import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { DiJavascript1 } from "react-icons/di";
import {SiMongodb} from 'react-icons/si'
import { DiPhp } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { motion } from "motion/react"
import { DiGithubBadge } from "react-icons/di";
import { DiPython } from "react-icons/di";
// import { animate } from 'motion'
const iconVariants = (duration) => ({
  initial:{y: -10},
  animate: {y:[10, -10], 
    transition: {duration: duration, ease : "linear" , repeat: Infinity , repeatType: "reverse"}},
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
       className='my-20 text-center text-4xl'>Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
       className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border border-neutral-800 p-4'>
            <DiGithubBadge className='text-7xl'/>
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border border-neutral-800 p-4'>
            <DiJavascript1 className='text-7xl '/>
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border border-neutral-800 p-4'>
            <DiPhp className='text-7xl '/>
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border border-neutral-800 p-4'>
            <DiBootstrap className='text-7xl text-purple-600'/>
        </motion.div>
        <motion.div
        variants={iconVariants(8)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border border-neutral-800 p-4'>
            <DiMysql className='text-7xl text-blue-800'/>
        </motion.div>
        <motion.div
        variants={iconVariants(8)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border border-neutral-800 p-4'>
            <DiPython className='text-7xl'/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
