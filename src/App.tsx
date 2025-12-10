import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img
            src={"https://cdn-icons-png.flaticon.com/128/10003/10003660.png"}
            className="logo"
            alt="Vite logo"
          />
        </a>
      </div>
      <h1>Anmol Budakoti</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Votes are {count}
        </button>
      </div>
    </>
  );
}

export default App;
