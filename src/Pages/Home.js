import '../Assets/CSS/Home.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ProfileImg from '../Assets/Images/MyImage.jpeg';
import React, { useRef, useEffect, useState, useMemo } from 'react';
import useFadeOnScroll from '../hooks/useFadeOnScroll';

function Home() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imgRef = useRef(null);

  const sectionClass = useFadeOnScroll(sectionRef, 0.2);
  const contentClass = useFadeOnScroll(contentRef, 0.2);
  const imgClass = useFadeOnScroll(imgRef, 0.2);

  const [displayText, setDisplayText] = useState('');

  // Fix: Use useMemo to memoize the roles array
  const roles = useMemo(
    () => ['AI/ML Engineer', 'Software Engineer', 'Full-Stack Developer', 'Frontend Developer'],
    []
  ); // Empty dependency array means this only gets created once

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(currentRole.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]); // Now roles is stable

  // Function to handle CV download
  const handleDownloadCV = () => {
    // Correct path for files in public folder
    const cvUrl = '/My CV (Updated).pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Abdul-Aziz-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle navigation to contact section
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className={`home ${sectionClass}`}
      id="home"
      ref={sectionRef}
      aria-label="Home section - Introduction"
    >
      <div className="home-hero-container">
        <div className={`home-content ${contentClass}`} ref={contentRef}>
          <h1 className="hero-title">
            Hi, I'm <span>Abdul Aziz</span>
          </h1>
          <div className="text-animate" aria-live="polite" aria-atomic="true">
            <h3 className="hero-subtitle">
              <span aria-label={`Current role: ${displayText || 'Loading'}`}>{displayText}</span>
              <span className="cursor" aria-hidden="true">
                |
              </span>
            </h3>
          </div>
          <p className="hero-desc">
            Passionate Software Engineer specializing in AI/ML, Deep Learning, and Full-Stack
            Development. Experienced in GAN-based intrusion detection systems, computer vision
            applications, and building scalable web solutions with MERN stack. Let's build something
            extraordinary together.
          </p>
          <div className="btn-box" role="group" aria-label="Action buttons">
            <button
              onClick={handleDownloadCV}
              className="btn"
              aria-label="Download Abdul Aziz's CV"
            >
              Download CV
            </button>
            <button
              onClick={handleContactClick}
              className="btn"
              aria-label="Navigate to contact section"
            >
              Let's Talk
            </button>
          </div>
          <div className="home-sci" role="list" aria-label="Social media links">
            <a
              href="https://www.linkedin.com/in/abdulaziz-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Abdul Aziz's LinkedIn profile (opens in new tab)"
              role="listitem"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <a
              href="https://github.com/abdulazizatGitHub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Abdul Aziz's GitHub profile (opens in new tab)"
              role="listitem"
            >
              <FaGithub aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="home-image-container">
          <img
            src={ProfileImg}
            alt="Abdul Aziz - AI/ML Engineer and Full-Stack Developer"
            className={`home-profile-img ${imgClass}`}
            ref={imgRef}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default React.memo(Home);
