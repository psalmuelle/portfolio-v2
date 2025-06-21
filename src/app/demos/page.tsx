import YouTubeEmbed from '@/components/YoutubeEmbed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demos',
};

export default function DemosPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
      <hgroup>
        <h1 className="font-clash pt-6 text-2xl underline underline-offset-3 md:text-3xl">
          Demos
        </h1>

        <p className="mt-4 text-sm md:text-base">
          Walkthrough demos highlighting key features and functionality of the
          projects I've developed.
        </p>
      </hgroup>

      <div className="mt-10 mb-36 grid grid-cols-1 gap-6 md:mt-14 lg:grid-cols-2">
        <YouTubeEmbed videoId="6HUbKCOzguU" />
        <YouTubeEmbed videoId="6HUbKCOzguU" />
        <YouTubeEmbed videoId="6HUbKCOzguU" />
        <YouTubeEmbed videoId="6HUbKCOzguU" />
        <YouTubeEmbed videoId="6HUbKCOzguU" />
        <YouTubeEmbed videoId="6HUbKCOzguU" />
      </div>
    </div>
  );
}
