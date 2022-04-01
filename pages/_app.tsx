import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";

import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  );
}
export default MyApp;
