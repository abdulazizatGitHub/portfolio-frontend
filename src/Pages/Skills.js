import '../Assets/CSS/Skills.css';
import React, { useEffect, useRef } from 'react';
import useFadeOnScroll from '../hooks/useFadeOnScroll';

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
              <div className="progress" ref={(el) => (progressRefs.current[0] = el)}>
                <h3>
                  Python <span>95%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[1] = el)}>
                <h3>
                  JavaScript <span>90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[2] = el)}>
                <h3>
                  React.js <span>92%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[3] = el)}>
                <h3>
                  Node.js & Express <span>88%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[4] = el)}>
                <h3>
                  MongoDB <span>85%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[5] = el)}>
                <h3>
                  SQL & PostgreSQL <span>82%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[6] = el)}>
                <h3>
                  Java & C++ <span>78%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[7] = el)}>
                <h3>
                  Git & GitHub <span>90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className={`title ${aiTitleClass}`} ref={aiTitleRef}>
            AI/ML & Specialized Skills
          </h3>

          <div className="skills-box">
            <div className={`skills-content ${aiContentClass}`} ref={aiContentRef}>
              <div className="progress" ref={(el) => (progressRefs.current[8] = el)}>
                <h3>
                  PyTorch & Deep Learning <span>93%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[9] = el)}>
                <h3>
                  TensorFlow & Keras <span>88%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[10] = el)}>
                <h3>
                  GANs & Computer Vision <span>90%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[11] = el)}>
                <h3>
                  NLP & Transformers <span>85%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[12] = el)}>
                <h3>
                  OpenCV & Image Processing <span>87%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[13] = el)}>
                <h3>
                  Flask & FastAPI <span>86%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>

              <div className="progress" ref={(el) => (progressRefs.current[14] = el)}>
                <h3>
                  IoT Security & IDS <span>88%</span>
                </h3>
                <div className="bar">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Skills);
