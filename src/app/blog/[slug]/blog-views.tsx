'use client';

import { IconLoadingLoop } from '@/assets/icons';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

type BlogViewsProps = {};

const BlogViews: FC<BlogViewsProps> = (props) => {
  const [views, setViews] = useState(1);
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const pathname = usePathname();
  const slug = pathname.split('/').at(-1);

  function fetchViews() {
    setIsLoading(true);
    fetch(`/api/views?id=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setViews(data.views);
        console.log(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    if (hasBeenCalled) return;
    setHasBeenCalled(true);

    fetchViews();

    return () => {
      setHasBeenCalled(false);
    };
  }, []);

  return (
    <span className="flex items-center text-sm text-primary-500">
      {isLoading ? (
        <IconLoadingLoop className="text-neutral-400" width={20} height={20} />
      ) : (
        <span>{views} views</span>
      )}
    </span>
  );
};

export default BlogViews;
