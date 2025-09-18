export type ImageProps = {
  url: string;
  description?: string;
};

export type ProjectProps = {
  _id: string;
  title: string;
  description: string;
  previewImg: ImageProps;
  type: 'web' | 'mobile';
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  demo?: string;
  appScreenshots?: {
    items: ImageProps[];
  };
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

export type NoteProps = {
  id: string;
  title: string;
  slug: string;
  description: string;
  dateCreated: string;
};
