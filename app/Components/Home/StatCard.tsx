import React from "react";

interface StatCardProps {
  number: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, title, description }) => {
  return (
    <div className="min-w-60 w-[306px]">
      <h3 className="text-4xl font-bold text-teal-800">{number}</h3>
      <h4 className="mt-7 text-2xl font-semibold text-black">{title}</h4>
      <p className="mt-7 text-base leading-6 text-black">{description}</p>
    </div>
  );
};

export default StatCard;
