import React from "react";

interface AIFeatureProps {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
}

const AIFeature: React.FC<AIFeatureProps> = ({
  imageSrc,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`flex gap-4 items-start ${className} max-md:flex-col max-md:text-left`}>
      <img
        src={imageSrc}
        className="object-contain rounded-full w-[70px] h-[70px] shrink-0"
        alt={title}
      />
      <div className="flex flex-col text-left max-md:mt-2">
        <h3 className="text-2xl font-semibold text-indigo-950">{title}</h3>
        <p className="mt-3 text-xl text-black">{description}</p>
      </div>
    </div>
  );
};

export default AIFeature;
