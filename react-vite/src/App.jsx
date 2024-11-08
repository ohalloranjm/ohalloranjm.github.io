import { useState } from 'react';

function App() {
  const [i, setI] = useState(0);
  const words = ['', 'Momo', 'Tatterpig', 'BudgetMe', 'Waterbnb'];
  return (
    <>
      <h1> Hello from App </h1>
      <p>
        If you&apos;re seeing this, it&apos;s because I&apos;m testing my
        environment on GitHub Pages. What unfortunate timing! It should be back
        to normal in like five minutes.
      </p>
      <button onClick={() => setI(prev => (prev + 1) % words.length)}>
        Click for a Project
      </button>
      <p>{words[i]}</p>
    </>
  );
}

export default App;
