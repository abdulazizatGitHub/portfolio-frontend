import '../Assets/CSS/Education.css';
import { FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';
import useFadeOnScroll from '../hooks/useFadeOnScroll';

function Education() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const eduTitleRef = useRef(null);
  const expTitleRef = useRef(null);
  const eduCardsRef = useRef([]);
  const expCardsRef = useRef([]);

  const sectionClass = useFadeOnScroll(sectionRef, 0.3);
  const headingClass = useFadeOnScroll(headingRef, 0.3);
  const eduTitleClass = useFadeOnScroll(eduTitleRef, 0.3);
  const expTitleClass = useFadeOnScroll(expTitleRef, 0.3);

  const [eduCardVis, setEduCardVis] = useState([false, false, false]);
  const [expCardVis, setExpCardVis] = useState([false, false, false]);

  useEffect(() => {
    eduCardsRef.current = eduCardsRef.current.slice(0, 3);
    expCardsRef.current = expCardsRef.current.slice(0, 3);

    const eduObservers = eduCardsRef.current.map((ref, idx) => {
      if (!ref) return null;
      return new window.IntersectionObserver(
        ([entry]) => {
          setEduCardVis((vis) => {
            const updated = [...vis];
            updated[idx] = entry.isIntersecting;
            return updated;
          });
        },
        { threshold: 0.3 }
      );
    });
    eduCardsRef.current.forEach((refObj, idx) => {
      if (refObj && eduObservers[idx]) eduObservers[idx].observe(refObj);
    });

    const expObservers = expCardsRef.current.map((ref, idx) => {
      if (!ref) return null;
      return new window.IntersectionObserver(
        ([entry]) => {
          setExpCardVis((vis) => {
            const updated = [...vis];
            updated[idx] = entry.isIntersecting;
            return updated;
          });
        },
        { threshold: 0.3 }
      );
    });
    expCardsRef.current.forEach((refObj, idx) => {
      if (refObj && expObservers[idx]) expObservers[idx].observe(refObj);
    });

    return () => {
      eduCardsRef.current.forEach((refObj, idx) => {
        if (refObj && eduObservers[idx]) eduObservers[idx].unobserve(refObj);
      });
      expCardsRef.current.forEach((refObj, idx) => {
        if (refObj && expObservers[idx]) expObservers[idx].unobserve(refObj);
      });
    };
  }, []);

  return (
    <section className={`education ${sectionClass}`} id="education" ref={sectionRef}>
      <h2 className={`heading ${headingClass}`} ref={headingRef}>
        My <span>Journey</span>
      </h2>
      <div className="education-row">
        <div className="education-column">
          <h3 className={`title ${eduTitleClass}`} ref={eduTitleRef}>
            Education
          </h3>
          <div className="education-box">
            <div
              className={`education-content ${eduCardVis[0] ? 'fade-in' : 'fade-out'}`}
              ref={(el) => (eduCardsRef.current[0] = el)}
            >
              <div className="content">
                <div className="year">
                  <FaCalendarAlt className="calender" /> 2017 - 2019
                </div>
                <h3>Matriculation (Science) - FG Public School Batkhela</h3>
                <p>
                  Completed secondary education with excellent grades (1009/1100), building a strong
                  foundation in science subjects that sparked my interest in technology and
                  innovation.
                </p>
              </div>
            </div>
            <div
              className={`education-content ${eduCardVis[1] ? 'fade-in' : 'fade-out'}`}
              ref={(el) => (eduCardsRef.current[1] = el)}
            >
              <div className="content">
                <div className="year">
                  <FaCalendarAlt className="calender" /> 2019 - 2021
                </div>
                <h3>Intermediate (Pre-Engineering) - Islamia College Peshawar</h3>
                <p>
                  Pursued Pre-Engineering with marks of 814/1100. Served as Monitor of Osmania
                  Hostel and member of the Management Team, developing leadership and teamwork
                  skills.
                </p>
              </div>
            </div>
            <div
              className={`education-content ${eduCardVis[2] ? 'fade-in' : 'fade-out'}`}
              ref={(el) => (eduCardsRef.current[2] = el)}
            >
              <div className="content">
                <div className="year">
                  <FaCalendarAlt className="calender" /> 2021 - 2025
                </div>
                <h3>Bachelor of Science in Software Engineering - COMSATS University</h3>
                <p>
                  Graduated with CGPA 3.52/4.00 from COMSATS University Islamabad, Abbottabad
                  Campus. Specialized in AI/ML, Deep Learning, and Full-Stack Development with
                  groundbreaking research on GAN-based intrusion detection systems.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="education-column">
          <h3 className={`title ${expTitleClass}`} ref={expTitleRef}>
            Experience
          </h3>
          <div className="education-box">
            <div
              className={`education-content ${expCardVis[0] ? 'fade-in' : 'fade-out'}`}
              ref={(el) => (expCardsRef.current[0] = el)}
            >
              <div className="content">
                <div className="year">
                  <FaBriefcase className="calender" /> Oct 2025 - Present
                </div>
                <h3>Frontend Developer - Inara Technologies Pvt. Limited</h3>
                <p>
                  Designing responsive dashboards and admin panels with focus on usability and
                  performance. Collaborating with backend teams to integrate RESTful APIs for
                  seamless user experiences.
                </p>
              </div>
            </div>
            <div
              className={`education-content ${expCardVis[1] ? 'fade-in' : 'fade-out'}`}
              ref={(el) => (expCardsRef.current[1] = el)}
            >
              <div className="content">
                <div className="year">
                  <FaBriefcase className="calender" /> Aug 2025 - Oct 2025
                </div>
                <h3>AI/ML Intern - Omnisolve AI (Remote)</h3>
                <p>
                  Contributed to Virtual Try-On E-commerce System using CP-VTON for realistic
                  clothing simulation. Built personalized AI shopbot for intelligent, context-aware
                  product recommendations.
                </p>
              </div>
            </div>
            <div
              className={`education-content ${expCardVis[2] ? 'fade-in' : 'fade-out'}`}
              ref={(el) => (expCardsRef.current[2] = el)}
            >
              <div className="content">
                <div className="year">
                  <FaBriefcase className="calender" /> Sept 2024 - June 2025
                </div>
                <h3>Research Project - IoT Intrusion Detection using GANs</h3>
                <p>
                  Designed Dynamic Class-Weighted GAN (DCSW-GAN) to address class imbalance in IoT
                  intrusion detection. Achieved improved minority-class recall on UNSW-NB15 and
                  CICIDS-2017 datasets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Education);
