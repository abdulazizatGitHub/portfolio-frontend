import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import '../Assets/CSS/Header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionName = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(sectionName);
        setIsMenuOpen(false);

        section.classList.add('show-animate');
      } else {
        section.classList.remove('show-animate');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const MenuIcon = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  /**
   * Handle keyboard navigation for menu toggle
   * @param {KeyboardEvent} e - Keyboard event
   */
  const handleMenuKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      MenuIcon();
    } else if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="header" role="banner">
      <Link
        to="home"
        smooth={true}
        duration={100}
        className="logo"
        aria-label="Abdul Aziz - Go to home section"
      >
        Abdul Aziz.
        <span className="animate" aria-hidden="true"></span>
      </Link>

      <button
        onClick={MenuIcon}
        onKeyDown={handleMenuKeyDown}
        id="menu-icon"
        className="menu-toggle"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        type="button"
      >
        {isMenuOpen ? (
          <>
            <RxCross2 aria-hidden="true" />
            <span className="animate" style={{ '--i': 1 }} aria-hidden="true"></span>
          </>
        ) : (
          <>
            <FiMenu aria-hidden="true" />
            <span className="animate" style={{ '--i': 2 }} aria-hidden="true"></span>
          </>
        )}
      </button>

      <nav
        className={`navbar ${isMenuOpen ? 'active' : ''}`}
        id="main-navigation"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          to="home"
          smooth={true}
          duration={100}
          className={activeSection === 'home' ? 'a active' : 'a'}
          aria-current={activeSection === 'home' ? 'page' : undefined}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={100}
          className={activeSection === 'about' ? 'a active' : 'a'}
          aria-current={activeSection === 'about' ? 'page' : undefined}
        >
          About
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={100}
          className={activeSection === 'education' ? 'a active' : 'a'}
          aria-current={activeSection === 'education' ? 'page' : undefined}
        >
          Education
        </Link>
        <Link
          to="skills"
          smooth={true}
          duration={100}
          className={activeSection === 'skills' ? 'a active' : 'a'}
          aria-current={activeSection === 'skills' ? 'page' : undefined}
        >
          Skills
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={100}
          className={activeSection === 'projects' ? 'a active' : 'a'}
          aria-current={activeSection === 'projects' ? 'page' : undefined}
        >
          Project
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={100}
          className={activeSection === 'contact' ? 'a active' : 'a'}
          aria-current={activeSection === 'contact' ? 'page' : undefined}
        >
          Contact
        </Link>

        <span className="active-nav" aria-hidden="true"></span>
        <span className="animate" style={{ '--i': 3 }} aria-hidden="true"></span>
      </nav>
    </header>
  );
}

export default React.memo(Header);
