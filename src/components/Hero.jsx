import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm a <span className="highlight">Developer</span></h1>
        <p>Welcome to my professional portfolio. I build clean, modern, and responsive web applications.</p>
        <a href="#projects" className="cta-btn">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;