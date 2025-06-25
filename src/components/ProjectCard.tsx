import Image from 'next/image';
import Tag from './Tag';
import Icon from './Icons';

type ProjectCardProps = {
  title: string;
  description: string;
  img: string;
  tags: string[];
  onClick: () => void;
};

export default function ProjectCard({
  title,
  description,
  img,
  tags,
  onClick,
}: ProjectCardProps) {
  return (
    <div className="relative w-full cursor-pointer rounded-xl transition-transform duration-350 hover:scale-102 hover:shadow-lg">
      <Image
        src={img}
        alt={title}
        width={400}
        height={400}
        className="aspect-square w-full rounded-xl object-cover"
      />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/80 to-transparent p-4">
        <div className="flex h-full w-full flex-col justify-end gap-2">
          <h2 className="font-clash line-clamp-2 text-lg font-bold text-white">
            {title}
          </h2>
          <p className="line-clamp-2 text-sm text-white">{description}</p>

          <div className="mt-2 flex items-center gap-2">
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <button
          onClick={onClick}
          aria-label="Open Project Details"
          className="group relative inline-flex h-12 w-12 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-full bg-white/90"
        >
          <span className="bg-primary-300 absolute h-0 w-0 rounded-full transition-all duration-350 ease-out group-hover:h-12 group-hover:w-12 group-active:h-12 group-active:w-12"></span>
          <Icon
            name="arrowOutSimple"
            size={20}
            color="#1c1c1c"
            weight="bold"
            className="z-10"
          />
        </button>
      </div>
    </div>
  );
}
