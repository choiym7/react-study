//import logo from './logo.svg';
import './count.css';
import { useState } from 'react';

function Count() {
  const [result, setResult] = useState(0);
  
  const plusBtn = () => {
    let plusCount = result + 1;
    setResult(plusCount);
  };
  
  const minusBtn = () => {
    let minusCount = result - 1;
    setResult(minusCount);
  };
  
  return (
    <div className="plus-minus-area">
      <section>
        <input type="text" id="number" className="countText" value={result} />
        <button id="increase" onClick={plusBtn}>+</button>
        <button id="decrease" onClick={minusBtn}>-</button>
      </section>
    </div>
  );
}

export default Count;
