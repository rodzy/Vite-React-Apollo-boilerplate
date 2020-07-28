import React, { useState, lazy } from "react";
import graphql from "./static/graphql.svg";
import react from "./static/react.svg";
import "./styles/App.css";
import { Link, StaticRouter, Switch, Route } from "react-router-dom";
import Page2 from "./pages/page-2";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="App-logos">
            <img src={react} className="App-logo" alt="logo" />
            <img src={graphql} className="App-logo-gql" alt="logo" />
          </div>
          <p>Hello Vite + React + Apollo</p>
          <Link to="/pdos">Go to page 2</Link>
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
      <Switch>
        <Route path="/pdos">
          <Page2 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
