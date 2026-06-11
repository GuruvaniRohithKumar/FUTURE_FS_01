import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">MyPortfolio</div>
      <ul className="nav-links">
  <li><a href="#hero">Home</a></li>
  <li><a href="#about">About</a></li>
  {/* Add this inside your navigation link list */}
<a 
  href="#accounts" 
  style={{
    textDecoration: 'none',
    color: 'inherit', /* Inherits your portfolio's existing text color */
    fontWeight: '600',
    fontSize: '1rem',
    cursor: 'pointer'
  }}
>
  Accounts
</a>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#achievements">Achievements</a></li>
  <li><a href="#education">Education</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
    </nav>
  );
};

export default Navbar;