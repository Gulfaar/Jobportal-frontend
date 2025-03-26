"use client";
import React from "react";
import BlogHero from "./BlogHero";
import BlogSidebar from "./BlogSidebar";
import BlogGrid from "./BlogGrid";
import BlogFooter from "./BlogFooter";

const BlogPage: React.FC = () => {
  return (
    <main className="w-full bg-white min-h-[screen]">
      <BlogHero />

      <div className="flex gap-10 px-10 py-16 max-md:flex-col">
        <BlogSidebar />
        <BlogGrid />
      </div>

      <BlogFooter />
    </main>
  );
};

export default BlogPage;
