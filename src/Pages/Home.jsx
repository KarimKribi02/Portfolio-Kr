import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Technologies from "../Components/Technologies";
import Experience from "../Components/Experience";
import { motion } from "motion/react";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <About />
      <Technologies />
      <Experience />
    </motion.div>
  );
};

export default Home;
