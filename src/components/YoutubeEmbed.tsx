'use client';
import { useState } from 'react';
import Icon from './Icons';
import Image from 'next/image';

export default function YouTubeEmbed({ videoId }: { videoId: string }) {
  const [isPlayerActive, setIsPlayerActive] = useState(false);

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-black"
      onClick={() => setIsPlayerActive(true)}
    >
      {isPlayerActive ? (
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <>
          <Image
            width={1280}
            height={720}
            src={thumbnail}
            alt={`YouTube video thumbnail for ${videoId}`}
            className="h-full w-full object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Ss6RhtwlBE7u1/wB+ov8Ak1aFYFYFJ4Y3a/8AWpQl95d6rg5LCY0t+/8APeGxBzywbr/y6zqKGU5hSLZxVs1jrW1/8/0bQYA="
          />
          <div
            aria-label="Play"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center">
              <Icon
                name="youtubeLogo"
                weight="fill"
                className="z-10 text-4xl text-[#FF0000] md:text-6xl"
              />
              <span className="absolute inset-0 animate-ping rounded-full border-2 border-[#FF0000]" />
              <span className="absolute right-1/3 h-5 w-5 rounded-full bg-white" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
