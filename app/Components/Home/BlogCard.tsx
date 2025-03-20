import React from "react";

const BlogCard = () => {
  return (
    <article className="flex flex-col justify-center px-7 py-9 bg-white rounded-3xl max-md:px-5">
      <div className="flex overflow-hidden flex-col w-full bg-white">
        <div className="flex overflow-hidden relative flex-col items-start px-7 pt-5 pb-40 max-w-full text-base text-white whitespace-nowrap rounded-xl aspect-[1.252] w-[258px] max-md:px-5 max-md:pb-24 max-md:mr-0.5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff2566002481344aa3b1996efcb41941bf597e2a?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
            alt="Blog post thumbnail"
            className="object-cover absolute inset-0 size-full"
          />
          <span className="relative px-5 py-2 -mb-8 bg-teal-800 rounded-xl max-md:mb-2.5">
            News
          </span>
        </div>
        <div className="mt-6">
          <time className="text-base text-zinc-500">30 March 2024</time>
          <h3 className="mt-8 text-2xl leading-8 text-black">
            Revitalizing Workplace Morale: Innovative Tactics for Boosting
            Employee Engagement in 2024
          </h3>
        </div>
        <a
          href="#read-more"
          className="flex gap-3 self-start mt-6 text-base text-teal-800"
        >
          <span className="my-auto">Read more</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/421ca7acfbfce0736c29050a3aa0c42aab9ae547?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
            alt="Read more arrow"
            className="object-contain shrink-0 w-5 aspect-square"
          />
        </a>
      </div>
    </article>
  );
};

export default BlogCard;
