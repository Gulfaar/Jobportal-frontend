import * as React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <article className="flex flex-col px-8 pt-10 pb-4 text-black rounded-md border border-solid border-black border-opacity-10 h-full max-md:px-5 max-md:mt-5 max-md:max-w-full">
      <h3 className="self-center text-2xl font-semibold text-center">
        {title}
      </h3>
      <p className="mt-10 text-xl">{description}</p>
    </article>
  );
};

export default FeatureCard;
