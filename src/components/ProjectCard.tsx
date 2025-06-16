import Image from 'next/image';
import Tag from './Tag';
import Icon from './Icons';

type ProjectCardProps = {
  title: string;
  description: string;
  img: string;
  tags: string[];
};

export default function ProjectCard() {
  return (
    <div className="relative w-full cursor-pointer rounded-xl transition-transform duration-350 hover:scale-102 hover:shadow-lg">
      <Image
        src="https://images.ctfassets.net/f1pjbpw1fgkh/1p9YYW0cEChbeSesFVsVxJ/6216258e9482f282225dbf7fc87e3cc5/Screenshot_2025-06-15_225831.png"
        alt="Project Image"
        width={400}
        height={400}
        className="aspect-square w-full rounded-xl object-cover"
      />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#1c1c1c] via-[#1c1c1c]/85 to-transparent p-4">
        <div className="flex h-full w-full flex-col justify-end gap-2">
          <h2 className="font-clash line-clamp-2 text-lg font-bold text-white">
            MovieFlix - Online Movies & TV Shows Application
          </h2>
          <p className="line-clamp-2 text-sm text-white">
            This is a full-stack application that allows users to search for
            movies and TV shows, view details, and manage their watchlist.
          </p>

          <div className="flex items-center gap-2">
            {['Next.js', 'Supabase'].map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <button className="group relative inline-flex h-12 w-12 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-full bg-white/90">
          <span className="bg-primary-300 absolute h-0 w-0 rounded-full transition-all duration-350 ease-out group-hover:h-12 group-hover:w-12 group-active:h-12 group-active:w-12"></span>
          <Icon
            name="caretRight"
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
