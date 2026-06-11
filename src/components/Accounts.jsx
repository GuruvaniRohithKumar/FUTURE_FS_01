import React from 'react';

const Accounts = () => {
  const Profiles = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rohith0416',
      icon: '💼',
      description: 'Professional networking and career tracking.'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/GuruvaniRohithKumar',
      icon: '💻',
      description: 'Open-source project repositories and frontend codebases.'
    },
    {
      name: 'Vercel',
      url: 'https://vercel.com/guruvani-rohith-kumar-s-projects',
      icon: '🚀',
      description: 'Live production builds and hosted web applications.'
    }
  ];

  return (
    <section id="accounts" style={{ 
      padding: '80px 20px', 
      backgroundColor: '#ffffff',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ fontSize: '2rem', color: '#1a2a3a', marginBottom: '10px', textTransform: 'uppercase' }}>
        Professional Profiles
      </h2>
      <p style={{ color: '#5a6b7c', marginBottom: '40px', fontSize: '1rem' }}>
        Review my external code networks and application hosting deployments.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '25px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}>
        {Profiles.map((account) => (
          <a 
            key={account.name}
            href={account.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              backgroundColor: '#fafbfd',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '30px 24px',
              width: '280px',
              textAlign: 'left',
              color: 'inherit',
              display: 'block',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = '#ec4899';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{account.icon}</div>
            <h3 style={{ margin: '0 0 10px 0', color: '#1a2a3a', fontSize: '1.25rem', fontWeight: '700' }}>{account.name}</h3>
            <p style={{ margin: 0, color: '#5a6b7c', fontSize: '0.9rem', lineHeight: '1.5' }}>{account.description}</p>
            <div style={{ marginTop: '20px', fontSize: '0.9rem', fontWeight: '700', color: '#ec4899' }}>
              View Profile &rarr;
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Accounts;