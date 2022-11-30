import { useRouter } from "next/dist/client/router";
import React from "react";
import Container from "./Container";

import { animateScroll as scroll } from "react-scroll";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-blue-500 text-white">
      <Container className="flex flex-col items-center space-y-5 py-20">
        <Link
          href="/"
          className="relative group font-extrabold select-none cursor-pointer flex items-center px-5 text-xl"
        >
          <span className="absolute group-hover:opacity-100 text-blue-600">
            CATT
          </span>
          <span className="relative group-hover:-translate-y-1 transition">
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

interface HomeLinkButton {
  className?: string;
}

const HomeLinkButton: FCC<HomeLinkButton> = ({ className, children }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (router.pathname === "/") {
          scroll.scrollToTop();
        } else {
          router.push("/");
        }
      }}
    >
      {children}
    </button>
  );
};
export default Footer;
