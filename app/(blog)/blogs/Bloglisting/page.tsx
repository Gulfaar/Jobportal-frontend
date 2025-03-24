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
      <Header title="Blogs"
      subtitle="Explore a wide range of explore our blogs" />

     
        <BlogSidebar />
        <BlogGrid />
      
      <Footer/>
    </main>
  );
};

export default BlogPage;
