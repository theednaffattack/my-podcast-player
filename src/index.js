import React from "react";
import ReactDOM from "react-dom";
import cookie from "cookie";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { navigate } from "@reach/router";
import { setContext } from "apollo-link-context";

import gql from "graphql-tag";

import { ApolloProvider } from "react-apollo";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

function parseCookies(req, options = {}) {
  return cookie.parse(
    req ? req.headers.cookie || "" : document.cookie,
    options
  );
}

const getToken = () => {
  return parseCookies().token;
};

const homeHost = "192.168.1.8";

// const regularHost = "0.0.0.0";

const httpLink = createHttpLink({
  //   uri: "https://48p1r2roz4.sse.codesandbox.io"
  uri: `http://${homeHost}:7777/graphql`, // process.env.SERVER_URL, // "http://localhost:4000/graphql",

  //   uri: "/graphql",
  credentials: "include"
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) => {
      // consider stryingifying the erros below so that I can always see them
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
      if (message.includes("Not authenticated")) {
        // Router.replace("/login");
        navigate(`/login`);
      }
      // the return below is to silence es-lint
      return "";
    });
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  return {
    headers: {
      ...headers,
      cookie: token ? `qid=${token}` : ""
    }
  };
});

const client = new ApolloClient({
  //   uri: "https://48p1r2roz4.sse.codesandbox.io",
  //   link,
  link: errorLink.concat(authLink.concat(httpLink)),

  cache: new InMemoryCache()
});

// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log("result", result));

client
  .query({
    query: gql`
      {
        getAllPodcasts {
          name
          image
          title
          feedLink

          episodes {
            id
            url
            text
            date
          }
        }
      }
    `
  })
  .then(result => result);

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
