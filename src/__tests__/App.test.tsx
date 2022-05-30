import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders heading hello world', () => {
  render(<App />);
  const h1Elem = screen.getByText(/hello world/i);
  expect(h1Elem).toBeInTheDocument();
});
