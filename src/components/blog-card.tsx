'use client';

import { cn } from '@/lib/cn';
import { formatDate } from '@/lib/format-date';
import { PageRoutes } from '@/lib/page-routes';
import Link from 'next/link';
import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import ShadowButton from './shadow-button';

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
        href={`${PageRoutes.Blog}/${props.slug}`}
        className={cn(
          'border-primary relative flex h-full flex-col gap-y-3 overflow-hidden border bg-white p-5',
          'aspect-auto min-[1140px]:aspect-[0.95/1] lg:aspect-[0.85/1] xl:aspect-[0.8/1]'
        )}
      >
        {/* Image */}
        <div className="relative">
          <div className="bg-primary absolute inset-0 rotate-3" />
          <div
            className="bg-primary/20 relative h-36"
            style={{
              backgroundImage: `url(${props.featuredImageUrl})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
        </div>

        <div className="flex flex-1 flex-col items-start">
          {props.category !== undefined && (
            <span className="bg-primary text-xxs mb-2 self-start rounded-full border px-2 py-0.5 text-white">
              {props.category}
            </span>
          )}
          <h2 className="text-start">{props.title}</h2>
          <p className="text-typography-300 line-clamp-2 text-left text-sm">
            {props.description}
          </p>

          <div aria-hidden className="min-h-[20px] flex-1 bg-pink-200" />

          <time
            className="text-xxs text-typography-300 self-end"
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
