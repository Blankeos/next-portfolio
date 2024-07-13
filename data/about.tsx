// Icons

import Tippy from '@tippyjs/react';
import Link from 'next/link';

const about = {
  fullName: 'Carlo Antonio T. Taleon',
  bio: [
    <p key={'1'} className="leading-relaxed">
      ✍ I graduated from{' '}
      <Tippy
        placement="bottom"
        content={
          <div className="flex flex-col p-1">
            <div className="font-semibold">Notable Awards I got:</div>
            <div className="h-2" />
            <div className="text-xs text-gray-200">
              🏆 Summa Cum Laude (1.12 GWA)
            </div>
            <div className="text-xs text-gray-200">
              🏆 Most Outstanding CICT Student
            </div>
          </div>
        }
      >
        <span className="font-semibold">West Visayas State University</span>
      </Tippy>{' '}
      with a CS degree and a major in Artificial Intelligence. I&apos;m a
      software engineer by trade: making apps, games, and solving problems that
      frustrate me.
    </p>,
    <p key={'2'} className="leading-relaxed">
      🎨 I pride myself in creating beautiful and pleasing experiences through
      the applications and websites I make. I love learning new technologies
      having worked on multiple projects with varied stacks.
    </p>,
    <p key={'3'}>
      🎮 There&apos;s a genuine person behind this profile, too! Outside of
      work, you may find me: playing games, working out, reading personal
      development, watching youtube, and anime. I&apos;m also interested in AI,
      Machine Learning, Data Science, Finance, and Entrepreneurship.
    </p>,
    <p key={'4'} className="leading-relaxed">
      🚀 I started learning how to code small games when I was 10 because of my
      interest in games like Minecraft. I later started learning programming
      seriously with C# back in 2016 and published my game in the same year
      called{' '}
      <Link
        className="text-blue-400 hover:text-blue-300"
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.DigikattStudios.Chromeleon&hl=en&gl=US"
      >
        Chromeleon
      </Link>
      . Nowadays though, my development stack focuses more on making web apps
      with modern web technologies like React and Typescript.
    </p>,
  ],
};

export default about;
