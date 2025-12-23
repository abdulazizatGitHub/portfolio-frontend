import about from '../Assets/Images/about.png';
import '../Assets/CSS/About.css';
import React, { useRef } from 'react';
import useFadeOnScroll from '../hooks/useFadeOnScroll';

// ===========================
// ABOUT PAGE CONTENT CONFIG
// ===========================

const ABOUT_CONTENT = {
  heading: {
    prefix: 'About',
    highlight: 'Me',
  },
  roleTitle: 'AI/ML Engineer & Full-Stack Developer',
  paragraphs: [
    "I'm a passionate Software Engineer with expertise in Artificial Intelligence, Machine Learning, and Full-Stack Web Development. Currently working as a Frontend Developer at Inara Technologies, I bring a unique blend of AI/ML knowledge and web development skills.",
    'My journey includes groundbreaking research on GAN-based intrusion detection systems for IoT networks, developing computer vision applications like Virtual Try-On systems, and building scalable web solutions using the MERN stack. I am proficient in Python, PyTorch, TensorFlow, and modern web technologies.',
    "With a CGPA of 3.52 from COMSATS University and hands-on experience in AI/ML projects, I'm dedicated to creating innovative solutions that make a real impact. Let's collaborate and build the future together!",
  ],
  stats: [
    { label: 'CGPA', value: '3.52' },
    { label: 'Projects', value: '10+' },
    { label: 'Experience', value: '2+' },
  ],
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
