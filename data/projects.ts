import { IconType } from "react-icons";
import cafelyImg from "../src/assets/imgs/cafely_featured-project-img.jpg";
import cafelyManualImg from "../src/assets/imgs/cafely-manual_featured-project-img.jpg";

export type Project = {
  title: string;
  shortDesc: string;
  slug: string;
  imageURL?: string | StaticImageData;
  demoURL?: string;
};

type Projects = Project[];

// Icons

const projects: Projects = [
  {
    title: "Cafe.ly",
    shortDesc: "A Full-Stack Social Product Review App",
    slug: "cafely",
    imageURL: cafelyImg,
    demoURL: "https://cafely.vercel.app/",
  },
  {
    title: "Cafe.ly Manual",
    shortDesc: "An SSG documentation/blog site built with NextJS",
    slug: "cafely-manual",
    imageURL: cafelyManualImg,
    demoURL: "https://cafely-manual.vercel.app/",
  },
  {
    title: "Cafe.ly",
    shortDesc: "Full-Stack Social Product Review App",
    slug: "cafely",
    imageURL: cafelyImg,
    demoURL: "https://cafely.vercel.app/",
  },
  {
    title: "Cafe.ly Manual",
    shortDesc: "An SSG documentation/blog site built with NextJS",
    slug: "cafely-manual",
    imageURL: cafelyManualImg,
    demoURL: "https://cafely-manual.vercel.app/",
  },
];

export default projects;
