"use client";
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
    <article className="p-8 text-center bg-white rounded-4xl w-[250px] max-sm:w-full">
      <div className="flex justify-center items-center mx-auto mt-0 mb-8 w-20 h-20 bg-teal-800 rounded-full">
        {icon.startsWith("<svg") || icon.startsWith("﮹") ? (
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        ) : (
          <i className={`${icon} text-4xl text-white h-[35px] w-[35px]`} />
        )}
      </div>
      <h3 className="mb-5 text-2xl font-semibold text-black">{title}</h3>
      <p className="text-xl text-black">{description}</p>
    </article>
  );
};

export default BenefitCard;
