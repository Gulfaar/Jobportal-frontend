import React from "react";

interface WorkStepProps {
  icon: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

const WorkStep: React.FC<WorkStepProps> = ({
  icon,
  title,
  description,
  highlighted = false,
}) => {
  return (
    <div className="flex flex-col items-center w-[250px] text-center">
      <div className="flex items-center justify-center w-[60px] h-[60px] bg-white border border-gray-300 rounded-full shadow-md">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default WorkStep;
