"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const WhereWeWork = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollPositionRef.current += 1;
      
      if (scrollPositionRef.current >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollPositionRef.current = 0;
      }
      
      scrollContainer.scrollLeft = scrollPositionRef.current;
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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
    <div className="px-15 py-16">
      <h1 className="text-[#2E5F5C] text-5xl font-semibold mb-12">Where We Work</h1>

      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
      >
        {workplaces.map((workplace, index) => (
          <div key={index} className="w-[380px] h-[520px] flex-shrink-0">
            <div className="h-full rounded-[32px] p-[10px] bg-gradient-to-r from-[#2E5F5C] to-[#00A651]">
              <div className="h-full rounded-2xl overflow-hidden bg-gradient-to-r from-[#2E5F5C] to-[#00A651]">
                <div className="relative w-full h-[300px]">
                  <Image
                    src={workplace.image}
                    alt={workplace.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-white text-2xl font-bold mb-3 text-center">
                    {workplace.title}
                  </h2>
                  <p className="text-white text-base leading-relaxed text-center">
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
