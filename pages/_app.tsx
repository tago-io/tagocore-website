import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import globalCss from "../styles/Global";
import themeCss from "../styles/Theme";

/**
 * Main component.
 */
function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />

      <style jsx global>
        {globalCss}
      </style>

      <style jsx global>
        {themeCss}
      </style>
    </>
  );
}

export default App;
