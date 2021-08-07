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
    shortDesc: "A Full-Stack Social Product Review App",
    slug: "cafely",
    imageURL:
      "https://raw.githubusercontent.com/seajayrubynose/cafely-pictures/master/meta/preview_markdown.jpg",
    demoURL: "https://cafely.vercel.app/",
  },
  {
    title: "Cafe.ly Manual",
    shortDesc: "An SSG documentation/blog site built with NextJS",
    slug: "cafely-manual",
    imageURL:
      "https://raw.githubusercontent.com/seajayrubynose/cafely-pictures/master/meta/manual_preview_markdown.jpg",
    demoURL: "https://cafely-manual.vercel.app/",
  },
  {
    title: "Cafe.ly",
    shortDesc: "Full-Stack Social Product Review App",
    slug: "cafely",
    imageURL:
      "https://raw.githubusercontent.com/seajayrubynose/cafely-pictures/master/meta/preview_markdown.jpg",
    demoURL: "https://cafely.vercel.app/",
  },
  {
    title: "Cafe.ly",
    shortDesc: "Full-Stack Social Product Review App",
    slug: "cafely",
    imageURL:
      "https://raw.githubusercontent.com/seajayrubynose/cafely-pictures/master/meta/preview_markdown.jpg",
    demoURL: "https://cafely.vercel.app/",
  },
];

export default projects;
