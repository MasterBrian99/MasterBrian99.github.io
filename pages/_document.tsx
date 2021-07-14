import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="keywords"
            content="portfolio,my portfolio,online portfolio,portfolio websites,design portfolio,Pasindu p konghawaththa"
          ></meta>
          <meta name="author" content="Pasindu p konghawaththa"></meta>
          <meta name="google" content="Pasindu p konghawaththa" />
          <meta
            name="description"
            content="Pasindu p konghawaththa-I am a programmer with good knowledge
                     of frontend and backend techniques.I love spending time on fixing little details and optimizing web apps.   "
          />
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
