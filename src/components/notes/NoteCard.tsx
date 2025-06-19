export default function NoteCard() {
  return (
    <div className="bg-primary-100 w-full rounded-xl">
      <div className="p-4">
        <h3 className="mt-1 line-clamp-2 text-lg font-semibold">
          <a href="#">C Programming in 5 minutes- An Overview</a>
        </h3>
        <p className="text-primary-900 mt-3 text-xs md:text-sm">
          📅 May 31, 2025
        </p>
        <p className="mt-3 line-clamp-3 text-sm md:text-base">
          A quick dive into the essentials of C programming, covering syntax,
          data types, and control structures.
        </p>
        <div className="mt-3 flex justify-end">
          <a
            className="bg-primary-900 text-primary-100 block rounded-xl px-4 py-2 text-sm hover:underline"
            href={'#'}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
