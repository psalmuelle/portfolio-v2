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
