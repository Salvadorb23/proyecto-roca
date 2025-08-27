import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Roca</h1>
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          Count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
