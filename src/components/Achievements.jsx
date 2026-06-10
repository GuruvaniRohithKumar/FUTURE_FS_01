import React from 'react';

const Achievements = () => {
  const certificates = [
    {
      id: 1,
      title: "SQL Course Certificate",
      organization: "Intellipaat",
      year: "2026",
      // 💡 Paste the actual credential link or hosted PDF/Image URL below:
      certificateLink: "https://lms.intellipaat.com/certificate-link/?Yz1jdXMtOTEzMTY3JnU9NDAzNjkwJmV4dD0x" 
    },
    {
      id: 2,
      title: "Microsoft SQL Certification Training Certificate",
      organization: "Intellipaat",
      year: "2026",
      certificateLink: "https://lms.intellipaat.com/certificate-link/?Yz0yODUzJnU9NDAzNjkwJmV4dD0x"
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