import React from 'react';

const ResumeCTA = () => {
  return (
    <div style={{ 
      backgroundColor: '#fafbfd', /* Clean light background matching your resume */
      textAlign: 'center', 
      padding: '50px 20px',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0'
    }}>
      <p style={{ 
        color: '#2c3e50', 
        fontSize: '1.1rem', 
        marginBottom: '15px',
        fontWeight: '600'
      }}>
        Looking for a quick offline summary of my technical skills and internships?
      </p>
      
      <a 
        href="//Users/guruvanilalithkumar/Downloads/Confirm.pdf" 
        download="Users/guruvanilalithkumar/Downloads/Confirm.pdf"
        style={{
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '14px 32px',
          borderRadius: '30px',
          fontWeight: '700',
          fontSize: '1rem',
          backgroundColor: '#ec4899', /* Portfolio pink accent */
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(236, 72, 153, 0.3)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(236, 72, 153, 0.4)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 14px rgba(236, 72, 153, 0.3)';
        }}
      >
        📥 Download My Resume
      </a>
    </div>
  );
};

export default ResumeCTA;