import { NextPage } from "next"; // named imports
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <>
      <div className="px-7 md:px-12 w-full max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-sky-300 to-blue-500 mt-10 h-56 rounded-2xl"></div>
        <h1 className="mt-10 font-semibold text-2xl tracking-tighter">
          There is nothing interesting about me!!{" "}
          <span className="text-blue-500">{"(╯•ᗣ•╰)"}</span>
        </h1>
        <p className="mt-5 text-gray-700">
          Just kidding! This page is under construction.
        </p>
        <div className="h-12" />
      </div>
    </>
  );
};

export default AboutPage;
