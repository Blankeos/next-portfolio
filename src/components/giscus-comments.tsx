'use client';

import { useThemeContext } from '@/contexts/theme.context';
import Giscus from '@giscus/react';
import { FC } from 'react';

type GiscusCommentsProps = {};

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
      theme={
        intrinsicTheme === 'light' ? 'light_tritanopia' : 'dark_tritanopia'
      }
      lang="en"
      loading="lazy"
    />
  );
};

export default GiscusComments;
