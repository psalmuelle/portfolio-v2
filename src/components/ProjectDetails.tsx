// import Image from 'next/image';
import Modal from './Modal';
import Icon from './Icons';
import Tag from './Tag';
import YouTubeEmbed from './YoutubeEmbed';

type ProjectDetailsProps = {
  isOpen: boolean;
  onClose: () => void;
  imgSrc: string;
  imgDesc: string;
};

export default function ProjectDetailsModal({
  isOpen,
  onClose,
}: ProjectDetailsProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 aria-label="modal-title" className="font-clash text-xl">
        MovieFlex- A Movie Recommendation App
      </h2>
      <div className="max-h-[70svh] overflow-y-auto py-6">
        <YouTubeEmbed videoId="6HUbKCOzguU" />
        <div className="mt-4 flex gap-4 text-sm md:gap-6">
          <button className="hover:bg-primary-100 active:bg-primary-100 border-primary-600 flex cursor-pointer items-start rounded-lg border bg-white px-3 py-1.5 font-medium transition-all duration-350 ease-out hover:shadow">
            <Icon name="arrowOut" size={18} className="mr-1" />
            <span>Live Url</span>
          </button>
          <button className="hover:bg-primary-100 active:bg-primary-100 border-primary-600 flex cursor-pointer items-start rounded-lg border bg-white px-3 py-1.5 font-medium transition-all duration-350 ease-out hover:shadow">
            <Icon name="githubLogo" size={18} className="mr-1" />
            <span>GitHub Repo</span>
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-2/3">
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, consectetur, neque corporis labore veniam illum nobis
              porro dicta, recusandae illo vitae dolore atque. Adipisci sapiente
              ratione esse, alias nesciunt, asperiores suscipit harum
              consequatur ipsam quis commodi. Unde omnis porro, blanditiis vero
              facilis. Repellat perspiciatis quaerat rem!
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold">Stack</h3>
            <div className="mt-2 flex flex-wrap gap-3">
              {[
                'React',
                'Next.js',
                'Tailwind CSS',
                'TypeScript',
                'Node.js',
              ].map((tech, i) => (
                <Tag key={i}>{tech}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
