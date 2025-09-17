import { Metadata } from 'next';
import { getProjects } from '@/lib/graphql/server';
import ClientProjects from '@/components/projects/ClientProjects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of web and mobile development projects built with React, Next.js, React Native, and other tech stacks. See real-world applications showcasing modern development practices.',
  keywords: [
    'portfolio projects',
    'web development projects',
    'mobile development projects',
    'React projects',
    'Next.js applications',
    'React Native apps',
    'full-stack projects',
    'JavaScript projects',
    'TypeScript projects',
    'frontend showcase',
    'UI/UX projects',
  ],
  authors: [{ name: 'Erinle Samuel' }],
  openGraph: {
    title: 'Projects Portfolio | Erinle Sam',
    description:
      'Explore my portfolio of innovative web and mobile development projects built with React, Next.js, React Native, and cutting-edge technologies.',
    type: 'website',
    url: 'https://erinlesam.com/projects',
    images: [
      {
        url: '/projects-og-image.png', // You can create a specific image for projects
        width: 1200,
        height: 630,
        alt: 'Erinle Sam Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Portfolio | Erinle Sam',
    description:
      'Explore innovative web and mobile development projects built with modern technologies.',
    images: ['/projects-og-image.png'],
  },
  alternates: {
    canonical: 'https://erinlesam.com/projects',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
      <h1 className="font-clash pt-6 text-2xl underline underline-offset-3 md:text-3xl">
        Projects
      </h1>
      <ClientProjects projects={projects} />
    </div>
  );
}
