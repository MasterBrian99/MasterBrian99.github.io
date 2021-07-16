import "../styles/globals.scss";
import "../styles/mediascreen.scss";
import { ChakraProvider } from "@chakra-ui/react";

import { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
