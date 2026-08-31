export interface Project {
  slug: string;
  client: string;
  year: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  paragraphs: [string, string];
  goal: string;
  stack: string;
  liveLink?: string;
}

export interface Job {
  company: string;
  role: string;
  period: [string, string];
  description: string[];
}

export const contactEmail = 'hello@erinlesam.com';

export const socialLinks: { label: string; href: string }[] = [
  { label: 'X', href: 'https://x.com/erinle_sam' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/erinle-samuel/' },
  { label: 'GitHub', href: 'https://github.com/psalmuelle' },
  { label: 'Substack', href: 'https://substack.com/@erinlesam' },
];

export const avatar = {
  src: '/erinle-samuel.jpg',
  alt: 'a photo of erinle samuel',
};

const IMG = {
  manyva: '/manyva-mockup-cm.png',
  fieldsub: '/fieldsub-mockup.png',
  weboard: '/weboard-mockup.png',
  ezyswap: '/ezyswap-mockup.png',
};

export const projects: Project[] = [
  {
    slug: 'manyva-ai-video-platform',
    client: 'Personal Project',
    year: '2026 - Present',
    title: 'Manyva - Video Marketing Platform',
    subtitle:
      'Started working on manyva as a side project to help solve a problem for founders and small teams.',
    heroImage: IMG.manyva,
    heroAlt: 'Manyva.ai, founder\'s goto for marketing videos',
    paragraphs: [
      'Manyva is a video marketing platform I\'m building for founders and lean teams who need a simpler way to create consistent marketing content without a large in-house production setup.',
      'I\'m taking the product from idea to implementation, shaping the user experience and building the frontend and backend foundations for a focused, approachable workflow. The goal is to make polished video marketing easier to plan, create, and maintain as a company grows.',
    ],
    goal: 'Give founders and small teams a straightforward way to turn ideas into on-brand marketing videos and keep a consistent content rhythm.',
    stack: 'Frontend, Backend, APIs, Debugging, Reliability',
  },
  {
    slug: 'fieldsub-field-service-mgmt-platform',
    client: 'Fieldsub',
    year: '2025 - Present',
    title: 'Fieldsub - Field Service Mgmt. Platform',
    subtitle:
      'Building and maintaining web and mobile application features across frontend and backend systems.',
    heroImage: IMG.fieldsub,
    heroAlt: 'Fieldsub product interface',
    paragraphs: [
      'At Fieldsub, I work as a Software Engineer building and maintaining product features across frontend and backend systems. The role gives me room to think end-to-end about how product flows are designed, implemented, and supported in production.',
      'My work focuses on API design and integration, debugging production issues, improving performance, and keeping application behavior reliable as the product grows.',
    ],
    goal: 'Build reliable, maintainable features that support real product workflows across the stack.',
    stack: 'Frontend, Backend, APIs, Performance, Reliability',
    liveLink: 'https://fieldsub.com',
  },
  {
    slug: 'weboard-hotel-booking-platform',
    client: 'Weboard',
    year: '2024 - 2025',
    title: 'Weboard - Hotel Booking Platform',
    subtitle:
      'Helped build a hotel booking platform from the ground up as part of the founding engineering team.',
    heroImage: IMG.weboard,
    heroAlt: 'Weboard hotel booking platform interface',
    paragraphs: [
      'At Weboard, I joined as part of the founding team and helped build the hotel booking platform from the ground up to production launch within 6 months.',
      'I integrated payment gateways and booking APIs, improved frontend quality and testing practices, and analyzed user behavior with React and Google Analytics to identify bottlenecks in the booking experience.',
    ],
    goal: 'Ship a production-ready booking platform with reliable payments, cleaner releases, and better user engagement.',
    stack: 'React, Payment Gateways, Booking APIs, Testing, Google Analytics',
  },
  {
    slug: 'ezyswap-crypto-market-dashboard',
    client: 'Ezyswap',
    year: '2023',
    title: 'Ezyswap - Crypto Market Dashboard',
    subtitle:
      'Built frontend product features for real-time crypto data, SEO, testing, and performance improvements.',
    heroImage: IMG.ezyswap,
    heroAlt: 'Ezyswap crypto market dashboard interface',
    paragraphs: [
      'At Ezyswap, I refactored key areas of the frontend codebase to improve maintainability and performance, while developing interactive chart UIs for real-time crypto asset prices.',
      'I also implemented frontend SEO best practices and introduced unit tests with Jest, reaching 70% test coverage and helping reduce post-release issues.',
    ],
    goal: 'Make market data easier to understand while improving frontend quality, performance, and release confidence.',
    stack: 'Frontend Development, Interactive Charts, SEO, Jest, Performance',
    liveLink: 'https://ezyswap.ai',
  },
];

export const tools: { group: string; items: string[] }[] = [
  {
    group: 'Frontend Engineering',
    items: [
      'JavaScript & TypeScript',
      'Frontend architecture',
      'Web fundamentals',
    ],
  },
  {
    group: 'Backend & Systems',
    items: ['APIs & databases', 'Systems Design', 'Security & reliability'],
  },
  {
    group: 'Quality & Delivery',
    items: [
      'Testing & automation',
      'CI/CD & DevOps',
      'Monitoring & observability',
    ],
  },
];

export const workHistory: Job[] = [
  {
    company: 'Fieldsub',
    role: 'Software Engineer',
    period: ['Oct 2025', 'Present'],
    description: [
      'Build and maintain web and mobile application features across frontend and backend systems.',
      'Design and integrate APIs to support reliable product workflows and application behavior.',
      'Improve reliability through debugging, performance work, and practical production issue resolution.',
    ],
  },
  {
    company: 'Weboard',
    role: 'Frontend Developer',
    period: ['Aug 2024', 'May 2025'],
    description: [
      'Joined as part of the founding team, building the hotel booking platform from the ground up to production launch within 6 months.',
      'Integrated payment gateways and booking APIs, ensuring seamless transactions for users across multiple devices.',
      'Enhanced code quality and testing processes, resulting in a 30% drop in production bug reports.',
      'Analyzed user behavior with React and Google Analytics to identify bottlenecks, driving a 15% increase in session duration.',
    ],
  },
  {
    company: 'Ezyswap',
    role: 'Frontend Developer',
    period: ['Mar 2023', 'Aug 2023'],
    description: [
      'Refactored key sections of the frontend codebase, improving code maintainability and performance.',
      'Developed interactive chart UIs to display real-time crypto asset prices, improving data clarity and trader decision-making.',
      'Implemented frontend SEO best practices, boosting organic traffic by approximately 30%.',
      'Introduced unit tests with Jest, achieving 70% test coverage and reducing post-release issues.',
    ],
  },
  {
    company: 'HNG Internship',
    role: 'Frontend Developer',
    period: ['Oct 2022', 'Dec 2022'],
    description: [
      'Collaborated with a team of 12 interns to design and launch an MVP in under 8 weeks.',
      "Developed and maintained the frontend using modern web technologies under a senior developer's mentorship.",
      'Participated in planning and code reviews via Slack and GitHub to manage dependencies and anticipate changes.',
      'Contributed to a product that reached approximately 2,000 users within 3 months of launch.',
    ],
  },
];

export const aboutParagraphs = [
  "I'm a Software Engineer with experience building and maintaining web and mobile applications across frontend and backend systems.",
  'I started in frontend engineering and have since expanded into backend development, giving me a stronger end-to-end understanding of how products are designed, built, and maintained.',
  'I enjoy solving practical problems, making thoughtful engineering decisions, and building software that can evolve as products grow.',
];

export function projectForSlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
