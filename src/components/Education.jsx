import React, { useState } from 'react';

const Education = () => {
  const [activeId, setActiveId] = useState(1);

  const educationData = [
    {
      id: 1,
      level: "Schooling",
      institution: "Gnanoodaya Grammer High School",
      address: "Balapur, Hyderabad, Telangana, India", // 💡 Feel free to update the exact address line
      year: "Completed: 2022-2023",
      performance: "Percentage: 82%", // 💡 Update with your actual school percentage/GPA
      details: "Graduated secondary school education with strong marks, focusing heavily on Mathematics and foundation computer science mechanics."
    },
    {
      id: 2,
      level: "Diploma in CSE",
      institution: "Sree Dattha Engineering and Science Institution",
      address: "Sheriguda, Ibrahimpatnam, Greater Hyderabad, Telangana, India",
      year: "Completed: 2023-2026",
      performance: "Agg: 91%", // 💡 Update with your actual diploma percentage or CGPA
      details: "Earned a comprehensive Technical Diploma in Computer Science Engineering. Built strong foundation frameworks across Java, Python, C programming, and structural SQL data analytics."
    }
  ];

  return (
    <section id="education" className="education-section" style={{ textAlign: 'center' }}>
      <h2>My Academic Journey</h2>
      <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>Click on any milestone to view institution location and performance highlights.</p>
      
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
          style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'left', animation: 'fadeIn 0.4s ease', padding: '35px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', flexWrap: 'wrap', gap: '15px' }}>
            <div>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '1.5rem', fontWeight: '700' }}>{edu.institution}</h3>
              {/* Institution Address Field */}
              <p style={{ margin: '0', fontSize: '0.95rem', color: 'var(--color-primary)', fontWeight: '600' }}>
                📍 {edu.address}
              </p>
            </div>
            
            {/* Metadata Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
              <span className="tag" style={{ margin: '0' }}>{edu.year}</span>
              {/* Performance Indicator Highlight Badge */}
              <span className="tag" style={{ margin: '0', background: '#ec4899', color: '#ffffff', border: 'none' }}>
                🏆 {edu.performance}
              </span>
            </div>
          </div>
          
          <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '20px 0' }} />
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', margin: '0' }}>
            {edu.details}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Education;