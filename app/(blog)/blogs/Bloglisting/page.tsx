"use client";
import BlogFooter from "@/app/Components/BlogListing/BlogFooter";
import BlogGrid from "@/app/Components/BlogListing/BlogGrid";
import BlogHero from "@/app/Components/BlogListing/BlogHero";
import BlogSidebar from "@/app/Components/BlogListing/BlogSidebar";
import Header from "@/app/Components/Header/Header";
import Footer from "@/app/Components/Home/Footer";
import React from "react";


const BlogPage: React.FC = () => {
  return (
    <main className="w-full bg-white min-h-[screen]">
      <Header/>

      <div className="flex gap-10 px-10 py-16 max-md:flex-col">
        <BlogSidebar />
        <BlogGrid />
      </div>

      <Footer/>
    </main>
  );
};

export default BlogPage;
