import React from "react";

const BlogCard = () => {
  return (
    <article className="w-[260px] bg-white rounded-xl shadow-md p-4">
      <div className="relative rounded-lg overflow-hidden">
        {/* Image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff2566002481344aa3b1996efcb41941bf597e2a"
          alt="Blog post thumbnail"
          className="object-cover w-full h-[160px]"
        />
        {/* News Label */}
        {/* <span className="absolute top-3 left-3 bg-teal-800 text-white text-sm px-3 py-1 rounded-md">
          News
        </span> */}
      </div>

      {/* Blog Details */}
      <div className="mt-4">
        <time className="text-sm text-gray-500">30 March 2024</time>
        <h3 className="mt-2 text-lg font-semibold text-black line-clamp-2">
          Revitalizing Workplace Morale: Innovative Tactics for Boosting Employee Engagement in 2024
        </h3>
      </div>

      {/* Read More Link */}
      <a href="#read-more" className="flex items-center gap-2 mt-4 text-teal-800 font-medium">
        Read more
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/421ca7acfbfce0736c29050a3aa0c42aab9ae547"
          alt="Read more arrow"
          className="w-4"
        />
      </a>
    </article>
  );
};

export default BlogCard;
