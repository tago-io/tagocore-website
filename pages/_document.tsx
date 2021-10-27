import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.png" />
          <meta
            name="description"
            content="TagoCore is a free, fast, and open-source IoT platform for edge computing."
          />
          <meta name="theme-color" content="#093a63" />

          <meta property="og:locale" name="og:locale" content="en_US" />
          <meta property="og:type" name="og:type" content="website" />
          <meta
            property="og:description"
            name="og:description"
            content="TagoCore is a free, fast, and open-source IoT platform for edge computing"
          />
          <meta property="og:site_name" name="og:site_name" content="TagoCore" />
          <meta property="og:title" name="og:title" content="TagoCore" />
          <meta property="og:image" name="og:image" content="/static/logo.png" />
          <meta property="og:image:type" name="og:image:type" content="image/png" />
          <meta property="og:image:width" name="og:image:width" content="2275" />
          <meta property="og:image:height" name="og:image:height" content="462" />
          <meta property="og:url" name="og:url" content="/" />

          <meta property="twitter:card" name="twitter:card" content="summary" />
          <meta property="twitter:site" name="twitter:site" content="@tagoio" />
          <meta property="twitter:creator" name="twitter:creator" content="@tagoio" />
          <meta
            property="twitter:description"
            name="twitter:description"
            content="TagoCore is a free, fast, and open-source IoT platform for edge computing."
          />
          <meta property="twitter:title" name="twitter:title" content="TagoCore" />
          <meta property="twitter:image" name="twitter:image" content="/static/logo.png" />
          <meta property="twitter:url" name="twitter:url" content="/" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
