import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const items = ['one', 'two', 'three'];

  const countHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h2>React App</h2>
      <ul>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
      <button onClick={countHandler}>{count}</button>
    </div>
  );
}

export default App;
