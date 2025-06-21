import NoteCard from '@/components/notes/NoteCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notes',
};

export default function NotesPage() {
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
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </div>
  );
}
