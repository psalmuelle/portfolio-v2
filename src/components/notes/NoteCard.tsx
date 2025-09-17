import Link from 'next/link';

interface NoteCardProps {
  title: string;
  date: string;
  description: string;
  slug: string;
}

export default function NoteCard({
  title,
  date,
  description,
  slug,
}: NoteCardProps) {
  return (
    <div className="bg-primary-100 w-full rounded-xl">
      <div className="p-4">
        <h3 className="mt-1 line-clamp-2 text-lg font-semibold">
          <Link href={slug}>{title}</Link>
        </h3>
        <p className="text-primary-900 mt-3 text-xs md:text-sm">📅 {date}</p>
        <p className="mt-3 line-clamp-3 text-sm md:text-base">{description}</p>
        <div className="mt-3 flex justify-end">
          <Link
            className="bg-primary-900 text-primary-100 block rounded-xl px-4 py-2 text-sm hover:underline"
            href={slug}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
