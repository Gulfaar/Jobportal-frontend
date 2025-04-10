"use client"

import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {  FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight  } from "react-icons/fa";


gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // default value

  useEffect(() => {
    const updateCardsPerView = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
  
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(3);
      } else {
        setCardsPerView(1);
      }
    };
  
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      gsap.fromTo(
        trackRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / cardsPerView));
    }, 3000);
    return () => clearInterval(interval);
  }, [cardsPerView]);

  const testimonials = [
    {
      title: "Amazing services",
      content: "Exceptional support and top-notch service. Highly recommend!",
      author: "Marco Kihn",
      role: "Happy Client",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      title: "Everything simple",
      content: "The process was seamless and efficient. Love it!",
      author: "Kristin Hester",
      role: "Happy Client",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      title: "Awesome experience!",
      content: "From start to finish, a delightful experience!",
      author: "Zion Cisneros",
      role: "Happy Client",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      title: "Awesome experience!",
      content: "From start to finish, a delightful experience!",
      author: "Zion Cisneros",
      role: "Happy Client",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      title: "Awesome experience!",
      content: "From start to finish, a delightful experience!",
      author: "Zion Cisneros",
      role: "Happy Client",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      title: "Awesome experience!",
      content: "From start to finish, a delightful experience!",
      author: "Zion Cisneros",
      role: "Happy Client",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      title: "Awesome experience!",
      content: "From start to finish, a delightful experience!",
      author: "Zion Cisneros",
      role: "Happy Client",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      title: "Awesome experience!",
      content: "From start to finish, a delightful experience!",
      author: "Zion Cisneros",
      role: "Happy Client",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      title: "Awesome experience!",
      content: "From start to finish, a delightful experience!",
      author: "Zion Cisneros",
      role: "Happy Client",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];
  const mobileTrackRef = useRef(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleNext = () => {
    const maxIndex = Math.ceil(testimonials.length / cardsPerView) - 1;
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : prevIndex
    );
  };

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center mt-6 px-6 py-16 w-full text-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/Testimonial.png')" }}
    >
      <h2 className="text-3xl font-bold">Testimonials from Our Customers</h2>
      <p className="mt-4 text-lg text-black max-w-2xl">
        Exceptional service and professionalism! The team understood our needs perfectly and delivered beyond our expectations.
      </p>
      {
        
        !isMobile ?(
          
         <div className="w-full flex justify-center items-center max-w-[78%] h-[350px]  mt-10 overflow-hidden">
          <button 
          onClick={handlePrev}
        
        className="absolute md:left-12  z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
      >
        <FaChevronLeft size={15} />
      </button>

      <div
        ref={trackRef}
        className="flex transition-transform ml-10 duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${(testimonials.length / cardsPerView) * 100}%`,
        }}
      >
        
        {Array.from({ length: Math.ceil(testimonials.length / cardsPerView) }).map((_, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3  w-full flex-shrink-0">
            {testimonials.slice(index * cardsPerView, (index + 1) * cardsPerView).map((testimonial, idx) => (
              <TestimonialCard key={idx} {...testimonial} />
            ))}
          </div>
        ))}
      </div>
      <button

      onClick={handleNext}
        className="absolute right-14 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
      >
        <FaChevronRight size={15} />
      </button>
    </div>
        ):(
          <div className="md:hidden relative w-full max-w-md mt-10 overflow-hidden">
  {/* Left Button */}
  <button 
    onClick={handlePrev}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
  >
    <FaChevronLeft size={5} />
  </button>

  {/* Carousel Track */}
  <div
    ref={mobileTrackRef}
    className="flex transition-transform  justify-center  items-center ml-3 md:ml-0 duration-500 ease-in-out"
    style={{
      transform: `translateX(-${currentIndex * 100}%)`,
      width: `${testimonials.length * 100}%`,
    }}
  >
    {testimonials.map((testimonial, index) => (
      <div key={index} className="w-full   flex-shrink-0 px-4">
        <TestimonialCard {...testimonial} />
      </div>
    ))}
  </div>

  {/* Right Button */}
  <button
    onClick={handleNext}
    className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700"
  >
    <FaChevronRight size={5} />
  </button>
</div>

        ) 
      }
      
    </section>

    
  );
};

export default TestimonialsSection;
