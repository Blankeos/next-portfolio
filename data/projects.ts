import { IconType } from "react-icons";

export type Project = {
  title: string;
  shortDesc: string;
  slug: string;
  imageURL?: string;
  demoURL?: string;
  tags?: string[];
};

type Projects = Project[];

const projects: Projects = [
  {
    title: "ScolioVis",
    shortDesc: "my undergrad thesis: automatic assessment of scoliosis",
    slug: "scoliovis",
    demoURL: "https://scoliovis.app/",
    imageURL: "/imgs/scoliovis_featured-project-img.webp",
    tags: ["NextJS", "Typescript", "Python", "FastAPI", "PyTorch"],
  },
  {
    title: "LinkRoom",
    shortDesc: "a beautiful link-bookmarking app with complex state.",
    slug: "linkroom",
    imageURL: "/imgs/linkroom_featured-project-img.png",
    demoURL: "https://linkroom.vercel.app/",
    tags: ["NextJS", "Typescript", "Zustand", "TailwindCSS"],
  },
  {
    title: "Cafe.ly",
    shortDesc: "A Full-Stack Social Product Review App for coffee!",
    slug: "cafely",
    imageURL: "/imgs/cafely_featured-project-img.jpg",
    demoURL: "https://cafely.vercel.app/",
    tags: ["ReactJS", "Express", "MongoDB", "Firebase", "TailwindCSS"],
  },
  {
    title: "Cybergence 2021 Event Portal",
    shortDesc: "An event landing site I collaborated on with other students.",
    slug: "cybergence2021",
    imageURL: "/imgs/cybergence_featured-project-img.webp",
    demoURL: "https://cybergence.vercel.app/",
    tags: ["NextJS", "TailwindCSS"],
  },
  {
    title: "Kaugmaon",
    shortDesc: "An event-landing site with a cool ticket",
    slug: "kaugmaon",
    imageURL: "/imgs/kaugmaon_featured-project-img.gif",
    demoURL: "https://kaugmaon.vercel.app/",
    tags: ["NextJS", "TailwindCSS"],
  },
  {
    title: "Cafe.ly Manual",
    shortDesc: "An SSG documentation/blog site built with NextJS.",
    slug: "cafely-manual",
    imageURL: "/imgs/cafely-manual_featured-project-img.jpg",
    demoURL: "https://cafely-manual.vercel.app/",
    tags: ["NextJS", "TailwindCSS", "PlanetScale"],
  },
];

export default projects;
