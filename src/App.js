import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ErrorBoundary from './Components/ErrorBoundary';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Project from './Pages/Project';

import { useEffect } from 'react';

/**
 * Main App Component
 * Wraps all sections in an ErrorBoundary for error handling
 * Sets up scroll animations using IntersectionObserver
 *
 * @component
 * @returns {JSX.Element} The main application structure
 */
function App() {
  useEffect(() => {
    // Check if IntersectionObserver is available (not available in test environment)
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const elements = document.querySelectorAll('.animate.scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Education />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
