import { render, screen } from '@testing-library/react';
import App from '../components/App';

test("renders Hello", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
