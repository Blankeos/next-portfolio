import { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaGitAlt, FaDatabase } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextDotJs,
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
    name: "NextJS",
    Icon: SiNextDotJs,
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
    name: "Firebase",
    Icon: SiFirebase,
  },
  {
    name: "NodeJS",
    Icon: FaNodeJs,
  },
  {
    name: "SQL",
    Icon: FaDatabase,
  },
  {
    name: "Git & GitHub",
    Icon: FaGitAlt,
  },
  {
    name: "Unity",
    Icon: SiUnity,
  },
];

export default skills;
