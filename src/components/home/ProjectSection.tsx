'use client';
import { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard';
import Section from './Section';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '@/lib/graphql/queries';

export default function ProjectSection() {
  const [projects, setProjects] = useState<any[]>([]);
  const {data, loading, error} = useQuery(GET_PROJECTS)

  console.log('Projects Data:', data);

  useEffect(() => {}, []);
  return (
    <>
      {/* Web Projects */}
      <Section
        title="Projects: Web"
        children={
          <div className="mt-6 md:mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 px-1.5 lg:grid-cols-3 lg:gap-8">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
            <div className="mt-4 text-center md:mt-6 md:text-left">
              <a
                href="/projects?type=web"
                className="hover:text-primary-900/90 inline-block rounded-lg font-medium underline underline-offset-4 transition-colors duration-200 md:text-lg"
              >
                See More
              </a>
            </div>
          </div>
        }
      />
      {/* Mobile Projects */}
      <Section
        title="Projects: Mobile"
        children={
          <div className="mt-6 md:mt-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>
            <div className="mt-4 text-center md:mt-6 md:text-left">
              <a
                href="/projects?type=mobile"
                className="hover:text-primary-900/90 inline-block rounded-lg font-medium underline underline-offset-4 transition-colors duration-200 md:text-lg"
              >
                See More
              </a>
            </div>
          </div>
        }
      />
    </>
  );
}
