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
  <div className="flex justify-between items-center md:pl-60 mt-4 max-w-4xl mx-auto max-md:flex-col max-md:items-center">
    <p className="text-gray-600 text-center text-lg max-md:text-base">
      Stay informed with the latest updates, trends, and insights...
    </p>
    <a href="#view-all" className="font-bold text-teal-800 max-md:mt-2">
      View all
    </a>
  </div>

  {/* Blog Cards Section */}
  <div className="relative flex flex-col items-center justify-center mt-10 max-md:w-full">
    
    {/* Left Button - Hide on Mobile */}
    <button className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md max-md:hidden">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1944251e3bb80c3c11396dfeff5daeef5143a85e"
        alt="Left arrow"
        className="w-6"
      />
    </button>

    {/* Blog Cards */}
    <div className="flex  overflow-hidden  md:gap-15 mb-10 max-w-5xl mx-auto max-md:flex-col max-md:w-full">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>

    {/* Right Button - Hide on Mobile */}
    <button className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md max-md:hidden">
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
