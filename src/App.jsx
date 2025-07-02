import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies.jsx";
import Experience from "./Components/Experience.jsx";
import About from "./Components/About";

import Projects from "./Components/Projects.jsx";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background fixed div */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute inset-0 -z-10 h-full w-full"
          style={{ backgroundColor: "#181c14" }}
        ></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <ContactForm />
        
      </div>
    </div>
  );
}

export default App;
