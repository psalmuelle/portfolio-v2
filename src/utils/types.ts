export type ProjectProps = {
  _id: string;
  title: string;
  description: string;
  img: {
    url: string;
    description: string;
  };
  type: 'web' | 'mobile';
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  demo?: string;
};

export type ExperienceProps = {
  id: string;
  company: string;
  role: string;
  location: string;
  description: string;
  startDate: string;
  endDate?: string;
};
