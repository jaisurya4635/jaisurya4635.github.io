import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">Jaisurya S M</div>
        
        <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('home')}>Home</a></li>
          <li><a onClick={() => scrollToSection('about')}>About</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
