import Document, { Html, Head, Main, NextScript } from "next/document";

/**
 * Each document in the application.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />

          <meta
            name="description"
            content="TagoCore is a free, fast, and open-source IoT platform for edge computing that you can use to parse and analyze the data from your devices, and more!"
          />
          <meta charSet="UTF-8" />
          <meta name="theme-color" content="#000000" />

          <meta property="og:locale" name="og:locale" content="en_US" />
          <meta property="og:type" name="og:type" content="website" />
          <meta
            property="og:description"
            name="og:description"
            content="TagoCore is a free, fast, and open-source IoT platform for edge computing"
          />
          <meta property="og:site_name" name="og:site_name" content="TagoCore" />
          <meta property="og:title" name="og:title" content="TagoCore" />
          <meta property="og:image" name="og:image" content="https://dcq0x5ztsejuu.cloudfront.net/logo-small.png" />
          <meta property="og:image:type" name="og:image:type" content="image/png" />
          <meta property="og:image:width" name="og:image:width" content="2275" />
          <meta property="og:image:height" name="og:image:height" content="462" />
          <meta property="og:url" name="og:url" content="https://dcq0x5ztsejuu.cloudfront.net/" />

          <meta property="twitter:card" name="twitter:card" content="summary" />
          <meta property="twitter:site" name="twitter:site" content="@tagoio" />
          <meta property="twitter:creator" name="twitter:creator" content="@tagoio" />
          <meta
            property="twitter:description"
            name="twitter:description"
            content="TagoCore is a free, fast, and open-source IoT platform for edge computing that you can use to parse and analyze the data from your devices, and more!"
          />
          <meta property="twitter:title" name="twitter:title" content="TagoCore" />
          <meta
            property="twitter:image"
            name="twitter:image"
            content="https://dcq0x5ztsejuu.cloudfront.net/logo-small.png"
          />
          <meta property="twitter:url" name="twitter:url" content="https://dcq0x5ztsejuu.cloudfront.net/" />
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
