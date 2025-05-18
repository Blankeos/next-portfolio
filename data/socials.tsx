import { IconType } from 'react-icons';

export type Social = { name: string; Icon: IconType; url: string };

type Socials = Social[];

// Icons

import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const socials: Socials = [
  { name: 'GitHub', Icon: FaGithub, url: 'https://github.com/blankeos' },
  {
    name: 'Instagram',
    Icon: GrInstagram,
    url: 'https://www.instagram.com/taleoncarlo/',
  },
  {
    name: 'LinkedIn',
    Icon: FaLinkedinIn,
    url: 'https://www.linkedin.com/in/carlotaleon/',
  },
];

export default socials;
