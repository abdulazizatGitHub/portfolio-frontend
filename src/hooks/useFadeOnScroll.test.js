import { renderHook } from '@testing-library/react';
import { useRef } from 'react';
import useFadeOnScroll from './useFadeOnScroll';

/**
 * Test suite for useFadeOnScroll hook
 */
describe('useFadeOnScroll', () => {
  let mockIntersectionObserver;
  let observe;
  let unobserve;
  let disconnect;

  beforeEach(() => {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();

    mockIntersectionObserver = jest.fn((_callback) => ({
      observe,
      unobserve,
      disconnect,
    }));

    window.IntersectionObserver = mockIntersectionObserver;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should return fade-out initially', () => {
    const { result } = renderHook(() => {
      const ref = useRef(null);
      return useFadeOnScroll(ref);
    });
    expect(result.current).toBe('fade-out');
  });

  test('should observe the element when ref is provided', () => {
    renderHook(() => {
      const ref = useRef(document.createElement('div'));
      return useFadeOnScroll(ref);
    });

    expect(mockIntersectionObserver).toHaveBeenCalled();
    expect(observe).toHaveBeenCalled();
  });

  test('should use default threshold of 0.2', () => {
    renderHook(() => {
      const ref = useRef(document.createElement('div'));
      return useFadeOnScroll(ref);
    });

    expect(mockIntersectionObserver).toHaveBeenCalledWith(expect.any(Function), { threshold: 0.2 });
  });

  test('should use custom threshold when provided', () => {
    renderHook(() => {
      const ref = useRef(document.createElement('div'));
      return useFadeOnScroll(ref, 0.5);
    });

    expect(mockIntersectionObserver).toHaveBeenCalledWith(expect.any(Function), { threshold: 0.5 });
  });

  test('should cleanup observer on unmount', () => {
    const { unmount } = renderHook(() => {
      const ref = useRef(document.createElement('div'));
      return useFadeOnScroll(ref);
    });

    unmount();

    expect(unobserve).toHaveBeenCalled();
  });
});
