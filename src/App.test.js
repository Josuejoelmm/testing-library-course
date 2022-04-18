import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button turns blue when clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // fire click to button
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});

  expect(colorButton.textContent).toBe('Change to red');
});

test('Initial conditions for button and checkbox', () => {
  render(<App />);
  
  // button has to be Enabled
  const buttonEnabled = screen.getByRole('button', { name: 'Change to blue' });
  
  expect(buttonEnabled).toBeEnabled();

  // checkbox has to be Unchecked
  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).not.toBeChecked();
});

test('Button has to be disabled after checked checkbox', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox');
  const buttonColor = screen.getByRole('button', { name: 'Change to blue' });

  // checkbox has to be checked, then the button to be disabled
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(buttonColor).toBeDisabled();
  
  // Check if togle to enabled the button
  fireEvent.click(checkbox);
  expect(buttonColor).toBeEnabled();
});
