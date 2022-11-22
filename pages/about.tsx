import { NextPage } from "next"; // named imports
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <>
      <div className="px-7 md:px-12 w-full max-w-7xl mx-auto">
        <h1 className="mt-10 font-semibold text-2xl tracking-tighter">
          There is nothing interesting about me!!{" "}
          <span className="text-blue-500">{"(╯•ᗣ•╰)"}</span>
        </h1>
        <p className="mt-5">Just kidding! This page is under construction.</p>
      </div>
    </>
  );
};

export default AboutPage;
