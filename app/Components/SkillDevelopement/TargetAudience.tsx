import React from "react";

interface TargetAudienceProps {
  imageSrc: string;
  title: string;
  description: string;
  className?: string;
}

const TargetAudience: React.FC<TargetAudienceProps> = ({
  imageSrc,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap gap-6 ${className}`}>
      <img
        src={imageSrc}
        className="object-contain shrink-0 self-start mt-1 aspect-square rounded-[100px] w-[70px]"
        alt=""
        aria-hidden="true"
      />
      <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
        <h3 className="text-2xl font-semibold leading-tight max-md:max-w-full">
          {title}
        </h3>
        <p className="self-start mt-6 text-base leading-7 max-md:max-w-full">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TargetAudience;
