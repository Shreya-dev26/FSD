import React, { useState } from 'react';
import '../styles/calc.css'; // Import custom CSS for styling

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=' && input !== '') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result || '0'}</div>
      </div>
      <div className="buttons">
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        {['0', '.', '=', '+'].map((item) => (
          <button key={item} onClick={() => handleClick(item)}>
            {item}
          </button>
        ))}
        <button className="clear" onClick={() => handleClick('C')}>
          C
        </button>
      </div>
    </div>
  );
};

export default Calculator;
