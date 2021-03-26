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
          <link rel="icon" type="image/png" href="/favicon-32x32.png" />
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
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
          ></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap"
            rel="stylesheet"
          ></link>
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
