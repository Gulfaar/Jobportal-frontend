import * as React from "react";

interface ExamCategoryContentProps {
  items: string[];
  isVisible: boolean;
}

const ExamCategoryContent: React.FC<ExamCategoryContentProps> = ({
  items,
  isVisible,
}) => {
  return (
    <div
      className={`w-[33%] max-md:ml-0 max-md:w-full ${isVisible ? "" : "hidden"}`}
      role="tabpanel"
    >
      <div className="flex flex-col grow items-start pt-20 pr-3.5 pb-8 pl-14 text-xl text-black border border-solid border-black border-opacity-10 shadow-[0px_0px_9px_rgba(0,0,0,0.25)] max-md:pl-5 max-md:mt-10">
        {items.map((item, index) => (
          <p
            key={index}
            className={`${index > 0 ? "mt-8" : ""} self-stretch mr-7 max-md:mr-2.5`}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ExamCategoryContent;
