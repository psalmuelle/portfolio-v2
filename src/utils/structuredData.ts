// Utility functions for generating JSON-LD structured data

export interface PersonSchema {
  '@context': string;
  '@type': 'Person';
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
  sameAs: string[];
  worksFor?: {
    '@type': 'Organization';
    name: string;
  };
  knowsAbout: string[];
  alumniOf?: {
    '@type': 'Organization';
    name: string;
  };
  email?: string;
  telephone?: string;
  address?: {
    '@type': 'PostalAddress';
    addressLocality: string;
    addressCountry: string;
  };
}

export interface WebsiteSchema {
  '@context': string;
  '@type': 'WebSite';
  name: string;
  url: string;
  description: string;
  publisher: {
    '@type': 'Person';
    name: string;
  };
  potentialAction?: {
    '@type': 'SearchAction';
    target: string;
    'query-input': string;
  };
}

export interface ArticleSchema {
  '@context': string;
  '@type': 'Article';
  headline: string;
  description: string;
  image?: string;
  author: {
    '@type': 'Person';
    name: string;
    url: string;
  };
  publisher: {
    '@type': 'Person';
    name: string;
    url: string;
  };
  datePublished: string;
  dateModified?: string;
  url: string;
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
  keywords?: string[];
}

export interface CreativeWorkSchema {
  '@context': string;
  '@type': 'CreativeWork';
  name: string;
  description: string;
  url?: string;
  image?: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  dateCreated: string;
  genre: string;
  keywords: string[];
  programmingLanguage?: string[];
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': 'BreadcrumbList';
  itemListElement: {
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }[];
}

export interface OrganizationSchema {
  '@context': string;
  '@type': 'Person';
  name: string;
  url: string;
  logo: {
    '@type': 'ImageObject';
    url: string;
  };
  sameAs: string[];
  jobTitle: string;
  worksFor: {
    '@type': 'Organization';
    name: string;
  };
  knowsAbout: string[];
}

export const generatePersonSchema = (): PersonSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Erinle Samuel',
  jobTitle: 'Frontend Engineer',
  description:
    'Frontend Engineer specializing in React.js, Next.js, and React Native. Building sleek, user-friendly interfaces with modern web technologies.',
  url: 'https://erinlesam.com',
  image: 'https://erinlesam.com/profile-image.jpg', // Add your profile image
  sameAs: [
    'https://github.com/psalmuelle',
    'https://linkedin.com/in/your-linkedin', // Replace with actual
    'https://twitter.com/your_twitter_handle', // Replace with actual
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  knowsAbout: [
    'React.js',
    'Next.js',
    'React Native',
    'JavaScript',
    'TypeScript',
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Full-Stack Development',
  ],
  email: 'hello@erinlesam.com', // Replace with actual
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Your City', // Replace with actual
    addressCountry: 'Your Country', // Replace with actual
  },
});

export const generateWebsiteSchema = (): WebsiteSchema => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Erinle Sam Portfolio',
  url: 'https://erinlesam.com',
  description:
    'Frontend Engineer portfolio showcasing innovative web and mobile development projects built with React, Next.js, and React Native.',
  publisher: {
    '@type': 'Person',
    name: 'Erinle Samuel',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://erinlesam.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
});

export const generateArticleSchema = (
  title: string,
  description: string,
  slug: string,
  datePublished: string,
  image?: string,
  keywords?: string[],
): ArticleSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  image: image || 'https://erinlesam.com/opengraph-image.png',
  author: {
    '@type': 'Person',
    name: 'Erinle Samuel',
    url: 'https://erinlesam.com',
  },
  publisher: {
    '@type': 'Person',
    name: 'Erinle Samuel',
    url: 'https://erinlesam.com',
  },
  datePublished,
  dateModified: datePublished,
  url: `https://erinlesam.com/notes/${slug}`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://erinlesam.com/notes/${slug}`,
  },
  keywords,
});

export const generateProjectSchema = (
  name: string,
  description: string,
  image: string,
  technologies: string[],
  url?: string,
): CreativeWorkSchema => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name,
  description,
  url,
  image,
  author: {
    '@type': 'Person',
    name: 'Erinle Samuel',
  },
  dateCreated: new Date().toISOString(),
  genre: 'Software Development',
  keywords: ['web development', 'mobile development', ...technologies],
  programmingLanguage: technologies,
});

export const generateBreadcrumbSchema = (
  items: { name: string; url: string }[],
): BreadcrumbSchema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Erinle Samuel',
    url: 'https://erinlesam.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://erinlesam.com/opengraph-image.png',
    },
    sameAs: [
      'https://github.com/psalmuelle',
      'https://linkedin.com/in/your-linkedin', // Replace with actual LinkedIn URL
      'https://twitter.com/your-twitter', // Replace with actual Twitter URL
    ],
    jobTitle: 'Frontend Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    knowsAbout: [
      'React.js',
      'Next.js',
      'React Native',
      'JavaScript',
      'TypeScript',
      'Frontend Development',
      'Mobile Development',
      'UI/UX Design',
    ],
  };
}
