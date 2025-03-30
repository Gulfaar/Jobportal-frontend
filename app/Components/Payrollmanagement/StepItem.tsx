import React from "react";

interface StepItemProps {
  title: string;
  description: string;
}

const StepItem: React.FC<StepItemProps> = ({ title, description }) => {
  return (
    <div>
      <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>
      {description.split("\n").map((line, index) => (
        <p key={index} className="mb-2 text-gray-700 leading-relaxed">
          {line}
        </p>
      ))}
    </div>
  );
};

export default StepItem;
