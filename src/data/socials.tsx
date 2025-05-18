import { IconGithubAlt, IconInstagram, IconLinkedIn } from '@/assets/icons';
import { ReactNode } from 'react';

export type Social = { name: string; icon: ReactNode; url: string };

type Socials = Social[];

// Icons

const socials: Socials = [
  {
    name: 'GitHub',
    icon: <IconGithubAlt />,
    url: 'https://github.com/blankeos',
  },
  {
    name: 'Instagram',
    icon: <IconInstagram />,
    url: 'https://www.instagram.com/taleoncarlo/',
  },
  {
    name: 'LinkedIn',
    icon: <IconLinkedIn />,
    url: 'https://www.linkedin.com/in/carlotaleon/',
  },
];

export default socials;
