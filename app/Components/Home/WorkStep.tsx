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
    <div className="w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-center p-6 w-full rounded-xl max-md:px-5 max-md:mt-6">
        <div
          className={`flex gap-2.5 items-center p-5 ${
            highlighted ? "bg-teal-800" : "bg-white"
          } h-[72px] rounded-[80px] w-[72px]`}
        >
          <img
            src={icon}
            alt={`${title} icon`}
            className="object-contain w-8 aspect-square"
          />
        </div>
        <div className="flex flex-col items-start mt-6 max-w-full text-center w-[264px]">
          <h3 className="text-lg font-medium leading-loose text-zinc-900">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-5 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkStep;
