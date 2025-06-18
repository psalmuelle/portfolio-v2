'use client';
import ProjectCard from '@/components/ProjectCard';
import { useState } from 'react';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
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

      <div className="mt-10 md:mt-14 mb-36 grid grid-cols-1 gap-6 md:grid-cols-3">
        <ProjectCard
          title="MovieFlex - A Movie Recommendation App"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, esse dolor magnam tempore debitis quasi accusamus nesciunt. Ut, possimus rerum odit eaque sunt repudiandae saepe consectetur, iure dicta earum id labore beatae. Sit similique neque qui animi esse excepturi, consectetur illo eos ullam placeat? Enim voluptatibus architecto ipsam necessitatibus delectus?"
          img="https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png"
          tags={['React', 'Next.js', 'Tailwind CSS']}
          onClick={() => {}}
        />
        <ProjectCard
          title="MovieFlex - A Movie Recommendation App"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, esse dolor magnam tempore debitis quasi accusamus nesciunt. Ut, possimus rerum odit eaque sunt repudiandae saepe consectetur, iure dicta earum id labore beatae. Sit similique neque qui animi esse excepturi, consectetur illo eos ullam placeat? Enim voluptatibus architecto ipsam necessitatibus delectus?"
          img="https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png"
          tags={['React', 'Next.js']}
          onClick={() => {}}
        />
        <ProjectCard
          title="MovieFlex - A Movie Recommendation App"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, esse dolor magnam tempore debitis quasi accusamus nesciunt. Ut, possimus rerum odit eaque sunt repudiandae saepe consectetur, iure dicta earum id labore beatae. Sit similique neque qui animi esse excepturi, consectetur illo eos ullam placeat? Enim voluptatibus architecto ipsam necessitatibus delectus?"
          img="https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png"
          tags={['React', 'Next.js', 'Tailwind CSS']}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
