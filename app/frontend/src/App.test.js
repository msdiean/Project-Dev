import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  render(<App />);
  expect(document.body).toBeTruthy();
});
