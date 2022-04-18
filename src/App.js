import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [isDisabledButton, setisDisabledButton] = useState(false);
  const newColorButton = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newColorButton)}
        {...(isDisabledButton ? { disabled: isDisabledButton } : {})}
      >
          {`Change to ${newColorButton}`}
      </button>
      <input
        type="checkbox"
        id="enable-checkbox"
        defaultChecked={isDisabledButton}
        aria-checked={isDisabledButton}
        onClick={() => setisDisabledButton(!isDisabledButton)}
      />
    </div>
  );
}

export default App;
