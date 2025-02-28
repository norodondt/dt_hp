import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
      {
        text: 'Start',
        href: "/"
      },
      {
        text: 'About',
        href: "/about"
      },
      {
        text: 'Blog',
        href: "/blog"
      },
      {
        text: 'Tools',
        href: "/tools"
      }
      
  ],
  actions: [{ text: 'Visit LinkedIn', href: 'https://www.linkedin.com/in/dennistroeger', target: '_blank' },{ text: 'Watch YouTube', href: 'https://www.youtube.com/@dennis_decodes_systems', target: '_blank', variant: 'primary' }],
  
};

export const footerData = {
  links: [
  ],
  secondaryLinks: [
    
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  
  ],
};
