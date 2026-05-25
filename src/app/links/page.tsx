import {
  IconGithubAlt,
  IconInstagram,
  IconTextBehindMedia,
  IconTikTok,
} from '@/assets/icons';
import { Metadata } from 'next';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Links | Carlo Taleon',
  description: "All of Carlo Taleon's links in one place.",
};

type LinkItem = {
  name: string;
  url: string;
  icon: ReactNode;
  description?: string;
};

const socials: LinkItem[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Blankeos',
    icon: <IconGithubAlt className="h-5 w-5" />,
    description: '@Blankeos',
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@taleoncarlo',
    icon: <IconTikTok className="h-5 w-5" />,
    description: '@taleoncarlo',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/taleoncarlo',
    icon: <IconInstagram className="h-5 w-5" />,
    description: '@taleoncarlo',
  },
];

const apps: LinkItem[] = [
  {
    name: 'Text Behind Media',
    url: 'https://textbehindmedia.com',
    icon: <IconTextBehindMedia className="h-5 w-5 rounded-[5px]" />,
    description: 'textbehindmedia.com',
  },
];

const LinksPage: FC = () => {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col items-center px-5 pt-16 pb-20">
      {/* Avatar */}
      <img
        src="https://avatars.githubusercontent.com/u/38070918?v=4"
        alt="Carlo Taleon"
        className="h-20 w-20 rounded-full object-cover"
      />
      <h1 className="text-typography mt-4 text-xl font-semibold tracking-tight">
        Carlo Taleon
      </h1>
      <p className="text-typography-foreground-light mt-1 text-sm">
        Software Engineer
      </p>

      {/* Socials */}
      <div className="mt-8 flex w-full flex-col gap-3">
        <h2 className="text-typography-foreground-light text-xs font-medium uppercase tracking-widest">
          Socials
        </h2>
        {socials.map((link) => (
          <LinkCard key={link.name} item={link} />
        ))}
      </div>

      {/* Apps */}
      <div className="mt-8 flex w-full flex-col gap-3">
        <h2 className="text-typography-foreground-light text-xs font-medium uppercase tracking-widest">
          Apps
        </h2>
        {apps.map((link) => (
          <LinkCard key={link.name} item={link} />
        ))}
      </div>
    </div>
  );
};

export default LinksPage;

// ===========================================================================
// Subcomponents
// ===========================================================================

const LinkCard: FC<{ item: LinkItem }> = ({ item }) => {
  return (
    <Link
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-background-secondary border-border flex items-center gap-3 rounded-lg border p-4 transition hover:scale-[1.02] active:scale-[0.98]"
    >
      <span className="text-typography">{item.icon}</span>
      <div className="flex flex-col">
        <span className="text-typography text-sm font-medium">{item.name}</span>
        {item.description && (
          <span className="text-typography-foreground-light text-xs">
            {item.description}
          </span>
        )}
      </div>
    </Link>
  );
};
