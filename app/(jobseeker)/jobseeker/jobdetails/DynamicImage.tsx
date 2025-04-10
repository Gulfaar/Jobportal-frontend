// app/jobseeker/jobdetails/DynamicImage.tsx
"use client";

import React from "react";
import Image from "next/image";

interface DynamicImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const DynamicImage: React.FC<DynamicImageProps> = ({ src, alt, width, height, className }) => {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log("Image failed to load:", (e.target as HTMLImageElement).src);
    // Optionally set a fallback image
    // (e.target as HTMLImageElement).src = "/fallback-image.png";
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
    />
  );
};

export default DynamicImage;