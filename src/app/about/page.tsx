import { IconGithubAlt, IconSearch } from '@/assets/icons';
import AestheticKeyboard from '@/components/aesthetic-keyboard';
import { cn } from '@/lib/cn';
import { formatDateRangeWithDuration } from '@/lib/format-date';
import { Metadata } from 'next';
import Link from 'next/link';
import React, { FC } from 'react';

type AboutPageProps = {};

export const metadata: Metadata = {
  title: 'About | Carlo Taleon',
};

const AboutPage: FC<AboutPageProps> = () => {
  const workExperiences = [
    {
      icon: '🧠',
      company: 'Bilby AI',
      dates: ['2024-09-30', 'Present'] as [string, string],
      location: {
        name: 'Hongkong (Remote)',
        icon: '🇭🇰',
      },
    },
    {
      icon: '🧪',
      company: 'The Pique Lab Lte.',
      dates: ['2023-07-17', '2024-09'] as [string, string],
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
  ];

  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-7 md:px-12">
        <div className="relative mt-10 h-56 overflow-hidden rounded-2xl">
          <div
            className="absolute inset-0 grayscale"
            style={{
              backgroundImage: `url(https://yt3.googleusercontent.com/4TStAEWOKraJ_qGXP0yodKW1XAgLfRa6cUR6uIa7CO--3mLUj1ss77TMicI2nCS7jXgRuZzz=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="from-primary-dark to-primary/80 absolute inset-0 bg-gradient-to-tl opacity-70"></div>
        </div>
        <div className="mt-2 flex w-max flex-row-reverse justify-end gap-x-[2.5px] rounded-xl border bg-black p-[3px]">
          <AestheticKeyboard
            width={110}
            containerClass="p-2 px-3"
            className="text-xs"
          >
            <span className="absolute top-2 right-2 text-[8px]">4</span>
            Enter
          </AestheticKeyboard>
          <AestheticKeyboard
            className="overflow-hidden"
            // containerClass="bg-white"
          >
            <span className="bg-primary absolute inset-0 z-10 opacity-30"></span>
            <img
              src="https://avatars.githubusercontent.com/u/38070918?v=4"
              className="pointer-events-none object-cover grayscale"
              alt="Avatar"
            />
          </AestheticKeyboard>
          <AestheticKeyboard className="bg-white" containerClass="bg-white">
            <span className="absolute top-2 right-2 text-[8px]">3</span>
          </AestheticKeyboard>
          <AestheticKeyboard>
            <span className="absolute top-2 right-2 text-[8px]">2</span>
            <IconGithubAlt className="h-5 w-5" />
          </AestheticKeyboard>
          <AestheticKeyboard
            className="relative bg-orange-500 text-white/80"
            containerClass="bg-orange-500"
          >
            <span className="absolute top-2 right-2 text-[8px]">1</span>
            <IconSearch className="h-5 w-5" />
          </AestheticKeyboard>
        </div>

        <h1 className="text-typography mt-10 mb-1 text-2xl font-semibold tracking-tighter">
          Carlo Antonio Taleon
        </h1>
        <p className="text-typography-foreground-light text-sm">
          A pretty okay software engineer from the Philippines.
        </p>
        <div className="h-8" />
        <p className="text-typography-foreground text-sm">
          I love creating web apps, dev tools, games, and doing machine
          learning! Professionally, I&apos;ve been doing React, Svelte, and
          NextJS. But my latest grind right now is{' '}
          <b className="font-medium">SolidJS</b> and solo-building SaaS apps.
        </p>
        <div className="h-5" />
        <p className="text-typography-foreground text-sm">
          I love exploring unconventional bleeding edge tech so you can always
          catch me learning the next big thing.
        </p>
        <div className="h-5" />
        <p className="text-typography-foreground text-sm">
          I contribute to open-source too!{' '}
          <Link href="https://vike.dev/team" className="underline">
            vike.dev
          </Link>
          ,{' '}
          <Link
            href="https://github.com/wobsoriano/solid-sonner"
            className="underline"
          >
            solid-sonner
          </Link>
          ,{' '}
          <Link
            href="https://github.com/solidjs-community/solid-primitives/pull/629"
            className="underline"
          >
            create-spring (Solid primitives)
          </Link>
        </p>
        <div className="h-5" />
        <p className="text-typography-foreground text-sm">
          I author some libraries as well:{' '}
          <Link href="https://bagon-hooks.pages.dev" className="underline">
            bagon-hooks
          </Link>
          ,{' '}
          <Link
            href="https://solid-number-flow.pages.dev"
            className="underline"
          >
            solid-number-flow
          </Link>
          ,{' '}
          <Link
            href="https://github.com/blankeos/vike-metadata"
            className="underline"
          >
            vike-metadata
          </Link>
          ,{' '}
          <Link href="https://github.com/blankeos/tsdot" className="underline">
            tsdot
          </Link>
        </p>
        <div className="h-8" />
        <h2 className="text-typography mb-3 font-medium">Education</h2>
        <div className="text-typography-foreground flex flex-col gap-y-3 text-sm">
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
        <h1 className="text-typography mt-10 mb-3 text-2xl font-semibold tracking-tighter">
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
        'bg-background-secondary border-background-secondary flex justify-between gap-x-2 overflow-hidden rounded-md border p-3'
      )}
    >
      <div className="flex items-center gap-x-2">
        <div className="flex h-10 w-10 items-center justify-center text-4xl">
          {props.icon}
        </div>

        <div className="flex flex-col gap-y-1">
          <p className="text-typography truncate font-medium">
            {props.company}
          </p>
          <span className="text-typography-foreground-light truncate text-sm">
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
