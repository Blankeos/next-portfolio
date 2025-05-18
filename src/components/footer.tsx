import Container from './container';

import Link from 'next/link';
import HomeLinkButton from './home-link-button';

const Footer = () => {
  return (
    <footer className="bg-primary relative h-[276px] text-white">
      <Container className="relative flex flex-col items-center space-y-5 py-20">
        <Link
          href="/"
          className="group relative flex cursor-pointer items-center px-5 text-xl font-extrabold select-none"
        >
          <span className="text-primary-darker absolute group-hover:opacity-100">
            CATT
          </span>
          <span className="relative transition group-hover:-translate-y-1">
            CATT
          </span>
        </Link>
        <div className="flex space-x-10 text-gray-50">
          <HomeLinkButton>Home</HomeLinkButton>
        </div>
        <span className="text-center">
          2021 © Carlo Taleon • All Rights Reserved.
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
