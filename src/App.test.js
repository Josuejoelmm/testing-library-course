import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelCaseWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to midnightblue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'mediumvioletred' });
});

test('button turns blue when clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to midnightblue' });

  // fire click to button
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'midnightblue'});

  expect(colorButton.textContent).toBe('Change to mediumvioletred');
});

test('Initial conditions for button and checkbox', () => {
  render(<App />);
  
  // button has to be Enabled
  const buttonEnabled = screen.getByRole('button', { name: 'Change to midnightblue' });
  
  expect(buttonEnabled).toBeEnabled();

  // checkbox has to be Unchecked
  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).not.toBeChecked();
});

test('Button has to be disabled after checked checkbox', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const buttonColor = screen.getByRole('button', { name: 'Change to midnightblue' });

  // checkbox has to be checked, then the button to be disabled
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(buttonColor).toBeDisabled();
  
  // Check if togle to enabled the button
  fireEvent.click(checkbox);
  expect(buttonColor).toBeEnabled();
});

test("Button should be gray when it's disabled", () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const buttonColor = screen.getByRole('button', { name: 'Change to midnightblue' });
  // test flow 1: disable button -> button is gray -> enable button -> button is red
  // disable button
  fireEvent.click(checkbox);
  
  expect(buttonColor).toHaveStyle({ backgroundColor: 'gray' });
  
  // enable button
  fireEvent.click(checkbox);
  
  expect(buttonColor).toHaveStyle({ backgroundColor: 'mediumvioletred' });

  // test flow 2: click button to change color -> disable button -> button is gray
  
  fireEvent.click(buttonColor);
  fireEvent.click(checkbox);
  
  expect(buttonColor).toHaveStyle({ backgroundColor: 'gray' });

   // test flow 3: enable button -> button is blue

  fireEvent.click(checkbox);
  
  expect(buttonColor).toHaveStyle({ backgroundColor: 'midnightblue' });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});