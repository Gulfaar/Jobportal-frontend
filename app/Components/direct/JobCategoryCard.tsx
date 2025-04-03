"use client";
import React from "react";

interface JobCategoryCardProps {
  icon: string;
  title: string;
  description: string;
  svg?: string;
}

const JobCategoryCard: React.FC<JobCategoryCardProps> = ({
  icon,
  title,
  description,
  svg,
}) => {
  return (
    <article className="flex gap-5 items-start">
      <div className="flex justify-center items-center bg-teal-800 rounded-xl flex-[shrink] h-[60px] w-[60px]">
        {svg ? (
          <div dangerouslySetInnerHTML={{ __html: svg }} />
        ) : (
          <i className={`${icon} text-3xl text-white`} aria-hidden="true" />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-xl">{description}</p>
      </div>
    </article>
  );
};

export default JobCategoryCard;
