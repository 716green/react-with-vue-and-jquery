import React, { useState } from 'react';
import ReactSfc from './ReactSfc';

function App() {
  const [count, setCount] = useState(0);
  const [showNotes, setShowNotes] = useState(true);
  const items = ['one', 'two', 'three'];

  const countHandler = () => {
    setCount(count + 1);
  };

  const showNotesHandler = () => {
    setShowNotes(!showNotes);
  };

  return (
    <div>
      <section
        style={{ position: 'fixed', top: '5%', left: '25%' }}
        className="App">
        <h2>React App</h2>
        <ul>
          {items.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
        <button onClick={countHandler}>{count}</button>
        <ReactSfc title="React Component" />
      </section>
      <button
        style={{ position: 'fixed', bottom: 0, alignContent: 'center' }}
        onClick={showNotesHandler}>
        {showNotes ? 'Hide' : 'Show'} Notes
      </button>
      {showNotes && (
        <div style={{ position: 'fixed', left: '5%', bottom: '5%' }}>
          <p>
            This app uses React (packaged and bundled) and Vue 3 with the
            vue@next CDN.
          </p>
          <p>
            React components can be natively added, Vue components are imported
            with JQuery.
          </p>

          <p>
            React is in the src/ folder, Vue is in the /public folder. Both
            React and Vue are mounted at /public/index.html
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
