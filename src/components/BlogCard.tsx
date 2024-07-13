'use client';

import { pageRoutes } from '@/lib/pageRoutes';
import { FC } from 'react';
import Link from 'next/link';
import { formatDate } from '@/lib/formatDate';
import { motion } from 'framer-motion';
import ShadowButton from './ShadowButton';
import { cn } from '@/lib/cn';
import { isMobile } from 'react-device-detect';

type BlogCardProps = {
  slug: string;
  featuredImageUrl: string;
  date: string;
  title: string;
  category?: string;
  description?: string;
};

const BlogCard: FC<BlogCardProps> = (props) => {
  return (
    <ShadowButton
      interactivity={{
        // Goes flat when hover on PC, Doesn't go flat on hover on Mobile
        flatOnMouseEnter: !isMobile,
      }}
    >
      <Link
        href={`${pageRoutes.blog}/${props.slug}`}
        className={cn(
          'relative flex flex-col gap-y-3 overflow-hidden border border-primary-500 bg-white p-5',
          'aspect-[1/0.9] sm:aspect-[0.9/1]'
        )}
      >
        {/* Image */}
        <div className="relative">
          <div className="absolute inset-0 rotate-3 bg-primary-500 bg-opacity-40" />
          <div
            className="relative h-36"
            style={{
              backgroundImage: `url(${props.featuredImageUrl})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </div>

        <div className="flex flex-1 flex-col items-start">
          {props.category !== undefined && (
            <span className="mb-2 self-start rounded-full border bg-primary-500 px-2 py-0.5 text-xxs text-white">
              {props.category}
            </span>
          )}
          <h2>{props.title}</h2>
          <p className="line-clamp-2 text-left text-sm text-typography-300">
            {props.description}
          </p>

          <div aria-hidden className="min-h-[20px] flex-1 bg-pink-200" />

          <time
            className="self-end text-xxs text-typography-300"
            dateTime={props.date}
          >
            {formatDate(props.date)}
          </time>
        </div>
      </Link>
    </ShadowButton>
  );
};

export default BlogCard;
