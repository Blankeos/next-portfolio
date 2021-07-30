import Link from "next/link";
import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-red-200">
      <Container>
        <div>
          <h1 className="mb-5">Carlo Taleon Portfolio WIP</h1>
        </div>
        <Link href="https://www.figma.com/proto/3mchgUMnlaD0vim3jq0eAy/Portfolio-Project?node-id=103%3A7&scaling=min-zoom">
          <a
            target="_blank"
            className="text-6xl hover:bg-gray-800 hover:text-white transition"
          >
            Figma Prototype
          </a>
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
