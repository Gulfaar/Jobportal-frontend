import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section className="mt-16 max-md:mt-10">
      <h2 className="self-center ml-4 text-5xl font-semibold text-center text-black max-md:text-4xl">
        News and Blog
      </h2>
      <div className="flex flex-wrap gap-5 justify-between self-end mt-5 mr-16 max-w-full text-2xl w-[952px] max-md:mr-2.5">
        <p className="leading-none text-black text-ellipsis max-md:max-w-full">
          Stay informed with the latest updates, trends, and insights through
          our blog, where we share valuable content to help you stay ahead in
          your industry. Whether it's expert advice, success stories, or new
          product launches, our blog is your go-to resource for all things
          related to innovation
        </p>
        <a href="#view-all" className="self-start font-bold text-teal-800">
          View all
        </a>
      </div>
      <div className="flex flex-wrap gap-5 justify-between self-center mt-11 ml-7 w-full font-semibold max-w-[1332px] max-md:mt-10 max-md:max-w-full">
        <button aria-label="Previous blog post">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1944251e3bb80c3c11396dfeff5daeef5143a85e?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
            alt="Left arrow"
            className="object-contain shrink-0 my-auto aspect-[0.97] w-[34px]"
          />
        </button>

        <BlogCard />
        <BlogCard />
        <BlogCard />

        <button aria-label="Next blog post">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fa3f780e6aa34568e5c6625822f79507a471f55?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
            alt="Right arrow"
            className="object-contain shrink-0 my-auto w-8 aspect-[0.97]"
          />
        </button>
      </div>
    </section>
  );
};

export default BlogSection;
