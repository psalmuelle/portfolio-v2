'use client';
import { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard';
import Section from './Section';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '@/lib/graphql/queries';
import Modal from '../Modal';
import Image from 'next/image';
import ProjectDetailsModal from '../ProjectDetails';

const sampleProjects = [
  {
    id: '1',
    title: 'MovieFlex - A Movie Recommendation App',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, esse dolor magnam tempore debitis quasi accusamus nesciunt. Ut, possimus rerum odit eaque sunt repudiandae saepe consectetur, iure dicta earum id labore beatae. Sit similique neque qui animi esse excepturi, consectetur illo eos ullam placeat? Enim voluptatibus architecto ipsam necessitatibus delectus?',
    img: 'https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png',
    tags: ['Web', 'React'],
  },
  {
    id: '2',
    title: 'MovieFlex - A Movie Recommendation App',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, esse dolor magnam tempore debitis quasi accusamus nesciunt. Ut, possimus rerum odit eaque sunt repudiandae saepe consectetur, iure dicta earum id labore beatae. Sit similique neque qui animi esse excepturi, consectetur illo eos ullam placeat? Enim voluptatibus architecto ipsam necessitatibus delectus?',
    img: 'https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png',
    tags: ['Mobile', 'Flutter'],
  },
  {
    id: '3',
    title: 'MovieFlex - A Movie Recommendation App',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, esse dolor magnam tempore debitis quasi accusamus nesciunt. Ut, possimus rerum odit eaque sunt repudiandae saepe consectetur, iure dicta earum id labore beatae. Sit similique neque qui animi esse excepturi, consectetur illo eos ullam placeat? Enim voluptatibus architecto ipsam necessitatibus delectus?',
    img: 'https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png',
    tags: ['Web', 'Next.js'],
  },
  {
    id: '4',
    title: 'MovieFlex - A Movie Recommendation App',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, esse dolor magnam tempore debitis quasi accusamus nesciunt. Ut, possimus rerum odit eaque sunt repudiandae saepe consectetur, iure dicta earum id labore beatae. Sit similique neque qui animi esse excepturi, consectetur illo eos ullam placeat? Enim voluptatibus architecto ipsam necessitatibus delectus?',
    img: 'https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png',
    tags: ['Mobile', 'React Native'],
  },
  {
    id: '5',
    title: 'MovieFlex - A Movie Recommendation App',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, esse dolor magnam tempore debitis quasi accusamus nesciunt. Ut, possimus rerum odit eaque sunt repudiandae saepe consectetur, iure dicta earum id labore beatae. Sit similique neque qui animi esse excepturi, consectetur illo eos ullam placeat? Enim voluptatibus architecto ipsam necessitatibus delectus?',
    img: 'https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png',
    tags: ['Web', 'Gatsby'],
  },
  {
    id: '6',
    title: 'MovieFlex - A Movie Recommendation App',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, esse dolor magnam tempore debitis quasi accusamus nesciunt. Ut, possimus rerum odit eaque sunt repudiandae saepe consectetur, iure dicta earum id labore beatae. Sit similique neque qui animi esse excepturi, consectetur illo eos ullam placeat? Enim voluptatibus architecto ipsam necessitatibus delectus?',
    img: 'https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png',
    tags: ['Mobile', 'Swift'],
  },
];

export default function ProjectSection() {
  const [projects, setProjects] = useState<any[]>([]);
  const { data, loading, error } = useQuery(GET_PROJECTS);
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState();

  const handleOpenProjectDetails = (projectId: string) => {
    setIsOpen(true);
  };

  const handleCloseProjectDetails = () => {
    setIsOpen(false);
  };

  console.log('Projects Data:', data);

  useEffect(() => {}, []);
  return (
    <>
      {/* Web Projects */}
      <Section
        title="Projects: Web"
        children={
          <div className="mt-6 md:mt-8">
            <div className="grid grid-cols-1 gap-6 px-1.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {sampleProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  img={project.img}
                  tags={project.tags}
                  onClick={() => handleOpenProjectDetails(project.id)}
                />
              ))}
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
            <div className="grid grid-cols-1 gap-6 px-1.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {sampleProjects.slice(3, 6).map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  img={project.img}
                  tags={project.tags}
                  onClick={() => handleOpenProjectDetails(project.id)}
                />
              ))}
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
      <ProjectDetailsModal
        isOpen={isOpen}
        onClose={handleCloseProjectDetails}
        imgDesc="An example of this"
        imgSrc="https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png"
      />
    </>
  );
}
