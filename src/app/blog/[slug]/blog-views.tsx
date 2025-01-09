'use client';

import { IconLoadingLoop } from '@/assets/icons';
import { usePathname } from 'next/navigation';
import { FC, useEffect, useRef, useState } from 'react';

import { animate } from 'framer-motion';

type BlogViewsProps = {};

const BlogViews: FC<BlogViewsProps> = (_props) => {
  const [hasBeenCalled, setHasBeenCalled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const pathname = usePathname();
  const slug = pathname.split('/').at(-1);

  const countRef = useRef<HTMLSpanElement>(null);

  function fetchViews() {
    setIsLoading(true);
    fetch(`/api/views?id=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('starting animation');
        const node = countRef.current;

        const controls = animate(0, data.views, {
          type: 'spring',
          stiffness: 100,
          damping: 50,
          onUpdate: (value) => {
            if (!node) return;
            node.textContent = value.toFixed(0);
          },
        });
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
      <IconLoadingLoop
        className={`text-neutral-400 ${isLoading ? '' : 'hidden'}`}
        width={20}
        height={20}
      />

      {/* Don't conditionally render because ref would be ignored in build (idk nextJS things) */}
      <span className={isLoading ? 'hidden' : ''}>
        <span ref={countRef}>0</span> views
      </span>
    </span>
  );
};

export default BlogViews;
