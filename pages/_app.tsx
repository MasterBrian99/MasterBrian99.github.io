import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import 'rc-footer/assets/index.css';
import { render } from 'react-dom';
import Head from 'next/head';

import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 800,
    });
  });
  return (
    <>
      <Head>
        <title>Pasindu p konghawaththa- Software developer,Programmer,Web developer,react developer     </title>

      </Head>
      <Component {...pageProps} />
    </>
  )
}


export default MyApp  