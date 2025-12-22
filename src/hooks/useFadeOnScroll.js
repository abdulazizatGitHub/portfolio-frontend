import { useEffect, useState } from 'react';

/**
 * Custom hook for fade-in/fade-out animation on scroll
 * Uses IntersectionObserver to detect when elements enter the viewport
 * and applies fade-in/fade-out classes accordingly
 *
 * @param {React.RefObject} ref - Reference to the element to observe
 * @param {number} [threshold=0.2] - Intersection threshold (0-1), default 0.2
 * @returns {string} - 'fade-in' or 'fade-out' class name
 *
 * @example
 * const sectionRef = useRef(null);
 * const fadeClass = useFadeOnScroll(sectionRef, 0.3);
 * return <section ref={sectionRef} className={fadeClass}>Content</section>;
 */
function useFadeOnScroll(ref, threshold = 0.2) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if IntersectionObserver is available
    if (typeof window.IntersectionObserver === 'undefined') {
      // In test environment or browsers without support, default to visible
      setIsVisible(true);
      return;
    }

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [ref, threshold]);

  return isVisible ? 'fade-in' : 'fade-out';
}

export default useFadeOnScroll;
