import React from 'react';

const Navbar = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: '#2c3e50', /* Your portfolio's dark text color */
    fontWeight: '600',
    fontSize: '0.95rem',
    transition: 'color 0.2s ease',
    cursor: 'pointer'
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.8)', /* Glassmorphism background */
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
      padding: '15px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      {/* Left side: Your initials/logo */}
      <div style={{ fontWeight: '800', fontSize: '1.2rem', color: '#1a2a3a' }}>
        GRK
      </div>

      {/* Right side: Navigation Links */}
      <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
        <a href="#home" style={linkStyle} onMouseOver={(e) => e.target.style.color = '#ec4899'} onMouseOut={(e) => e.target.style.color = '#2c3e50'}>Home</a>
        <a href="#about" style={linkStyle} onMouseOver={(e) => e.target.style.color = '#ec4899'} onMouseOut={(e) => e.target.style.color = '#2c3e50'}>About</a>
        <a href="#projects" style={linkStyle} onMouseOver={(e) => e.target.style.color = '#ec4899'} onMouseOut={(e) => e.target.style.color = '#2c3e50'}>Projects</a>
        
        {/* 👇 THIS IS THE NEW LINK THAT WAS MISSING */}
        <a 
          href="#accounts" 
          style={linkStyle} 
          onMouseOver={(e) => e.target.style.color = '#ec4899'} 
          onMouseOut={(e) => e.target.style.color = '#2c3e50'}
        >
          Accounts
        </a>
        
        <a href="#contact" style={linkStyle} onMouseOver={(e) => e.target.style.color = '#ec4899'} onMouseOut={(e) => e.target.style.color = '#2c3e50'}>Get In Touch</a>
      </nav>
    </header>
  );
};

export default Navbar;