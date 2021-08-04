import React from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  return (
    <section className="w-full py-48 border-t">
      <Container maxWidth="7xl" className="relative grid grid-cols-2">
        <div className="flex items-center">
          <div className="relative">
            <GrayCircle />
            <SectionHeading
              className="relative font-light text-5xl"
              text={["Skills", "& Technologies"]}
            />
          </div>
        </div>
        <SkillsGrid />
      </Container>
    </section>
  );
};

const GrayCircle = () => {
  return (
    <div className="absolute flex items-center justify-center rounded-full bg-gray-200 h-20 w-20 -top-20 -left-20">
      <div className="absolute h-72 w-72 border-gray-200 border rounded-full"></div>
    </div>
  );
};
const SkillsGrid = () => {
  return (
    <div className="grid grid-cols-4 place-self-center gap-10">
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
      <SkillItem />
    </div>
  );
};

const SkillItem = () => {
  return <div className="bg-indigo-600 rounded-full h-20 w-20"></div>;
};

export default Skills;
