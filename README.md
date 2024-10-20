# 🔼 Next Portfolio

🚀 Carlo's Personal Web Portfolio built with **NextJS**!

**VISIT:** [carlo.vercel.app](https://carlo.vercel.app/)

![SomeImage](/docs/preview.png)

## Requirements

- NodeJS
- PNPM
- PostgreSQL (For Blog Counts)
- Goose - Manual Migrations `database/migrations`

## Features

- Landing Page - Lots of animations powered by Framer Motion
- Blog (Markdown Support, Code Syntax Highlighting, Reading Time, etc.) - Powered by ContentLayer and Shiki
- Project Directory (Searchable) - Powered by FlexSearch

## Notes

Because I keep forgetting how this project works or looks like. I also hate NextJS.

### Content Management

ContentLayer is apparently exclusive to NextJS.

- Package: `contentlayer` is used to manage content and transform mdx to javascript objects.
- Package: `next-contentlayer` is specifically used for bundling + rendering 'blog stuff' (specifically the mdx content, the frontmatter, no need for this).
- Configurations for collection schemas are stored in `contentlayer.config.ts`.
- `next.config.js` is used attaching the build process of contentlayer to NextJS dev and build.
- All the mdx content is stored in `content/` folder.
