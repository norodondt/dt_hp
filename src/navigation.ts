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
      }
      
  ],
  actions: [{ text: 'Let\'s talk on LinkedIn', href: 'https://www.linkedin.com/in/dennistroeger/', target: '_blank' }],
  
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
