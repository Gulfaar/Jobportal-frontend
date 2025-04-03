"use client";
import React from "react";

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <article className="flex gap-8 items-center">
      <div className="flex justify-center items-center bg-teal-800 rounded-full h-[70px] w-[70px]">
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="128:736" layer-name="Chevron right" width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 35px; height: 35px"> <path d="M13.125 27.2207L21.875 18.4707L13.125 9.7207" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
          }}
        />
      </div>
      <div>
        <h3 className="mb-2.5 text-2xl font-semibold text-indigo-950">
          {title}
        </h3>
        <p className="text-xl text-black">{description}</p>
      </div>
    </article>
  );
};

export default FeatureItem;
