import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import Page2 from "./pages/page-2";
import Home from "./pages/home";

const history = createBrowserHistory();

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page-2">
            <Page2 />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
