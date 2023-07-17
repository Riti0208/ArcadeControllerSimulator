import Document, { Html, Head, Main, NextScript } from "next/document";
import B from "@/libs/basepath";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="manifest"
            href={B("/ArcadeControllerSimulator/manifest.json")}
            crossOrigin="use-credentials"
          ></link>
          <link rel="apple-touch-icon" href={B("/icon.png")}></link>
          <meta name="theme-color" content="#fff" />
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
