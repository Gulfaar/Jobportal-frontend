import React from "react";

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`flex overflow-hidden flex-col justify-center  grow items-center px-7 pt-10 pb-6 w-full text-2xl rounded-3xl shadow-[0px_0px_2px_rgba(255,255,255,1)] max-md:px-5 max-md:mt-5 ${className}`}
    >
      <img
        src={imageSrc}
        className="object-contain w-20 aspect-square rounded-[100px]"
        alt={title}
      />
      <h3 className="flex justify-center items-center mt-12 font-semibold text-[18px] leading-tight text-black max-md:mt-10">
        {title}
      </h3>
      <p className="mt-12 leading-7 text-center text-[18px] text-[#7E7E7E] max-md:mt-2">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
