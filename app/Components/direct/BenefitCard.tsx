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
      <div className="flex justify-center items-center rounded-xl bg-white bg-opacity-10 flex-[shrink] h-[60px] w-[60px]">
        <i className={`${icon} text-3xl text-white`} aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-xl text-white">{description}</p>
      </div>
    </article>
  );
};

export default BenefitCard;
