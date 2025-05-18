import Footer from '@/components/footer';
import Nav from '@/components/nav';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';
import { Epilogue } from 'next/font/google';

import NextTopLoader from 'nextjs-toploader';

import { Analytics } from '@vercel/analytics/react';

import { SearchContextProvider } from '@/contexts/search.context';
import { ThemeContextProvider } from '@/contexts/theme.context';
import { Metadata } from 'next';
import { FC, ReactNode } from 'react';

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Home | Carlo Taleon',
  description:
    "A code-slinging Software Engineer from the Philippines who's on a quest to touch people's lives, one app at a time.",
  openGraph: {
    images: ['imgs/image-meta.png'],
    url: 'https://carlo.vercel.app',
    title: 'Home | Carlo Taleon',
    siteName: 'Carlo Taleon',
  },
  keywords: [
    'carlo taleon',
    'west visayas state university',
    'computer science',
    'web development',
  ],
  twitter: {
    images: ['imgs/image-meta.png'],
  },
};

const epilogueFont = Epilogue({
  subsets: ['latin'],
});

const RootLayout: FC<RootLayoutProps> = (props) => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <html lang="en" className={epilogueFont.className}>
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
      {process.env.NODE_ENV === 'production' && <Analytics />}
      <body
        className="flex min-h-screen flex-col"
        style={{ overscrollBehaviorY: 'contain' }}
      >
        <ThemeContextProvider>
          <SearchContextProvider>
            <NextTopLoader color="var(--primary)" showSpinner={false} />
            <Nav />
            <main className="flex flex-grow flex-col">{props.children}</main>
            <Footer />
            <Toaster
              toastOptions={{
                style: {
                  background: 'var(--background)',
                  color: 'var(--foreground)',
                  borderWidth: '1px',
                  borderColor: 'var(--border)',
                },
              }}
            />
          </SearchContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
