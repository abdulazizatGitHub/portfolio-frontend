import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

/**
 * Test suite for Header component
 */
describe('Header Component', () => {
  test('renders logo with name', () => {
    render(<Header />);
    const logo = screen.getByText(/Abdul Aziz/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    render(<Header />);
    // react-scroll Link components don't render as standard links in tests
    // So we check for the text content instead
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Project')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('toggles menu on button click', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button', { name: /open navigation menu/i });

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  });

  test('has proper ARIA labels', () => {
    render(<Header />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
  });
});
