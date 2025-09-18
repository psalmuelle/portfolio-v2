'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import ProjectDetailsModal from '@/components/ProjectDetails';
import { ProjectProps } from '@/utils/types';

interface ClientProjectsProps {
  projects: ProjectProps[];
}

export default function ClientProjects({ projects }: ClientProjectsProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectProps>();

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.type === activeFilter.toLowerCase();
  });

  const handleOpenDetails = (project: ProjectProps) => {
    setIsModalOpen(true);
    setActiveProject(project);
  };

  return (
    <>
      <div className="mt-6 flex items-center gap-4">
        <h2 className="text-sm font-medium md:text-base">Filter Projects: </h2>
        <div className="flex gap-2">
          {['All', 'Web', 'Mobile'].map((type, i) => (
            <button
              key={i}
              onClick={() => setActiveFilter(type)}
              className={`cursor-pointer rounded-full px-5 py-1 text-sm font-medium ${
                activeFilter === type
                  ? 'bg-primary-900 text-primary-100'
                  : 'hover:bg-primary-100 hover:text-primary-900'
              } transition duration-350 ease-in`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 mb-36 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects && filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              description={project.description}
              img={project.previewImg.url}
              tags={project.techStack.slice(0, 3)}
              onClick={() => handleOpenDetails(project)}
            />
          ))
        ) : (
          <div className="col-span-3 text-center">
            <p className="text-gray-500">No projects found for this filter.</p>
          </div>
        )}
      </div>

      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={activeProject}
      />
    </>
  );
}
