import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Test suite for App component
 */
describe('App Component', () => {
  test('renders header component', () => {
    render(<App />);
    // Use getAllByText since "Abdul Aziz" appears multiple times, then check the first one
    const logoElements = screen.getAllByText(/Abdul Aziz/i);
    expect(logoElements.length).toBeGreaterThan(0);
    expect(logoElements[0]).toBeInTheDocument();
  });

  test('renders home section', () => {
    render(<App />);
    // Use getAllByLabelText since "home section" appears in aria-label of logo link too
    const homeSections = screen.getAllByLabelText(/home section/i);
    expect(homeSections.length).toBeGreaterThan(0);
    // Check that we have a section element
    const section = homeSections.find((el) => el.tagName.toLowerCase() === 'section');
    expect(section).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<App />);
    // react-scroll Link components render as <a> tags in tests
    // Check that navigation links exist (some text may appear multiple times, so use getAllByText)
    const nav = screen.getByRole('navigation', { name: /main navigation/i });
    expect(nav).toBeInTheDocument();

    // Verify navigation links are present (some text appears in both nav and content)
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Education').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Skills').length).toBeGreaterThan(0);
    expect(screen.getByText('Project')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders footer', () => {
    render(<App />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });
});
