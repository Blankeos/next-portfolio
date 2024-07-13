import { cn } from '@/lib/cn';
import { formatDateRangeWithDuration } from '@/lib/format-date';
import { Metadata } from 'next';
import React, { FC } from 'react';

type AboutPageProps = {};

export const metadata: Metadata = {
  title: 'About | Carlo Taleon',
};

const AboutPage: FC<AboutPageProps> = () => {
  const workExperiences = [
    {
      icon: '🧪',
      company: 'The Pique Lab Lte.',
      dates: ['2023-07-17', 'Present'] as [string, string],
      location: {
        name: 'Singapore (Remote)',
        icon: '🇸🇬',
      },
    },
    {
      icon: '⛲️',
      company: 'Spring Valley Tech Corp.',
      dates: ['2023-01-01', '2023-05-07'] as [string, string],
      location: {
        name: 'Bago City, Philippines',
        icon: '🇵🇭',
      },
    },
    // {
    //   icon: '💩',
    //   company: 'Freelance here and there.',
    //   dates: ['2022', '2023'] as [string, string],
    //   location: {
    //     name: 'Anywhere',
    //     icon: '🌍',
    //   },
    // },
  ];

  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-7 md:px-12">
        <div className="mt-10 h-56 rounded-2xl bg-gradient-to-tl from-primary-600 to-primary-500/80"></div>

        {/* <p className="mt-5 flex items-center gap-x-3 rounded-xl border-2 border-yellow-500 bg-yellow-400 p-6 text-typography-400">
          <IconWarning size="1.2rem" className="text-yellow-800" />
          <span>This page is under construction.</span>
        </p> */}

        <h1 className="mb-1 mt-10 text-2xl font-semibold tracking-tighter">
          Carlo Antonio Taleon
          {/* <span className="text-blue-500">{'(╯•ᗣ•╰)'}</span> */}
        </h1>
        <p className="text-sm text-neutral-600">
          An okay software engineer from the Philippines.
        </p>

        <div className="h-8" />

        <p className="text-sm text-neutral-700">
          I love creating web apps, dev tools, games, and doing machine
          learning! Professionally, I do <span>React</span>, but I genuinely
          enjoy <b className="font-medium">Svelte</b> and{' '}
          <b className="font-medium">Solid</b> personally.
        </p>

        <div className="h-2" />

        <p className="text-sm text-neutral-700"></p>

        <div className="h-8" />
        <h2 className="mb-3 font-medium">Education</h2>
        <div className="flex flex-col gap-y-3 text-sm text-typography-400">
          <p className="flex gap-x-1.5">
            <span className="">🏫</span> West Visayas State University
          </p>
          <p className="flex gap-x-1.5">
            <span className="">🎓</span> BS in Computer Science major in
            Artificial Intelligence
          </p>
          <p className="flex gap-x-1.5">
            <span className="">🏆</span> 1.12 GWA (2nd highest in the
            University) + Summa Cum Laude
          </p>
          <p className="flex gap-x-1.5">
            <span className="">🏆</span> Most Outstanding CICT Student
          </p>
        </div>

        <h1 className="mb-3 mt-10 text-2xl font-semibold tracking-tighter">
          Work Experience
          {/* <span className="text-blue-500">{'(╯•ᗣ•╰)'}</span> */}
        </h1>

        <div className="flex flex-col gap-y-3">
          {workExperiences.map((experience) => (
            <WorkExperienceCard
              key={experience.company}
              icon={experience.icon}
              company={experience.company}
              dates={experience.dates}
              location={experience.location}
            />
          ))}
        </div>
        <div className="h-12" />
      </div>
    </>
  );
};

export default AboutPage;

// ===========================================================================
// Subcomponents
// ===========================================================================

type WorkExperienceCardProps = {
  icon: React.ReactNode;
  company: React.ReactNode;
  dates: [string | Date] | [string | Date, (string | Date) | 'Present'];
  location: {
    name: string;
    icon: React.ReactNode;
  };
};

const WorkExperienceCard: FC<WorkExperienceCardProps> = (props) => {
  return (
    <div
      className={cn(
        'flex justify-between gap-x-2 overflow-hidden rounded-md border border-neutral-200 bg-neutral-50 p-3'
      )}
    >
      <div className="flex items-center gap-x-2">
        <div className="flex h-10 w-10 items-center justify-center text-4xl">
          {props.icon}
        </div>

        <div className="flex flex-col gap-y-1">
          <p className="truncate font-medium text-neutral-800">
            {props.company}
          </p>
          <span className="truncate text-sm text-neutral-500">
            {formatDateRangeWithDuration(props.dates)}
          </span>
          <span className="pt-3 text-sm text-neutral-600 sm:hidden">
            {props.location.icon} {props.location.name}
          </span>
        </div>
      </div>

      <div className="hidden flex-shrink items-center justify-end gap-x-1 overflow-hidden sm:flex">
        <span className="truncate text-end text-sm text-neutral-500">
          {props.location.name}
        </span>
        <div className="flex h-10 w-10 items-center justify-center text-lg md:text-4xl">
          {props?.location?.icon}
        </div>
      </div>
    </div>
  );
};
