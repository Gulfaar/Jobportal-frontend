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
    <div className={`flex flex-col gap-4 ${className} max-md:text-center`}>
      <div className="flex items-center gap-6 max-md:flex-col max-md:items-center">
        <img
          src={imageSrc}
          className="object-contain shrink-0 self-start mt-1 aspect-square rounded-[100px] w-[70px] max-md:mx-auto"
          alt=""
          aria-hidden="true"
        />
        <h3 className="text-2xl font-semibold leading-tight text-neutral-950 max-md:max-w-full">
          {title}
        </h3>
      </div>
      <p className="self-start mt-1 text-base leading-7 max-md:max-w-full max-md:text-center max-md:mx-auto">
        {description}
      </p>
    </div>
  );
};

export default TargetAudience;