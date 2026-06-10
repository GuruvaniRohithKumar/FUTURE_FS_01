import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p>I am an aspiring software engineer focusing on building modern web applications. Currently, I am expanding my skills through hands-on development projects and internships.</p>
      
      <h3>Skills & Tech Stack</h3>
      <div className="skills-container">
        <span className="skill-badge">HTML5 / CSS3</span>
        <span className="skill-badge">JavaScript (ES6+)</span>
        <span className="skill-badge">React.js</span>
        <span className="skill-badge">Git & GitHub</span>
      </div>
    </section>
  );
};

export default About;