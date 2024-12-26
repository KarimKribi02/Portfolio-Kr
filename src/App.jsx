import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
<<<<<<< HEAD
import Technologies from "./Components/Technologies.jsx";
import Experience from "./Components/Experience.jsx";
=======
import About from "./Components/About";
import Contact from "./Components/Contact";
>>>>>>> 96c57ea19283940135a881d8ddf567fca2ac638a
function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
<<<<<<< HEAD

=======
>>>>>>> 96c57ea19283940135a881d8ddf567fca2ac638a
      </div>
      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
<<<<<<< HEAD
        <Technologies/>
        <Experience></Experience>
=======
        <About/>
        <Contact/>
>>>>>>> 96c57ea19283940135a881d8ddf567fca2ac638a
      </div>
    
    
    </div>
  );
}

export default App;


