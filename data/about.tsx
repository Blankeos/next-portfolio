// Icons

import Link from "next/link";

const about = {
  fullName: "Carlo Antonio T. Taleon",
  bio: [
    <p className="leading-relaxed">
      ✍ I'm currently a Senior pursuing a BS in Computer Science, major in AI
      at West Visayas State University, Iloilo. I'm a developer by trade but I
      also have a deep knowledge of good design principles that keeps me focused
      on the goal of enhancing the human experience.
    </p>,
    <p className="leading-relaxed">
      🎨 I have a huge passion for creating beautiful, responsive, and
      comfortable experiences through the applications and websites I make. I'm
      also interested in AI, Machine Learning, Data Science, Finance, and
      Entrepreneurship.
    </p>,
    <p className="leading-relaxed">
      🚀 I started learning how to code small games when I was 10 because of my
      interest in games like Minecraft. I later started learning programming
      seriously with C# back in 2016 and published my game in the same year
      called{" "}
      <Link href="https://play.google.com/store/apps/details?id=com.DigikattStudios.Chromeleon&hl=en&gl=US">
        <a className="text-blue-400 hover:text-blue-300" target="_blank">
          Chromeleon
        </a>
      </Link>
      . Nowadays though, my development stack focuses more on making web apps
      with modern web technologies like React and Typescript.
    </p>,
  ],
};

export default about;
