'use client';

import { FC } from 'react';
import { useBlogViews } from './use-blog-views';

type BlogViewsProps = {
  slug: string;
};

const BlogViews: FC<BlogViewsProps> = (props) => {
  const { views, fetchViews, incrementViews } = useBlogViews(props.slug);

  return <span className="text-neutral-400">{views ?? 0}</span>;
};

export default BlogViews;
