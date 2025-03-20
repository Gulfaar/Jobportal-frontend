import React from "react";

interface LocationBadgeProps {
  imageSrc: string;
  location: string;
  iconBg?: boolean;
}

const LocationBadge: React.FC<LocationBadgeProps> = ({
  imageSrc,
  location,
  iconBg = false,
}) => {
  return (
    <div className="flex flex-col text-xs text-white whitespace-nowrap">
      {iconBg ? (
        <div className="flex overflow-hidden gap-2.5 justify-center items-center px-2.5 bg-white h-[60px] min-h-[60px] rounded-[178px] w-[60px]">
          <img
            src={imageSrc}
            alt={`${location} icon`}
            className="object-contain self-stretch my-auto w-10 aspect-square"
          />
        </div>
      ) : (
        <img
          src={imageSrc}
          alt={`${location} icon`}
          className="object-contain aspect-square rounded-[178px] w-[60px]"
        />
      )}
      <div className="self-center mt-7">{location}</div>
    </div>
  );
};

export default LocationBadge;
