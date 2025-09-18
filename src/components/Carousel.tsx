'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Icon from './Icons';

interface CarouselItem {
  url: string;
  description?: string;
  title?: string;
  width?: number;
  height?: number;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export default function Carousel({
  items,
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = true,
  className = '',
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Clear any existing interval
  const clearAutoPlayInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Start autoplay interval
  const startAutoPlayInterval = useCallback(() => {
    clearAutoPlayInterval();

    if (isPlaying && !isHovered && items.length > 1 && autoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1,
        );
      }, autoPlayInterval);
    }
  }, [
    isPlaying,
    isHovered,
    items.length,
    autoPlay,
    autoPlayInterval,
    clearAutoPlayInterval,
  ]);

  // Auto-play functionality with better state management
  useEffect(() => {
    startAutoPlayInterval();
    return clearAutoPlayInterval;
  }, [startAutoPlayInterval, clearAutoPlayInterval]);

  // Navigation functions with autoplay pause
  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      // Temporarily pause autoplay when manually navigating
      if (autoPlay && isPlaying) {
        clearAutoPlayInterval();
        setTimeout(startAutoPlayInterval, autoPlayInterval);
      }
    },
    [
      autoPlay,
      isPlaying,
      clearAutoPlayInterval,
      startAutoPlayInterval,
      autoPlayInterval,
    ],
  );

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
    // Temporarily pause autoplay when manually navigating
    if (autoPlay && isPlaying) {
      clearAutoPlayInterval();
      setTimeout(startAutoPlayInterval, autoPlayInterval);
    }
  }, [
    items.length,
    autoPlay,
    isPlaying,
    clearAutoPlayInterval,
    startAutoPlayInterval,
    autoPlayInterval,
  ]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
    // Temporarily pause autoplay when manually navigating
    if (autoPlay && isPlaying) {
      clearAutoPlayInterval();
      setTimeout(startAutoPlayInterval, autoPlayInterval);
    }
  }, [
    items.length,
    autoPlay,
    isPlaying,
    clearAutoPlayInterval,
    startAutoPlayInterval,
    autoPlayInterval,
  ]);

  // Touch/swipe handling with improved autoplay management
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    // Pause autoplay during touch interaction
    if (autoPlay) {
      clearAutoPlayInterval();
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      // Resume autoplay if no swipe occurred
      if (autoPlay && isPlaying) {
        startAutoPlayInterval();
      }
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);

    // Resume autoplay after swipe
    if (autoPlay && isPlaying) {
      setTimeout(startAutoPlayInterval, autoPlayInterval);
    }
  };

  // Keyboard navigation with better autoplay handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if the carousel is focused or no other input is focused
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        setIsPlaying(!isPlaying);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext, isPlaying]);

  // Improved hover handling
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  if (!items || items.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100">
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-black ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={carouselRef}
    >
      {/* Main carousel container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div key={index} className="relative w-full flex-shrink-0">
            <div className="aspect-video w-full">
              <Image
                src={item.url}
                alt={item.description || item.title || `Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>

            {/* Image overlay with title/description */}
            {(item.title || item.description) && (
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                {item.title && (
                  <h3 className="mb-1 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                )}
                {item.description && (
                  <p className="text-sm text-gray-200">{item.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus:ring-2 focus:ring-white/50 focus:outline-none"
            aria-label="Previous image"
          >
            <Icon name="chevronLeft" className="h-5 w-5" />
          </button>

          <button
            onClick={goToNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus:ring-2 focus:ring-white/50 focus:outline-none"
            aria-label="Next image"
          >
            <Icon name="chevronRight" className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {showDots && items.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'scale-125 bg-white'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image counter */}
      <div className="absolute top-4 left-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white backdrop-blur-sm">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
}
