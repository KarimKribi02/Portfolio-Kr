import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ProjectsPage from "./Pages/ProjectsPage";
import Contact from "./Pages/Contact";
import { AnimatePresence } from "motion/react";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-[#181c14] min-h-screen">
      {/* Background fixed div */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute inset-0 -z-10 h-full w-full"
          style={{ backgroundColor: "#181c14" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 relative z-10 pt-20">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
