import React from "react";

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="px-7 py-3.5 max-w-full tracking-tight bg-yellow-400 rounded-[200px] w-[137px] max-md:px-5">
        Step {step}
      </div>
      <h3 className="self-stretch mt-7 text-center">{title}</h3>
      <p className="mt-6 text-base leading-7 text-center text-black">
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;
