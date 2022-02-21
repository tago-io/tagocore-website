import globalCss from "../styles/Global";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import Head from "next/head";
import Meta from "../components/Page/Meta/Meta";
import PageProgressBar from "../components/Page/ProgressBar/ProgressBar";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

/**
 * Apollo client to use queries in components.
 */
export const apolloClient = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions as never,
});

/**
 * Main component.
 */
function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <html lang="en" />
        <Meta />
      </Head>

      <PageProgressBar />

      <Component {...pageProps} />

      <style jsx global>
        {globalCss}
      </style>
    </ApolloProvider>
  );
}

export default App;
