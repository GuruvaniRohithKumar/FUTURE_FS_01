import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements'; // ✨ Import Achievements
import Education from './components/Education';      // ✨ Import Education
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements /> {/* ✨ Placed smoothly here */}
        <Education />    {/* ✨ Placed smoothly here */}
        <ResumeCTA />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Guruvani Rohith Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;