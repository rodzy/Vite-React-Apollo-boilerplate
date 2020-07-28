import React, { useState } from "react";
import graphql from "./static/graphql.svg";
import react from "./static/react.svg";
import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logos">
          <img src={react} className="App-logo" alt="logo" />
          <img src={graphql} className="App-logo-gql" alt="logo" />
        </div>
        <p>Hello Vite + React + Apollo</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
