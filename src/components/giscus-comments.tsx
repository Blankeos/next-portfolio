'use client';

import { useThemeContext } from '@/contexts/theme.context';
import Giscus from '@giscus/react';
import { FC } from 'react';

type GiscusCommentsProps = {};

function getGiscusTheme(intrinsicTheme: string) {
  const isLocalhost =
    typeof window !== 'undefined' && window.location.hostname === 'localhost';

  if (isLocalhost) {
    return intrinsicTheme === 'light' ? 'light_tritanopia' : 'dark_tritanopia';
  }

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  return intrinsicTheme === 'light'
    ? `${origin}/giscus-light.css`
    : `${origin}/giscus-dark.css`;
}

const GiscusComments: FC<GiscusCommentsProps> = (props) => {
  const { intrinsicTheme } = useThemeContext();

  return (
    <Giscus
      id="comments"
      repo="blankeos/next-portfolio"
      repoId="MDEwOlJlcG9zaXRvcnkzODc3ODQyODY="
      category="Announcements"
      categoryId="DIC_kwDOFx0eXs4Ca37y"
      mapping="pathname"
      strict="0"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={getGiscusTheme(intrinsicTheme)}
      lang="en"
      loading="lazy"
    />
  );
};

export default GiscusComments;
