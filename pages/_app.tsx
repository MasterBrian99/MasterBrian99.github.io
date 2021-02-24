import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import 'rc-footer/assets/index.css';
import { render } from 'react-dom';


import type { AppProps /*, AppContext */ } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    AOS.init({
      delay: 500,
      duration: 800,
    });
  });
  return (
    <Component {...pageProps} />
  )
}


export default MyApp  