import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies.jsx";
import Experience from "./Components/Experience.jsx";
function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      </div>
      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
        <Technologies/>
        <Experience></Experience>
      </div>
    
    
    </div>
  );
}

export default App;


