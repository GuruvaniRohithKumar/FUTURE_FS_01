import React from 'react';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Personal Professional Portfolio",
      description: "A responsive portfolio website built using React.js to showcase my engineering skills, projects, and upcoming tasks.",
      tags: ["React.js", "CSS3", "Formspree"],
      github: "https://github.com/" // Update with your actual repo link later!
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map((tag, index) => <span key={index} className="tag">{tag}</span>)}
            </div>
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
              View Source Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;