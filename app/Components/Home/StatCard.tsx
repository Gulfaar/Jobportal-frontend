import React from "react";

interface StatCardProps {
  number: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, title, description }) => {
  return (
    <div className="w-full md:w-1/3 flex flex-col items-start text-center md:text-left">
      <h3 className="text-3xl font-bold text-teal-900">{number}</h3>
      <h4 className="mt-2 text-xl font-semibold text-black">{title}</h4>
      {/* Truncates text and ensures same height */}
      <p className="mt-2 text-gray-600 text-sm line-clamp-3 min-h-[60px]">
        {description}
      </p>
    </div>
  );
};


export default StatCard;
