import React from 'react';

const Projects = () => {
  // 📂 Add all your projects into this array!
  const projectList = [
    {
      id: 1,
      title: "Personal Professional Portfolio",
      description: "A responsive single-page portfolio website built using React.js and Vite to showcase my engineering skills, live projects, and internship tasks.",
      tags: ["React.js", "CSS3", "Formspree", "Vite"],
      github: "https://github.com/GuruvaniRohithKumar/FUTURE_FS_01" // Replace with your link
    },
    {
      id: 2,
      title: "Student Grade Tracker",
      description: "A Java Swing-based desktop application designed to help teachers manage student grades. It allows for dynamic entry of scores and provides instant statistical analysis.",
      tags: ["Java Programming"],
      github: "https://github.com/GuruvaniRohithKumar/CodeAlpha_Student_Grade_Tracker" // Replace with your link
    },
    {
      id: 3,
      title: "Hotel Reservation System",
      description: "A Java Swing-based desktop application designed to streamline property operations and guest checkouts. It allows users to filter room vacancies in real time and complete bookings through a dynamic form that shifts fields automatically depending on the payment gateway selected.",
      tags: ["Java Programming"],
      github: "https://github.com/GuruvaniRohithKumar/CodeAlpha__Hotel_Reservation_System" // Replace with your link
    },
    {
       id: 4,
      title: "Digital Restaurant Website",
      description: "A modern and interactive restaurant website developed using HTML, CSS, and JavaScript. The website provides customers with an engaging platform to explore the restaurant, browse the menu, read reviews, and reserve tables online.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/GuruvaniRohithKumar/synent-task7-Multi_Page_Website-G_Rohith_Kumar" // Replace with your link 
    },
    {
       id: 5,
      title: "Login Page UI",
      description: "A modern, responsive, and interactive login platform built using HTML, CSS, and JavaScript. This project provides a clean authentication interface with real-time validation, animated transitions, toast notifications, and user profile information collection.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/GuruvaniRohithKumar/synent-task3-LoginpageUI-G_Rohith_Kumar" // Replace with your link  
    },
    {
        id: 5,
      title: "Weekly Habit Tracker",
      description: "A modern and responsive habit-tracking web application built using HTML, CSS, and Vanilla JavaScript. This application helps users create habits, track daily progress throughout the week, export data as CSV files, and store progress locally using the browser's Local Storage.",
      tags: ["HTML", "CSS", "Vanilla JavaScript"],
      github: "https://github.com/GuruvaniRohithKumar/synent-task5-todolistwebapp-G_Rohith_Kumar" // Replace with your link  
    }
    // 💡 To add a 4th project, just add a comma here and paste another card block!
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
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
              View Source Code &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;