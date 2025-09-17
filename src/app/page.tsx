import { Metadata } from 'next';
import ContactSection from '@/components/home/ContactSection';
import WorkExperienceSection from '@/components/home/ExperienceSection';
import ProjectSection from '@/components/home/ProjectSection';
import { getProjects, getWorkExperience } from '@/lib/graphql/server';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Erinle Sam - Frontend Engineer',
  description:
    'Frontend Engineer specializing in React.js, Next.js, and React Native. Building sleek, user-friendly interfaces with modern web technologies.',
  keywords: [
    'frontend engineer',
    'React developer',
    'Next.js',
    'React Native',
    'web development',
    'mobile development',
    'JavaScript',
  ],
  openGraph: {
    title: 'Erinle Sam - Frontend Engineer',
    description:
      'Frontend Engineer specializing in React.js, Next.js, and React Native. Building sleek, user-friendly interfaces with modern web technologies.',
    type: 'website',
  },
};

export default async function Home() {
  const [projects, workExperience] = await Promise.all([
    getProjects(),
    getWorkExperience(),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
      <hgroup className="text-center">
        <h1 className="font-clash text-6xl tracking-wider max-sm:text-4xl">
          Erinle Samuel
        </h1>
        <p className="mt-2 text-xl font-medium">
          Frontend Engineer | React.js & React Native
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
          A frontend developer, and javascript engineer. I spend most of my time
          bringing{' '}
          <Link href={'/projects'} className="text-primary-900 font-semibold">
            #IDEAS
          </Link>{' '}
          to life! I love building sleek, user-friendly interfaces that are both
          visually sharp and easy to use.
        </p>
      </hgroup>
      <hr className="text-primary-900 mt-10 md:mt-12" />
      <div>
        <ProjectSection projects={projects} />
      </div>
      <div>
        <WorkExperienceSection workExperience={workExperience} />
      </div>
      <div>
        <ContactSection />
      </div>

      <div className="mt-36" />
    </div>
  );
}
