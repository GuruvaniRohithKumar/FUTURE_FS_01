import React from 'react';

const Achievements = () => {
  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development Internship",
      organization: "Future Interns",
      year: "2026",
      // 💡 Paste the actual credential link or hosted PDF/Image URL below:
      certificateLink: "https://your-certificate-link-here.com" 
    },
    {
      id: 2,
      title: "Web Development Internship Certificate",
      organization: "CodeAlpha",
      year: "2025",
      certificateLink: "https://your-certificate-link-here.com"
    },
    {
      id: 3,
      title: "Software Engineering Trainee Certificate",
      organization: "Synent Technologies",
      year: "2025",
      certificateLink: "https://your-certificate-link-here.com"
    }
  ];

  return (
    <section id="achievements" className="achievements-section">
      <h2>Achievements & Certificates</h2>
      <div className="projects-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="project-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              {/* Year Badge */}
              <span className="tag" style={{ display: 'inline-block', marginBottom: '12px' }}>
                {cert.year}
              </span>
              
              {/* Title & Organization */}
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', lineHeight: '1.4' }}>
                {cert.title}
              </h3>
              <p style={{ margin: '0 0 20px 0', fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                {cert.organization}
              </p>
            </div>

            {/* Clickable Action Link */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '15px', marginTop: '10px' }}>
              <a 
                href={cert.certificateLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
                style={{ fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '5px' }}
              >
                Click below to view certificate &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;