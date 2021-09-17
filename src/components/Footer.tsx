import { useRouter } from "next/dist/client/router";
import React from "react";
import Container from "./Container";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white">
      <Container className="flex flex-col items-center space-y-5 py-10">
        <a className="font-extrabold select-none cursor-pointer flex items-center px-5 text-xl">
          CATT
        </a>
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

const HomeLinkButton: React.FC<HomeLinkButton> = ({ className, children }) => {
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
