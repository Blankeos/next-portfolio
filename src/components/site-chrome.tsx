'use client';

import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';
import Footer from './footer';
import Nav from './nav';

type SiteChromeProps = {
  children: ReactNode;
};

const MINIMAL_ROUTES = ['/links'];

const SiteChrome: FC<SiteChromeProps> = ({ children }) => {
  const pathname = usePathname();
  const isMinimalRoute = MINIMAL_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  return (
    <>
      {!isMinimalRoute && <Nav />}
      <main className="flex flex-grow flex-col">{children}</main>
      {!isMinimalRoute && <Footer />}
    </>
  );
};

export default SiteChrome;
