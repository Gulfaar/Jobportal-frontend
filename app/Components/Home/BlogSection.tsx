import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section className="mt-16 px-6 max-md:mt-10">
      {/* Title */}
      <h2 className="text-center text-4xl font-semibold text-black max-md:text-3xl">
        News and Blog
      </h2>

      {/* Subtitle & View All */}
      <div className="flex justify-between items-center mt-4 max-w-4xl mx-auto">
        <p className=" flex justify-center items-center md:pl-65 text-gray-600 text-center text-lg max-md:text-base">
          Stay informed with the latest updates, trends, and insights...
        </p>
        <a href="#view-all" className="font-bold text-teal-800">
          View all
        </a>
      </div>

      {/* Blog Cards Carousel */}
      <div className="relative flex items-center justify-center mt-10">
        {/* Left Button */}
        <button className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1944251e3bb80c3c11396dfeff5daeef5143a85e"
            alt="Left arrow"
            className="w-6"
          />
        </button>

        {/* Blog Cards */}
        <div className="flex gap-4 overflow-hidden mb-10 max-w-5xl mx-auto">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        {/* Right Button */}
        <button className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fa3f780e6aa34568e5c6625822f79507a471f55"
            alt="Right arrow"
            className="w-6"
          />
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
