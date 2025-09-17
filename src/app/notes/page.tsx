import { Metadata } from 'next';
import { getNotes } from '@/lib/graphql/server';
import NoteCard from '@/components/notes/NoteCard';
import { NoteProps } from '@/utils/types';

export const metadata: Metadata = {
  title: 'Notes',
  description:
    'A collection of insights and notes gathered from my learning journey and hands-on project work in web development, React, and modern technologies.',
  keywords: [
    'notes',
    'blog',
    'learning',
    'web development',
    'React',
    'Next.js',
    'React Native',
    'programming insights',
  ],
  openGraph: {
    title: 'Notes | Erinle Sam',
    description:
      'A collection of insights and notes gathered from my learning journey and hands-on project work.',
    type: 'website',
  },
};

export default async function NotesPage() {
  const notes: NoteProps[] = await getNotes();

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
      <hgroup>
        <h1 className="font-clash pt-6 text-2xl underline underline-offset-3 md:text-3xl">
          Notes
        </h1>

        <p className="mt-4 text-sm md:text-base">
          A collection of insights and notes gathered from my learning journey
          and hands-on project work.
        </p>
      </hgroup>
      <div className="mt-10 mb-36 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
        {notes && notes.length > 0 ? (
          notes.map((note: NoteProps) => (
            <NoteCard
              key={note.id}
              title={note.title}
              date={new Date(note.dateCreated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              description={note.description}
              slug={note.slug}
            />
          ))
        ) : (
          <div className="col-span-3 text-center">
            <p className="text-gray-500">No notes found...</p>
          </div>
        )}
      </div>
    </div>
  );
}
