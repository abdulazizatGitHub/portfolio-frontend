import '../Assets/CSS/Education.css';
import { FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import React, { useEffect, useRef, useState } from 'react';
import useFadeOnScroll from '../hooks/useFadeOnScroll';

// ===============================
// EDUCATION & EXPERIENCE DATA
// ===============================

import {
  EDUCATION_ENTRIES as MOCK_EDUCATION,
  EXPERIENCE_ENTRIES as MOCK_EXPERIENCE,
} from '../data/mockData';

const EDUCATION_ENTRIES = MOCK_EDUCATION;
const EXPERIENCE_ENTRIES = MOCK_EXPERIENCE;

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

  const [eduCardVis, setEduCardVis] = useState(Array(EDUCATION_ENTRIES.length).fill(false));
  const [expCardVis, setExpCardVis] = useState(Array(EXPERIENCE_ENTRIES.length).fill(false));

  useEffect(() => {
    eduCardsRef.current = eduCardsRef.current.slice(0, EDUCATION_ENTRIES.length);
    expCardsRef.current = expCardsRef.current.slice(0, EXPERIENCE_ENTRIES.length);

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
            {EDUCATION_ENTRIES.map((entry, index) => (
              <div
                key={entry.title}
                className={`education-content ${eduCardVis[index] ? 'fade-in' : 'fade-out'}`}
                ref={(el) => (eduCardsRef.current[index] = el)}
              >
                <div className="content">
                  <div className="year">
                    <FaCalendarAlt className="calender" /> {entry.period}
                  </div>
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="education-column">
          <h3 className={`title ${expTitleClass}`} ref={expTitleRef}>
            Experience
          </h3>
          <div className="education-box">
            {EXPERIENCE_ENTRIES.map((entry, index) => (
              <div
                key={entry.title}
                className={`education-content ${expCardVis[index] ? 'fade-in' : 'fade-out'}`}
                ref={(el) => (expCardsRef.current[index] = el)}
              >
                <div className="content">
                  <div className="year">
                    <FaBriefcase className="calender" /> {entry.period}
                  </div>
                  <h3>{entry.title}</h3>
                  <p>{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Education);
