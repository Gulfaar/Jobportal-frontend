"use client";
import React from "react";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <article className="p-6 sm:p-8 bg-white rounded-3xl w-full max-w-[300px] mx-auto">
      <div className="flex justify-center items-center mx-auto mb-6 sm:mb-8 w-16 h-16 sm:w-20 sm:h-20 bg-teal-800 rounded-full">
        {icon.startsWith("<svg") ? (
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: icon }}
          />
        ) : (
          <i className={`${icon} text-3xl sm:text-4xl text-white`} />
        )}
      </div>
      <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-black">{title}</h3>
      <p className="text-base sm:text-lg text-black">{description}</p>
    </article>
  );
};

export default BenefitCard;