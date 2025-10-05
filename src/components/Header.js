import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Neal Bhalodia</h2>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
              <li><a href="/Neal-Bhalodia-resume.pdf" download className="nav-link resume-link">Resume</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
