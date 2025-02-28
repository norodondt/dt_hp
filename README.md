# Systems Decoded - Personal Blog

A modern, SEO-optimized blog built with Astro focusing on financial literacy, wealth building, and systems thinking.

## Project Overview

This project is a personal blog for Dennis Tröger, built with Astro and featuring a clean, modern design. The blog focuses on decoding complex systems into simple solutions, with content primarily about financial literacy, wealth building, personal development, and AI implementation.

## Key Features

- **Modern Design**: Clean, responsive layout with dark mode support
- **Blog System**: Full-featured blog with categories, tags, and pagination
- **SEO Optimization**: Complete metadata management including OpenGraph and Twitter cards
- **Structured Data**: JSON-LD implementation for better search engine visibility
- **Performance**: Built with Astro for optimal performance and minimal JavaScript
- **Content Management**: MDX support for rich content creation

## Project Structure

```
src/
├── assets/          # Static assets like images and styles
├── components/      # Reusable UI components
│   ├── blog/        # Blog-specific components
│   ├── common/      # Common components like metadata, analytics
│   ├── ui/          # UI components like buttons, cards
│   └── widgets/     # Larger widget components
├── content/         # Content configuration
├── data/            # Blog posts and other content
│   └── post/        # MDX blog posts
├── layouts/         # Page layouts
├── pages/           # Astro pages
│   └── [...blog]/   # Blog routes with dynamic paths
└── utils/           # Utility functions
    ├── blog.ts      # Blog-related utilities
    ├── jsonld.ts    # JSON-LD structured data utilities
    ├── permalinks.ts # URL handling utilities
    └── images.ts    # Image processing utilities
```

## JSON-LD Implementation

The project recently added JSON-LD structured data to improve SEO and search engine visibility. JSON-LD (JavaScript Object Notation for Linked Data) helps search engines better understand the content of the pages.

### Implementation Details

1. **Utility Functions**: Created in `src/utils/jsonld.ts` with three main functions:
   - `createBlogPostJsonLd`: Generates structured data for individual blog posts
   - `createBlogListingJsonLd`: Generates structured data for blog listing pages
   - `createWebsiteJsonLd`: Generates structured data for the website/organization

2. **Integration Points**:
   - Blog posts (`src/pages/[...blog]/index.astro`): Uses `BlogPosting` schema
   - Blog listing (`src/pages/[...blog]/[...page].astro`): Uses `CollectionPage` schema
   - Homepage (`src/pages/index.astro`): Uses `WebSite` schema

3. **Schema Types Used**:
   - `BlogPosting`: For individual blog articles
   - `CollectionPage`: For blog listing pages
   - `WebSite`: For the homepage
   - `Organization`: For publisher information
   - `Person`: For author information

## Blog Content

The blog contains articles primarily focused on:
- Financial literacy and wealth building
- Money management and investing
- Personal development
- Systems thinking

Each blog post is written in MDX format with frontmatter containing metadata like title, excerpt, image, author, categories, and tags.

## Development

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies: `npm install` or `yarn`
3. Run development server: `npm run dev` or `yarn dev`

### Building

- Build for production: `npm run build` or `yarn build`
- Preview production build: `npm run preview` or `yarn preview`

## Deployment

The project is configured for deployment on multiple platforms:
- Vercel (vercel.json)
- Netlify (netlify.toml)
- Docker (Dockerfile and docker-compose.yml)

## License

See LICENSE.md file for details.
