import about from '../Assets/Images/about.png';
import '../Assets/CSS/About.css';
import React, { useRef } from 'react';
import useFadeOnScroll from '../hooks/useFadeOnScroll';

import { ABOUT_CONTENT as MOCK_ABOUT_CONTENT } from '../data/mockData';

const ABOUT_CONTENT = {
  ...MOCK_ABOUT_CONTENT,
  heading: {
    prefix: 'About',
    highlight: 'Me',
  },
};

function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  const sectionClass = useFadeOnScroll(sectionRef, 0.3);
  const headingClass = useFadeOnScroll(headingRef, 0.3);
  const imgClass = useFadeOnScroll(imgRef, 0.3);
  const contentClass = useFadeOnScroll(contentRef, 0.3);

  return (
    <section className={`about ${sectionClass}`} id="about" ref={sectionRef}>
      <h2 className={`heading ${headingClass}`} ref={headingRef}>
        {ABOUT_CONTENT.heading.prefix} <span>{ABOUT_CONTENT.heading.highlight}</span>
      </h2>

      <div className={`about-img ${imgClass}`} ref={imgRef}>
        <img
          src={about}
          alt="Abdul Aziz - AI/ML Engineer and Full-Stack Developer"
          loading="lazy"
        />
        <span className="circle-spin" aria-hidden="true"></span>
      </div>

      <div className={`about-content ${contentClass}`} ref={contentRef}>
        <h3>{ABOUT_CONTENT.roleTitle}</h3>
        {ABOUT_CONTENT.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
        <div className="about-stats">
          {ABOUT_CONTENT.stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default React.memo(About);
