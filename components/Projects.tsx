import React from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const Projects = () => {
  return (
    <section className="bg-blue-50 w-full py-16">
      <Container maxWidth="7xl" className="relative">
        <SectionHeading
          className="font-light text-5xl absolute"
          text={["Featured", "Projects"]}
        />
        <ProjectsGrid />
      </Container>
    </section>
  );
};

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-16 mt-12">
      <ProjectCard title="1" />
      <ProjectCard title="2" />
      <ProjectCard title="3" />
      <ProjectCard title="4" />
    </div>
  );
};

interface ProjectCardProps {
  title: string;
}

const ProjectCard = ({ title }: ProjectCardProps) => {
  return (
    // <div
    //   className="bg-blue-300 flex justify-center"
    //   style={{ flexBasis: "calc(50% - 2rem)" }}
    // >
    //   item 1
    // </div>
    <div className=" flex flex-col">
      <div className="h-96 flex items-center justify-center bg-blue-400">
        IMG
      </div>
      <div className="flex justify-between pt-10">
        <h3 className="font-semibold text-3xl text-gray-800">
          Project {title}
        </h3>
        <div className="rounded-full h-10 w-10 bg-blue-600">&rarr;</div>
      </div>
      <p className="pt-3 text-gray-600">Short description</p>
    </div>
  );
};

export default Projects;
