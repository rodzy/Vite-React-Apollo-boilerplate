import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

/* Set up your client from your backend server
   this (uri) param sets up your backend Apollo server
   for the client to receive data, in this case is the
   localhost defined from my other example: 
    https://github.com/rodzy/graphql-apollo-starter.
*/
const client = new ApolloClient({
  uri: "https://localhost:4000/graphql",
});

/* The Apollo Provider wraps all the SPA App
   to give access to the API data flow inside 
   the DOM
*/
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
