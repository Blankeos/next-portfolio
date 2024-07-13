'use client';

import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

type BlogViewsProps = {};

const BlogViews: FC<BlogViewsProps> = (props) => {
  const [views, setViews] = useState(1);
  const [hasBeenCalled, setHasBeenCalled] = useState(false);

  const pathname = usePathname();
  const slug = pathname.split('/').at(-1);

  function fetchViews() {
    fetch(`/api/views?id=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setViews(data.views);
        console.log(data);
      });
  }

  useEffect(() => {
    if (hasBeenCalled) return;
    setHasBeenCalled(true);

    fetchViews();
  }, []);

  return <span className="text-sm text-primary-500">{views} views</span>;
};

export default BlogViews;
