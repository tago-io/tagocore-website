import globalCss from "../styles/Global";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import Head from "next/head";
import Meta from "../components/Meta/Meta";
import PageProgressBar from "../components/Page/ProgressBar/ProgressBar";

/**
 * Apollo client to use queries in components.
 */
export const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

/**
 * Main component.
 */
function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
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
