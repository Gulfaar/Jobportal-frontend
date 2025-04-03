import * as React from "react";

interface ExamCategoryTabProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const ExamCategoryTab: React.FC<ExamCategoryTabProps> = ({
  title,
  isActive,
  onClick,
}) => {
  return (
    <button
      className="px-8 py-10 bg-teal-800 rounded-[30px_30px_0px_0px] max-md:px-5"
      onClick={onClick}
      aria-selected={isActive}
      role="tab"
    >
      {title}
    </button>
  );
};

export default ExamCategoryTab;
