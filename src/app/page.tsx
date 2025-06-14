import WorkExperienceSection from '@/components/home/ExperienceSection';
import ProjectSection from '@/components/home/ProjectSection';
import Link from 'next/link';

export default function Home() {
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
        <ProjectSection />
      </div>
      <div>
        <WorkExperienceSection />
      </div>

      <div className="mt-40"></div>
    </div>
  );
}
