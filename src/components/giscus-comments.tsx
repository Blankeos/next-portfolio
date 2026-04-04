'use client';

import { intrinsicMap, Theme, useThemeContext } from '@/contexts/theme.context';
import Giscus from '@giscus/react';
import { FC } from 'react';

type GiscusCommentsProps = {};

const themeColors: Record<
  Exclude<Theme, 'system'>,
  { primary: string; primaryDark: string }
> = {
  light: { primary: 'rgb(59, 130, 246)', primaryDark: 'rgb(37, 99, 235)' },
  dark: { primary: 'rgb(59, 130, 246)', primaryDark: 'rgb(37, 99, 235)' },
  batman: { primary: '#dda440', primaryDark: '#bc6823' },
};

function getGiscusTheme(inferredTheme: Exclude<Theme, 'system'>) {
  const isLocalhost =
    typeof window !== 'undefined' && window.location.hostname === 'localhost';

  if (isLocalhost) {
    return intrinsicMap[inferredTheme] === 'light'
      ? 'light_tritanopia'
      : 'dark_tritanopia';
  }

  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const base = intrinsicMap[inferredTheme];
  const { primary, primaryDark } = themeColors[inferredTheme];
  const params = new URLSearchParams({ base, primary, primaryDark });

  return `${origin}/api/giscus-theme?${params}`;
}

const GiscusComments: FC<GiscusCommentsProps> = (props) => {
  const { inferredTheme } = useThemeContext();

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
      theme={getGiscusTheme(inferredTheme)}
      lang="en"
      loading="lazy"
    />
  );
};

export default GiscusComments;
