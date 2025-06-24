import Modal from './Modal';
import Icon from './Icons';
import Tag from './Tag';
import YouTubeEmbed from './YoutubeEmbed';
import { ProjectProps } from '@/utils/types';

type ProjectDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
  project?: ProjectProps;
};

export default function ProjectDetailsModal({
  isOpen,
  project,
  onClose,
}: ProjectDetailsProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 aria-label="modal-title" className="font-clash text-xl">
        {project?.title}
      </h2>
      <div className="max-h-[70svh] overflow-y-auto py-6">
        <YouTubeEmbed videoId={project?.demo ?? ''} />
        <div className="mt-4 flex gap-4 text-sm md:gap-6">
          <button className="hover:bg-primary-100 active:bg-primary-100 border-primary-600 cursor-pointer rounded-lg border bg-white font-medium transition-all duration-350 ease-out hover:shadow">
            <a href={project?.liveUrl} className="flex items-start px-3 py-1.5">
              <Icon name="arrowOut" size={18} className="mr-1" />
              <span>Live Url</span>
            </a>
          </button>
          <button className="hover:bg-primary-100 active:bg-primary-100 border-primary-600 cursor-pointer rounded-lg border bg-white font-medium transition-all duration-350 ease-out hover:shadow">
            <a
              href={project?.githubUrl}
              className="flex items-start px-3 py-1.5"
            >
              <Icon name="githubLogo" size={18} className="mr-1" />
              <span>GitHub Repo</span>
            </a>
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-2/3">
            <p className="text-base whitespace-pre-wrap">
              {project?.description}
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold">Stack</h3>
            <div className="mt-2 flex flex-wrap gap-3">
              {project?.techStack.map((tech, i) => <Tag key={i}>{tech}</Tag>)}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
