import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">MyPortfolio</div>
      <ul className="nav-links">
  <li><a href="#hero">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#achievements">Achievements</a></li>
  <li><a href="#education">Education</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
    </nav>
  );
};

export default Navbar;