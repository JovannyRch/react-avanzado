import React from "react";

import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";

import { ApolloProvider } from "@apollo/react-hooks";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "https://petgram-server-24iykciv5.now.sh/graphql",
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
