import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import globalCss from "../styles/Global";
import themeCss from "../styles/Theme";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

/**
 * Main component.
 */
function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Header />
      <Component {...pageProps} />
      <Footer />

      <style jsx global>
        {globalCss}
      </style>

      <style jsx global>
        {themeCss}
      </style>
    </ApolloProvider>
  );
}

export default App;
