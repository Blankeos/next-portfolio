'use client';

import Giscus from '@giscus/react';
import { FC } from 'react';

type GiscusCommentsProps = {};

const GiscusComments: FC<GiscusCommentsProps> = (props) => {
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
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
};

export default GiscusComments;
