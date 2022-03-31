import { render, screen } from '@testing-library/react';
import Home from './index.js';
import App from '../../App';

test('renders landing page text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wszystko o kredycie hipotecznym/i);
  expect(linkElement).toBeInTheDocument();
});
