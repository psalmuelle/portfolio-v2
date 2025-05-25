import Image from "next/image";
import ProjectSection from "@/components/home/ProjectSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className='px-6 sm:px-10 lg:px-16'>
      <hgroup className='text-center'>
        <h1 className='text-6xl max-sm:text-4xl font-clash tracking-wider'>
          Erinle Samuel
        </h1>
        <p className='mt-2 text-xl font-medium'>
          Frontend Engineer | React.js & React Native
        </p>
        <p className='max-w-3xl mt-4 mx-auto text-neutral-600'>
          A frontend developer, and javascript engineer. I spend most of my time
          bringing{" "}
          <Link href={'/projects'} className='text-primary-900 font-semibold'>#IDEAS</Link> to
          life! I love building sleek, user-friendly interfaces that are both
          visually sharp and easy to use.
        </p>
      </hgroup>
      <div className="mt-10">
        <ProjectSection />
      </div>
    </div>
  );
}
