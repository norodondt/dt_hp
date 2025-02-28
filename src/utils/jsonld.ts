import type { ImageMetadata } from 'astro';
import type { Post } from '~/types';
import { getCanonical } from './permalinks';

/**
 * Creates JSON-LD structured data for a blog post
 * @param post The blog post
 * @param url The canonical URL of the post
 * @param image The post image
 * @param siteName The name of the site/organization
 * @param logoUrl The URL of the site/organization logo
 * @returns JSON-LD structured data object
 */
export function createBlogPostJsonLd(
  post: Post,
  url: string,
  image: ImageMetadata | string | undefined,
  siteName: string = 'Dennis Tröger',
  logoUrl: string = 'favicon.svg'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'description': post.excerpt,
    'image': image ? (typeof image === 'string' ? image : import.meta.env.SITE + image.src) : undefined,
    'datePublished': post.publishDate,
    'dateModified': post.updateDate || post.publishDate,
    'author': post.author
      ? {
          '@type': 'Person',
          'name': post.author,
        }
      : undefined,
    'publisher': {
      '@type': 'Organization',
      'name': siteName,
      'logo': {
        '@type': 'ImageObject',
        'url': import.meta.env.SITE + logoUrl,
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * Creates JSON-LD structured data for a blog listing page
 * @param posts The list of blog posts
 * @param url The canonical URL of the listing page
 * @param title The title of the blog
 * @param description The description of the blog
 * @param siteName The name of the site/organization
 * @param logoUrl The URL of the site/organization logo
 * @returns JSON-LD structured data object
 */
export function createBlogListingJsonLd(
  posts: Post[],
  url: string,
  title: string = 'Systems Decoded Blog',
  description: string = 'My passion is to decode complex systems into simple solutions.',
  siteName: string = 'Dennis Tröger',
  logoUrl: string = 'favicon.svg'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'headline': title,
    'description': description,
    'url': url,
    'publisher': {
      '@type': 'Organization',
      'name': siteName,
      'logo': {
        '@type': 'ImageObject',
        'url': import.meta.env.SITE + logoUrl,
      },
    },
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': posts.map((post, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'url': getCanonical(post.permalink),
      })),
    },
  };
}

/**
 * Creates JSON-LD structured data for a website/organization
 * @param url The canonical URL of the website
 * @param name The name of the website/organization
 * @param description The description of the website/organization
 * @param logoUrl The URL of the website/organization logo
 * @returns JSON-LD structured data object
 */
export function createWebsiteJsonLd(
  url: string,
  name: string = 'Dennis Tröger',
  description: string = 'My passion is to decode complex systems into simple solutions.',
  logoUrl: string = 'favicon.svg'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': url,
    'name': name,
    'description': description,
    'publisher': {
      '@type': 'Organization',
      'name': name,
      'logo': {
        '@type': 'ImageObject',
        'url': import.meta.env.SITE + logoUrl,
      },
    },
  };
} 