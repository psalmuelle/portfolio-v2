'use client';
import { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard';
import Section from './Section';
import { supabase } from '@/lib/supabase/client';

export default function ProjectSection() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase.from('projects').select('*');
      if (!error) {
        setProjects(data);
      }
    };
    fetchProjects();
  }, []);
  return (
    <>
      {/* Web Projects */}
      <Section
        title="Projects: Web"
        children={
          <>
            <ProjectCard />
          </>
        }
      />
      {/* Mobile Projects */}
      <Section
        title="Projects: Mobile"
        children={
          <>
            <ProjectCard />
          </>
        }
      />
    </>
  );
}
