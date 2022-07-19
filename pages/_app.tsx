import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components/Layout";

import { Toaster } from "react-hot-toast";
import NextHead from "next/head";
import MetaHeadEmbed from "@phntms/react-share/lib/components/MetaHeadEmbed";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead>
        <meta
          name="google-site-verification"
          content="Xc9Om93PVgBy3xwN6aPgKLGs4UNRZXQ5WsqMqeOiBMQ"
        />
        <link rel="icon" type="image/png" href="favicons/favicon.png" />
        <link
          rel="icon"
          sizes="192x192"
          href="favicons/android-chrome-192x192.png"
        />
        <link rel="apple-touch-icon" href="favicons/apple-touch-icon.png" />
        <meta name="theme-color" content="#3B82F6" />
        <meta property="og:type" content="website" />
      </NextHead>
      <MetaHeadEmbed
        render={(meta: React.ReactNode) => <NextHead>{meta}</NextHead>}
        siteTitle="Carlo Taleon"
        pageTitle="Home"
        titleTemplate="[siteTitle] | [pageTitle]"
        description="I'm currently a Senior pursuing a BS in Computer Science, major in AI at West Visayas State University, Iloilo."
        baseSiteUrl="https://carlo.vercel.app"
        pagePath=""
        keywords={[
          "carlo taleon",
          "west visayas state university",
          "computer science",
          "web development",
        ]}
        imageUrl="imgs/image-meta.png"
        imageAlt="Carlo Taleon Portfolio Site Image"
        twitter={{
          cardSize: "large",
          siteUsername: "@carlo_taleon",
          creatorUsername: "@carlo_taleon",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster />
    </>
  );
}
export default MyApp;
