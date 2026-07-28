import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>
    </div>
  );
}

export default App;
