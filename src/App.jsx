import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Accounts from './components/Accounts';
import Projects from './components/Projects';
import Achievements from './components/Achievements'; 
import Education from './components/Education';      
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        
        <About />

        {/* ======================================================== */}
        {/* 📥 RESUME DOWNLOAD BUTTON ADDED DIRECTLY UNDER ABOUT     */}
        {/* ======================================================== */}
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <a 
            href="/resume.pdf" 
            download="Guruvani_Rohith_Kumar_Resume.pdf" 
            style={{
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 28px',
              borderRadius: '30px',
              fontWeight: '700',
              fontSize: '0.95rem',
              backgroundColor: '#ec4899', 
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(236, 72, 153, 0.3)'
            }}
          >
            📥 Download Resume
          </a>
        </div>
        {/* ======================================================== */}

        <Accounts />
        <Projects />
        <Achievements /> 
        <Education />    
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Guruvani Rohith Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;