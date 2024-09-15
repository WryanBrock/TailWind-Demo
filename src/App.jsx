import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Testimonies from "./sections/Testimonies";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="w-full h-full bg-[var(--RaisinBlack)]">
      <Navbar />
      <Hero />
      <Projects />
      <Testimonies />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
