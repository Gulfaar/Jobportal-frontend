"use client";
import React from "react";
import { ArrowRightIcon } from "./Icons";

interface BlogCardProps {
  category: string;
  date: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ category, date, title }) => {
  return (
    <article className="p-4 rounded-xl shadow-sm">
      <div className="relative mb-6 rounded-3xl bg-zinc-100 h-[206px]">
        <img
          src="/bloghero.png"
          alt="Blog cover"
          className="object-cover w-full h-full rounded-3xl"/>
        {/* <div className="absolute px-5 py-2 font-semibold text-white bg-teal-800 rounded-xl left-[29px] top-[18px]">
          {category}
        </div> */}
      </div>
      <time
        className="block mb-8 font-semibold text-zinc-500"
        dateTime="2024-03-30"
      >
        {date}
      </time>
      <h3 className="mb-8 text-2xl font-semibold leading-8">{title}</h3>
      <a
        href="#"
        className="flex gap-3 items-center font-semibold text-teal-800"
        aria-label={`Read more about ${title}`}
      >
        <span>Read more</span>
        <ArrowRightIcon />
      </a>
    </article>
  );
};

export default BlogCard;
