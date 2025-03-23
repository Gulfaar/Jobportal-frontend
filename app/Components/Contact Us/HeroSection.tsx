'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`relative flex items-center justify-center h-[500px] text-center text-white bg-cover bg-center transition-opacity duration-500 ${scrolled ? "opacity-80" : "opacity-100"}`}
    >
      <div className="absolute inset-0 bg-opacity-50 h-[500px]">
        <Image
          src="/Banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="h-[500px] md:h-full"
        />
      </div>
      <div className="relative z-10 px-4 mb-76" style={{ marginTop: '361px' }}>
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Have questions about hiring, job opportunities, workforce solutions, or partnerships? Get in touch with Gulfaar—our team is ready to assist you.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

