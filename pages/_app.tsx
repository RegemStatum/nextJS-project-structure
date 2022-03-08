import type { AppProps } from "next/app";
// scss
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
