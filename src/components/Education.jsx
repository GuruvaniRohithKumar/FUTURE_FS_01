import React, { useState } from 'react';

const Education = () => {
  const [activeId, setActiveId] = useState(1);

  const educationData = [
    {
      id: 1,
      level: "Schooling",
      institution: "Gnanoodaya Grammer High School",
      year: "Completed: 2022-2023",
      CGPA: "82%"
    },
    {
      id: 2,
      level: "Diploma in CSE",
      institution: "Sree Dattha Engineering and Science Institution",
      year: "Completed: 2026",
      CGPA: "91%"
    }
  ];

  return (
    <section id="education" className="education-section" style={{ textAlign: 'center' }}>
      <h2>My Academic Journey</h2>
      <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>Click on any milestone to view institution and graduation details.</p>
      
      {/* Interactive Level Selectors */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
        {educationData.map((edu) => (
          <button
            key={edu.id}
            onClick={() => setActiveId(edu.id)}
            style={{
              padding: '12px 24px',
              borderRadius: '30px',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '0.95rem',
              backgroundColor: activeId === edu.id ? 'var(--color-secondary)' : 'var(--bg-secondary)',
              color: activeId === edu.id ? '#ffffff' : 'var(--text-primary)',
              boxShadow: '0 4px 6px -1px rgba(14, 165, 233, 0.05)',
              transition: 'all 0.2s ease'
            }}
          >
            {edu.level}
          </button>
        ))}
      </div>

      {/* Dynamic Detail Card Box Display */}
      {educationData.filter(item => item.id === activeId).map((edu) => (
        <div 
          key={edu.id} 
          className="project-card" 
          style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'left', animation: 'fadeIn 0.4s ease' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
            <h3 style={{ margin: '0', fontSize: '1.4rem' }}>{edu.institution}</h3>
            <span className="tag" style={{ margin: '0' }}>{edu.year}</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>{edu.details}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;