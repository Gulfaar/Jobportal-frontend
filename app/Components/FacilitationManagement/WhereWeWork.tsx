"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const WhereWeWork = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const scrollPositionRef = useRef(0);
  const touchStartRef = useRef(0);
  const [isTouching, setIsTouching] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!scrollContainer || isTouching) return;
      
      // Slower scroll speed on mobile
      const scrollSpeed = isMobile ? 0.3 : 1;
      scrollPositionRef.current += scrollSpeed;
      
      if (scrollPositionRef.current >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPositionRef.current = 0;
      }
      
      scrollContainer.scrollLeft = scrollPositionRef.current;
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    // Start auto-scroll for both mobile and desktop
    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMobile, isTouching]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    touchStartRef.current = e.touches[0].clientX;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
    // Resume auto-scroll after touch ends
    if (scrollContainerRef.current) {
      scrollPositionRef.current = scrollContainerRef.current.scrollLeft;
      animationFrameRef.current = requestAnimationFrame(() => {
        if (scrollContainerRef.current) {
          const scroll = () => {
            if (!scrollContainerRef.current || isTouching) return;
            const scrollSpeed = isMobile ? 0.3 : 1;
            scrollPositionRef.current += scrollSpeed;
            if (scrollPositionRef.current >= scrollContainerRef.current!.scrollWidth - scrollContainerRef.current!.clientWidth) {
              scrollPositionRef.current = 0;
            }
            scrollContainerRef.current!.scrollLeft = scrollPositionRef.current;
            animationFrameRef.current = requestAnimationFrame(scroll);
          };
          scroll();
        }
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current || !isTouching) return;
    
    const touchDelta = touchStartRef.current - e.touches[0].clientX;
    scrollContainerRef.current.scrollLeft += touchDelta;
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
    }
  };

  const workplaces = [
    {
      image: '/wherewework1.png',
      title: 'Buildings',
      description: 'From towers to terminals, we deliver smart, compliant solutions for every building.'
    },
    {
      image: '/wherewework2.png',
      title: 'Skyscrapers',
      description: 'Gulfaar delivers intelligent solutions for modern high-rises efficient, sustainable, and built for the future.'
    },
    {
      image: '/wherewework3.png',
      title: 'Hotels',
      description: 'We deliver smart, compliant solutions that enhance guest experience and operational excellence.'
    },
    {
      image: '/wherewework4.png',
      title: 'Hospitals',
      description: 'We deliver reliable solutions that support patient care, safety, and operational efficiency.'
    },
    {
      image: '/wherewework5.png',
      title: 'Schools',
      description: 'We provide safe, efficient solutions that support education, growth, and future-ready environments.'
    },
    {
      image: '/wherewework6.png',
      title: 'Parks',
      description: 'We create sustainable, well-planned spaces that promote relaxation, community, and well-being.'
    },
    {
      image: '/wherewework7.png',
      title: 'Oil Rigs',
      description: 'We deliver robust, compliant solutions that ensure safety, efficiency, offshore and onshore operations.'
    },
    {
      image: '/wherewework8.png',
      title: 'Refineries',
      description: 'We provide efficient, compliant systems support complex refining operations reliability and innovation.'
    },
    {
      image: '/wherewework9.png',
      title: 'Power Plants',
      description: 'We deliver reliable, compliant systems that drive performance, sustainability in energy production.'
    },
    {
      image: '/wherewework10.png',
      title: 'Marine Ports',
      description: 'We offer efficient, compliant solutions that streamline operations and boost global connectivity.'
    },
    {
      image: '/wherewework11.png',
      title: 'Offshore Facilities',
      description: 'We deliver efficient, compliant solutions for secure offshore operations.'
    },
    {
      image: '/wherewework12.png',
      title: 'Pharma',
      description: 'We deliver efficient, compliant solutions for the pharmaceutical industry.'
    },
    {
      image: '/wherewework13.png',
      title: 'Data Centers',
      description: 'We deliver reliable, efficient solutions that ensure optimal performance and security.'
    }
  ]

  return (
    <div className="px-4 md:px-15 py-8 md:py-16 sm:px-10">
      <h1 className="text-[#2E5F5C] text-3xl md:text-5xl font-semibold mb-6 md:mb-12 text-center md:text-left">Where We Work</h1>

      <div 
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide touch-pan-x"
        onWheel={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {workplaces.map((workplace, index) => (
          <div 
            key={index} 
            className="w-[380px] h-[520px] flex-shrink-0 max-md:w-[280px] max-md:h-[420px] select-none"
          >
            <div className="h-full rounded-[32px] p-[10px] bg-gradient-to-r from-[#2E5F5C] to-[#00A651] max-md:rounded-[24px] max-md:p-[8px]">
              <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-r from-[#2E5F5C] to-[#00A651] max-md:rounded-xl">
                <div className="relative w-full h-[300px] max-md:h-[200px]">
                  <Image
                    src={workplace.image}
                    alt={workplace.title}
                    fill
                    className="object-cover"
                    priority
                    draggable={false}
                  />
                </div>
                <div className="p-6 max-md:p-4">
                  <h2 className="text-white text-2xl font-bold mb-3 text-center max-md:text-xl max-md:mb-2">
                    {workplace.title}
                  </h2>
                  <p className="text-white text-base leading-relaxed text-center max-md:text-sm max-md:leading-snug">
                    {workplace.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default WhereWeWork
