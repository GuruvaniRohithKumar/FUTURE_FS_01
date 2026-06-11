import React from 'react';

const About = () => {
  // Organized technical skillset categories
  const skillCategories = [
    {
      title: "Web Development",
      skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "React.js", "Full Stack Architecture"]
    },
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C Programming"]
    },
    {
      title: "Data & Intelligence",
      skills: ["SQL Specialist", "Artificial Intelligence", "Data Science"]
    },
    {
      title: "Experience & Certifications",
      skills: ["Future Interns", "CodeAlpha Alumni", "Synent Technologies", "Hackathon Competitor"]
    }
  ];

  // New Personal Profile Grid Data
  const personalGrids = [
    {
      title: "🗣️ Languages Known",
      items: ["Telugu (Native)", "English", "Hindi"]
    },
    {
      title: "🌱 Hobbies",
      items: ["Badminton", "Cooking", "Listening Motivation Speeches"] // 💡 Edit these to your actual hobbies!
    },
    {
      title: "📜 Habits",
      items: ["Writing Works", "Daily Code Practice", "Time Management"] // 💡 Edit these to your actual habits!
    }
  ];

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      
      <p>
        I am a driven Full Stack Web Developer and software programmer with a solid foundation in 
        Computer Science, holding a Diploma from Sree Dattha Engineering and Science Institution. 
        Over the past few years, I have actively sharpened my technical engineering execution through 
        hands-on internships at <strong>Future Interns</strong>, <strong>CodeAlpha</strong>, and 
        <strong> Synent Technologies</strong>, alongside competing in numerous industry hackathons.
      </p>
      
      <p style={{ marginBottom: '50px' }}>
        With robust competency across multiple programming paradigms—including Java, Python, C, and 
        advanced SQL data manipulation—I thrive at the intersection of structural backend logic and 
        responsive frontend user experiences. As I transition into my B.Tech engineering degree, 
        I am highly focused on channeling my developer foundations toward becoming an AI & Data Science 
        Specialist, building intelligent data-driven applications that solve complex real-world challenges.
      </p>

      {/* ==========================================================================
         NEW PERSONAL SUITE GRID (LANGUAGES, HOBBIES, HABITS)
         ========================================================================== */}
      <div className="projects-grid" style={{ marginBottom: '60px', width: '100%' }}>
        {personalGrids.map((grid, idx) => (
          <div key={idx} className="project-card" style={{ padding: '25px', textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--text-primary)' }}>
              {grid.title}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {grid.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx} 
                  style={{
                    padding: '10px 15px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Technical Skillsets Section */}
      <div style={{ width: '100%' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Technical Skillset</h2>
        {skillCategories.map((category, index) => (
          <div key={index} style={{ marginBottom: '35px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: 'var(--text-primary)' }}>
              {category.title}
            </h3>
            <div className="skills-container">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Button placed at the very bottom interior of About section */}
    <div style={{ marginTop: '30px', textAlign: 'center' }}>
      <a 
        href="/Confirm.pdf" 
        download="Guruvani_Rohith_Kumar_Resume.pdf"
        style={{
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 28px',
          borderRadius: '30px',
          fontWeight: '700',
          backgroundColor: '#ec4899',
          color: '#ffffff',
          border: 'none',
          boxShadow: '0 4px 14px rgba(236, 72, 153, 0.3)'
        }}
      >
        📥 Download Resume
      </a>
    </div>
    </section>
  );
};

export default About;