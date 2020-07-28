import React from "react";
import graphql from "../static/graphql.svg";
import react from "../static/react.svg";
import "../styles/App.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logos">
          <img src={react} className="App-logo" alt="logo" />
          <img src={graphql} className="App-logo-gql" alt="logo" />
        </div>
        <p>Hello Vite + React + Apollo</p>
        <Link to="/page-2">Go to page 2</Link>
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
};

export default Home;
