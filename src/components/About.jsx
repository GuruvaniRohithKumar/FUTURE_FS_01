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
      
      <p>
        With robust competency across multiple programming paradigms—including Java, Python, C, and 
        advanced SQL data manipulation—I thrive at the intersection of structural backend logic and 
        responsive frontend user experiences. As I transition into my B.Tech engineering degree, 
        I am highly focused on channeling my developer foundations toward becoming an AI & Data Science 
        Specialist, building intelligent data-driven applications that solve complex real-world challenges.
      </p>

      <div style={{ marginTop: '50px', width: '100%' }}>
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
    </section>
  );
};

export default About;