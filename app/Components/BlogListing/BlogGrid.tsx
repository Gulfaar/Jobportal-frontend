"use client";
import React from "react";
import BlogCard from "./BlogCard";

const BlogGrid: React.FC = () => {
  // Sample blog data - in a real application, this would come from an API or props
  const blogs = Array(9).fill({
    category: "News",
    date: "30 March 2024",
    title:
      "Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024",
  });

  return (
    <section className="flex-1" aria-labelledby="blog-main-title">
      <h2
        id="blog-main-title"
        className="mb-5 md:text-[48px] font-semibold text-center"
      >
        News and Blog
      </h2>
      <p className="mb-10 text-[24px] text-center">
        Explore the latest insights, trends, and updates on AI, technology, and
        development
      </p>

      <div className="grid grid-cols-3 gap-7 max-md:grid-cols-2 max-sm:grid-cols-1">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            category={blog.category}
            date={blog.date}
            title={blog.title}
          />
        ))}
      </div>

      <nav aria-label="Pagination" className="flex gap-2 justify-center mt-10">
        <button
          className="flex items-center justify-center w-8 h-8 text-white bg-teal-800 rounded"
          aria-current="page"
          aria-label="Page 1"
        >
          1
        </button>
        <button
          className="flex items-center justify-center w-8 h-8 text-teal-800 rounded border border-teal-800"
          aria-label="Page 2"
        >
          2
        </button>
        <button
          className="flex items-center justify-center w-8 h-8 text-teal-800 rounded border border-teal-800"
          aria-label="Page 3"
        >
          3
        </button>
      </nav>
    </section>
  );
};

export default BlogGrid;
