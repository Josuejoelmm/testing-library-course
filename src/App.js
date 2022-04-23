import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelCaseWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [isDisabledButton, setisDisabledButton] = useState(false);
  const newColorButton = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';
  const backgroundButtonColor = isDisabledButton ? 'gray' : buttonColor;

  return (
    <div>
      <button
        style={{ backgroundColor: backgroundButtonColor }}
        onClick={() => setButtonColor(newColorButton)}
        {...(isDisabledButton ? { disabled: isDisabledButton } : {})}
      >
          {`Change to ${replaceCamelCaseWithSpaces(newColorButton)}`}
      </button>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={isDisabledButton}
        aria-checked={isDisabledButton}
        onClick={() => setisDisabledButton(!isDisabledButton)}
      />
    </div>
  );
}

export default App;
