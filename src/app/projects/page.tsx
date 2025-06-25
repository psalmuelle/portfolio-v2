'use client';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetailsModal from '@/components/ProjectDetails';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '@/lib/graphql/queries';
import { ProjectProps } from '@/utils/types';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: projects, loading } = useQuery<{
    projectsCollection: { items: ProjectProps[] };
  }>(GET_PROJECTS);

  const filteredProjects = projects?.projectsCollection?.items.filter(
    (project) => {
      if (activeFilter === 'All') return true;
      return project.type === activeFilter.toLowerCase();
    },
  );

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
      <h1 className="font-clash pt-6 text-2xl underline underline-offset-3 md:text-3xl">
        Projects
      </h1>
      <div className="mt-6 flex items-center gap-4">
        <h2 className="text-sm font-medium md:text-base">Filter Projects: </h2>
        <div className="flex gap-2">
          {['All', 'Web', 'Mobile'].map((type, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(type)}
              className={`cursor-pointer rounded-full px-5 py-1 text-sm font-medium ${activeFilter === type ? 'bg-primary-900 text-primary-100' : 'hover:bg-primary-100 hover:text-primary-900'} transition duration-350 ease-in`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-36 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <div className="col-span-3 text-center">
            <p className="text-gray-500">Loading projects...</p>
          </div>
        ) : filteredProjects && filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              description={project.description}
              img={project.img.url}
              tags={project.techStack.slice(0, 3)}
              onClick={() => setIsModalOpen(true)}
            />
          ))
        ) : (
          <div className="col-span-3 text-center">
            <p className="text-gray-500">No projects found.</p>
          </div>
        )}
      </div>

      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        // project={}
      />
    </div>
  );
}
