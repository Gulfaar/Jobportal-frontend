"use client";
import React from "react";

const BlogHero: React.FC = () => {
  return (
    <section
      className="relative w-full bg-[center] h-[381px]"
      style={{ backgroundImage: "url('/images/blog-hero-bg.jpg')" }}
      aria-labelledby="blog-hero-title"
    >
      <div className="flex absolute inset-0 flex-col justify-center items-center text-center">
        <h1
          id="blog-hero-title"
          className="mb-2 text-5xl font-semibold text-white"
        >
          BLOGS
        </h1>
        <p className="text-2xl text-white">
          Explore a wide range of explore our blogs
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
