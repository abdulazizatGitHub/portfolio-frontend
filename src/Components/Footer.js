import { Link } from 'react-scroll';
import '../Assets/CSS/Footer.css';
import { BiUpArrowAlt } from 'react-icons/bi';
import React from 'react';

// ===========================
// FOOTER CONTENT CONFIG
// ===========================

const FOOTER_CONTENT = {
  year: '2023',
  owner: 'Abdul Aziz',
  textSuffix: '| All Rights Reserved.',
};

/**
 * Footer Component
 * Displays copyright information and scroll-to-top button
 *
 * @component
 * @returns {JSX.Element} Footer element with copyright and scroll-to-top button
 */
function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-text">
        <p>
          Copyright &copy; {FOOTER_CONTENT.year} by {FOOTER_CONTENT.owner}{' '}
          {FOOTER_CONTENT.textSuffix}
        </p>
      </div>

      <div className="footer-iconTop">
        <Link
          className="uparrow"
          smooth={true}
          duration={500}
          to="home"
          aria-label="Scroll to top of page"
        >
          <BiUpArrowAlt className="uparrow-icon" aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
