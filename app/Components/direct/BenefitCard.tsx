import Image from "next/image";
import React from "react";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex gap-5 items-start">
       <Image
                src="/langbulleticon.svg"
                alt="Bullet Icon"
                height={10}
                width={10}
                className="w-4 h-4 mt-1 rounded-full"
              />
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-lg text-white opacity-90">{description}</p>
      </div>
    </article>
  );
};

export default BenefitCard;
