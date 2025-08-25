import { render, screen } from '@testing-library/react';
import Greet1 from './Greet1';

test('renders with provided name', () => {
  render(<Greet1 name="Purushoth" />);
  expect(screen.getByText(/Hello, Purushoth!/i)).toBeInTheDocument();
});

test('renders with default name', () => {
  render(<Greet1 />);
  expect(screen.getByText(/Hello, Guest!/i)).toBeInTheDocument();
});
