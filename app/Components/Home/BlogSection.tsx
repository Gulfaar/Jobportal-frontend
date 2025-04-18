import React from "react";
// import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section className="mt-16 px-10 py-3   max-md:mt-10">
  {/* Title */}
  <h2 className="text-center md:text-4xl font-semibold text-black text-3xl ">
    News and Blog
  </h2>

  {/* Subtitle & View All */}
  <div className="flex justify-between  md:pl-60 mt-4 max-w-4xl mx-auto max-md:flex-col max-md:items-center">
    <p className="text-black  text-center text-lg max-md:text-base">
      Stay informed with the latest updates, trends, and insights...
    </p>
    <a href="#view-all" className="hidden md:block items-end font-bold text-teal-800 max-md:mt-2">
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
    {/* <div className="flex justify-center  items-center   px-8  gap-6 md:gap-10 mb-10 max-w-5xl mx-auto max-md:flex-col max-md:w-full">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div> */}

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
