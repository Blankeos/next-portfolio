import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiMongodb,
  SiFirebase,
  SiUnity,
} from "react-icons/si";

export type Skill = { name: string; Icon: IconType };

type Skills = Skill[];

const skills: Skills = [
  {
    name: "React",
    Icon: FaReact,
  },
  {
    name: "Javascript",
    Icon: SiJavascript,
  },
  {
    name: "Typescript",
    Icon: SiTypescript,
  },
  {
    name: "TailwindCSS",
    Icon: SiTailwindcss,
  },
  {
    name: "Sass",
    Icon: SiUnity,
  },
  {
    name: "NextJS",
    Icon: SiNextdotjs,
  },
  {
    name: "Redux",
    Icon: SiRedux,
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
  },
  {
    name: "PostgreSQL",
    Icon: FaDatabase,
  },
  {
    name: "Firebase",
    Icon: SiFirebase,
  },
  {
    name: "NodeJS",
    Icon: FaNodeJs,
  },
  {
    name: "Git & GitHub",
    Icon: FaGitAlt,
  },
  {
    name: "Ruby on Rails",
    Icon: SiUnity,
  },
  {
    name: "Python",
    Icon: SiUnity,
  },
  {
    name: "Pytorch/Tensorflow",
    Icon: SiUnity,
  },
  {
    name: "Docker",
    Icon: SiUnity,
  },
  {
    name: "FastAPI",
    Icon: SiUnity,
  },
  {
    name: "Linux & VPS",
    Icon: SiUnity,
  },
  {
    name: "Google Analytics",
    Icon: SiUnity,
  },
  {
    name: "OpenAI",
    Icon: SiUnity,
  },
  {
    name: "C#",
    Icon: SiUnity,
  },
  {
    name: "Unity",
    Icon: SiUnity,
  },
];

export default skills;
