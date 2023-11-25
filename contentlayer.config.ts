// Colocation guide: https://github.com/contentlayerdev/contentlayer/issues/84#issuecomment-1739699901

// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import fs from 'node:fs'
import readingTime from 'reading-time'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/posts/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    featuredImage: { type: 'string' },
    category: { type: 'string' },
    description: {
      type: 'string',
      description: 'Keep it at under 70 characters',
    },
  },
  computedFields: {
    readTimeStats: {
      type: 'nested',
      resolve: (post) => {
        const content = fs.readFileSync(
          path.join('content', post._raw.sourceFilePath),
          'utf-8'
        )

        const body = content.split('---').at(-1)?.trim() ?? ''

        return readingTime(body)
      },
    },
    slug: {
      type: 'string',
      resolve: (post) => `${post._raw.flattenedPath.split('/').at(1)}`,
    },
    url: {
      type: 'string',
      resolve: (post) => `/content/${post._raw.flattenedPath}`,
    },
  },
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    date: { type: 'date', required: true },
    featuredImage: { type: 'string', required: true },
    featureOrder: { type: 'number' },
    demoURL: { type: 'string' },
    featuredYoutubeURL: { type: 'string' },
    githubURL: { type: 'string' },
    tags: { type: 'list', of: { type: 'string' } },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `${post._raw.flattenedPath.split('/').at(1)}`,
    },
    url: {
      type: 'string',
      resolve: (project) => `/content/${project._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Project],

  // Plugins
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className = [`line--highlighted`]
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = [`word--highlighted`]
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
})
