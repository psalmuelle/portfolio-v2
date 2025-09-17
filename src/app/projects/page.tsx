import { Metadata } from 'next';
import { getProjects } from '@/lib/graphql/server';
import ClientProjects from '@/components/projects/ClientProjects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of web and mobile development projects built with React, Next.js, React Native, and modern technologies.',
  keywords: [
    'portfolio',
    'projects',
    'web development',
    'mobile development',
    'React',
    'Next.js',
    'React Native',
  ],
  openGraph: {
    title: 'Projects | Erinle Sam',
    description:
      'Explore my portfolio of web and mobile development projects built with React, Next.js, React Native, and modern technologies.',
    type: 'website',
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
