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
  href="/Confirm.pdf" /* 👈 Must match the name in your public folder exactly */
  download="Confirm.pdf" /* 👈 This tells the browser what to name the file when downloaded */
  style={{
    /* Your existing styles... */
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 32px',
    borderRadius: '30px',
    fontWeight: '700',
    backgroundColor: '#ec4899',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(236, 72, 153, 0.3)'
  }}
>
  📥 Download My Resume
</a>
    </div>
  );
};

export default ResumeCTA;