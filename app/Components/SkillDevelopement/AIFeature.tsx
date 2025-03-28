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
    <div className={`flex flex-wrap gap-6 ${className}`}>
      <img
        src={imageSrc}
        className="object-contain shrink-0 self-start aspect-square rounded-[100px] w-[70px]"
        alt={title}
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <h3 className="self-start text-2xl font-semibold leading-tight text-indigo-950">
          {title}
        </h3>
        <p className="mt-7 text-xl leading-7 text-black max-md:max-w-full">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AIFeature;
