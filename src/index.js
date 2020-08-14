import React from "react";

import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "@apollo/client/link/context";
import Context from "./Context";

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: "https://petgram-server-24iykciv5.now.sh/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = sessionStorage.getItem("token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache,
});

const data = {
  isAuth: false,
};

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("root")
);
