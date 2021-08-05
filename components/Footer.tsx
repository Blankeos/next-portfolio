import Link from "next/link";
import React from "react";
import Container from "./Container";

// const Footer = () => {
//   return (
//     <footer className="bg-blue-500 text-white">
//       <Container>
//         <div>
//           <h1 className="mb-5">Carlo Taleon Portfolio WIP</h1>
//         </div>
//         <Link href="https://www.figma.com/proto/3mchgUMnlaD0vim3jq0eAy/Portfolio-Project?node-id=103%3A7&scaling=min-zoom">
//           <a
//             target="_blank"
//             className="text-6xl hover:bg-white hover:text-black transition"
//           >
//             Figma Prototype
//           </a>
//         </Link>
//       </Container>
//     </footer>
//   );
// };

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white">
      <Container className="flex flex-col items-center space-y-10 py-10">
        <div className="flex space-x-10">
          <span>Home</span>
          <span>More Projects</span>
        </div>
        <div className="flex items-center justify-center">
          2021 © Carlo Taleon • All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
