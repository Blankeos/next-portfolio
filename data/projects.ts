import { IconType } from "react-icons";

export type Project = {
  title: string;
  shortDesc: string;
  slug: string;
  imageURL?: string;
  demoURL?: string;
};

type Projects = Project[];

// Icons

const projects: Projects = [
  {
    title: "Cafe.ly",
    shortDesc: "A Full-Stack Social Product Review App for coffee!",
    slug: "cafely",
    imageURL: "/imgs/cafely_featured-project-img.jpg",
    demoURL: "https://cafely.vercel.app/",
  },
  {
    title: "LinkRoom",
    shortDesc: "a beautiful link-bookmarking app with complex state.",
    slug: "linkroom",
    imageURL: "/imgs/linkroom_featured-project-img.png",
    demoURL: "https://linkroom.live",
  },
  {
    title: "Cafe.ly Manual",
    shortDesc: "An SSG documentation/blog site built with NextJS.",
    slug: "cafely-manual",
    imageURL: "/imgs/cafely-manual_featured-project-img.jpg",
    demoURL: "https://cafely-manual.vercel.app/",
  },
  {
    title: "Cybergence 2021 Event Portal",
    shortDesc: "An event landing site I collaborated on with other students.",
    slug: "cafely-manual",
    imageURL:
      "https://raw.githubusercontent.com/Blankeos/akwe-landing/main/public/photos/sc_0.png",
    demoURL: "https://cybergence.vercel.app/",
  },
];

export default projects;
