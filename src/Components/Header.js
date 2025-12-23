import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import '../Assets/CSS/Header.css';

// ===========================
// HEADER NAVIGATION CONFIG
// ===========================

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Project' },
  { id: 'contact', label: 'Contact' },
];

const LOGO_TEXT = 'Abdul Aziz.';
const LOGO_ARIA_LABEL = 'Abdul Aziz - Go to home section';

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
      <Link to="home" smooth={true} duration={100} className="logo" aria-label={LOGO_ARIA_LABEL}>
        {LOGO_TEXT}
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
        {NAV_LINKS.map((nav) => (
          <Link
            key={nav.id}
            to={nav.id}
            smooth={true}
            duration={100}
            className={activeSection === nav.id ? 'a active' : 'a'}
            aria-current={activeSection === nav.id ? 'page' : undefined}
          >
            {nav.label}
          </Link>
        ))}

        <span className="active-nav" aria-hidden="true"></span>
        <span className="animate" style={{ '--i': 3 }} aria-hidden="true"></span>
      </nav>
    </header>
  );
}

export default React.memo(Header);
