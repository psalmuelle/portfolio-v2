'use client';
import { useState } from 'react';
import ProjectCard from '../ProjectCard';
import Section from './Section';
import ProjectDetailsModal from '../ProjectDetails';
import { ProjectProps } from '@/utils/types';

interface ProjectSectionProps {
  projects: ProjectProps[];
}

export default function ProjectSection({ projects }: ProjectSectionProps) {
  // Filter projects by type
  const mobileProjects = projects.filter(
    (project) => project.type === 'mobile',
  );
  const webProjects = projects.filter((project) => project.type === 'web');

  // State for project details modal
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectProps>();

  const handleOpenProjectDetails = (project: ProjectProps) => {
    setIsOpen(true);
    setActiveProject(project);
  };

  const handleCloseProjectDetails = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Web Projects */}
      <Section title="Projects: Web">
        <div className="mt-6 md:mt-8">
          <div className="grid grid-cols-1 gap-6 px-1.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {webProjects && webProjects?.length > 0 ? (
              webProjects.map((project) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  description={project.description}
                  img={project.img.url}
                  tags={project.techStack.slice(0, 3)}
                  onClick={() => handleOpenProjectDetails(project)}
                />
              ))
            ) : (
              <div className="col-span-3 text-center">
                <p className="text-gray-500">No web projects found.</p>
              </div>
            )}
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
      </Section>

      {/* Mobile Projects */}
      <Section title="Projects: Mobile">
        <div className="mt-6 md:mt-8">
          <div className="grid grid-cols-1 gap-6 px-1.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {mobileProjects && mobileProjects?.length > 0 ? (
              mobileProjects.map((project) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  description={project.description}
                  img={project.img.url}
                  tags={project.techStack.slice(0, 3)}
                  onClick={() => handleOpenProjectDetails(project)}
                />
              ))
            ) : (
              <div className="col-span-3 text-center">
                <p className="text-gray-500">No mobile projects found.</p>
              </div>
            )}
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
      </Section>

      <ProjectDetailsModal
        isOpen={isOpen}
        onClose={handleCloseProjectDetails}
        project={activeProject}
      />
    </>
  );
}
