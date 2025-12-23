import '../Assets/CSS/Skills.css';
import React, { useEffect, useRef } from 'react';
import useFadeOnScroll from '../hooks/useFadeOnScroll';

// ===========================
// SKILLS DATA CONFIG
// ===========================

const TECHNICAL_SKILLS = [
  { name: 'Python', level: '95%' },
  { name: 'JavaScript', level: '90%' },
  { name: 'React.js', level: '92%' },
  { name: 'Node.js & Express', level: '88%' },
  { name: 'MongoDB', level: '85%' },
  { name: 'SQL & PostgreSQL', level: '82%' },
  { name: 'Java & C++', level: '78%' },
  { name: 'Git & GitHub', level: '90%' },
];

const AI_SKILLS = [
  { name: 'PyTorch & Deep Learning', level: '93%' },
  { name: 'TensorFlow & Keras', level: '88%' },
  { name: 'GANs & Computer Vision', level: '90%' },
  { name: 'NLP & Transformers', level: '85%' },
  { name: 'OpenCV & Image Processing', level: '87%' },
  { name: 'Flask & FastAPI', level: '86%' },
  { name: 'IoT Security & IDS', level: '88%' },
];

function Skills() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const techTitleRef = useRef(null);
  const aiTitleRef = useRef(null);
  const techContentRef = useRef(null);
  const aiContentRef = useRef(null);
  const progressRefs = useRef([]);

  const sectionClass = useFadeOnScroll(sectionRef, 0.3);
  const headingClass = useFadeOnScroll(headingRef, 0.3);
  const techTitleClass = useFadeOnScroll(techTitleRef, 0.3);
  const aiTitleClass = useFadeOnScroll(aiTitleRef, 0.3);
  const techContentClass = useFadeOnScroll(techContentRef, 0.3);
  const aiContentClass = useFadeOnScroll(aiContentRef, 0.3);

  useEffect(() => {
    const observers = [];
    progressRefs.current.forEach((progress) => {
      if (!progress) return;
      const bar = progress.querySelector('.bar span');
      const percent = progress.querySelector('h3 span');
      if (!bar || !percent) return;

      bar.style.setProperty('--bar-width', '0%');
      progress.classList.remove('fade-in');

      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            bar.style.setProperty('--bar-width', percent.textContent);
            bar.classList.add('bar-animate');
            progress.classList.add('fade-in');
          } else {
            bar.style.setProperty('--bar-width', '0%');
            bar.classList.remove('bar-animate');
            progress.classList.remove('fade-in');
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(progress);
      observers.push(observer);
    });
    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <section className={`skills ${sectionClass}`} id="skills" ref={sectionRef}>
      <h2 className={`heading ${headingClass}`} ref={headingRef}>
        My <span>Skills</span>
      </h2>

      <div className="skills-row">
        <div className="skills-column">
          <h3 className={`title ${techTitleClass}`} ref={techTitleRef}>
            Technical Skills
          </h3>

          <div className="skills-box">
            <div className={`skills-content ${techContentClass}`} ref={techContentRef}>
              {TECHNICAL_SKILLS.map((skill, index) => (
                <div
                  className="progress"
                  ref={(el) => (progressRefs.current[index] = el)}
                  key={skill.name}
                >
                  <h3>
                    {skill.name} <span>{skill.level}</span>
                  </h3>
                  <div className="bar">
                    <span></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className={`title ${aiTitleClass}`} ref={aiTitleRef}>
            AI/ML & Specialized Skills
          </h3>

          <div className="skills-box">
            <div className={`skills-content ${aiContentClass}`} ref={aiContentRef}>
              {AI_SKILLS.map((skill, index) => {
                const refIndex = TECHNICAL_SKILLS.length + index;
                return (
                  <div
                    className="progress"
                    ref={(el) => (progressRefs.current[refIndex] = el)}
                    key={skill.name}
                  >
                    <h3>
                      {skill.name} <span>{skill.level}</span>
                    </h3>
                    <div className="bar">
                      <span></span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Skills);
