import { FC, JSX } from "react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

interface EnrollCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const EnrollCard: FC<EnrollCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-start space-x-4">
        {/* Icon Container */}
        <div className="flex-shrink-0 bg-[#2E5F5C] p-3 rounded-2xl">
          {icon}
        </div>
        {/* Content */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

const EnrollSection: FC = () => {
  const cards: EnrollCardProps[] = [
    {
      icon: <AcademicCapIcon className="h-6 w-6 text-white" />,
      title: "Students",
      description:
        "Preparing for international university admissions and seeking to enhance their academic credentials.",
    },
    {
      icon: <BriefcaseIcon className="h-6 w-6 text-white" />,
      title: "Professionals",
      description:
        "Aiming to qualify for overseas job opportunities and advance their career in global markets.",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6 text-white" />,
      title: "Skilled Workers",
      description:
        "Nurses, engineers, and others needing certification exams for international recognition and practice.",
    },
    {
      icon: <ChartBarIcon className="h-6 w-6 text-white" />,
      title: "Job Seekers",
      description:
        "Individuals appearing for corporate or government aptitude tests to secure competitive positions.",
    },
  ];

  return (
    <section className="bg-[#2E5F5C] py-12 w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">
            Who Should Enroll?
          </h2>
          <p className="text-white mt-2">
            Our programs are designed for individuals seeking to advance their
            education and career globally.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <EnrollCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrollSection;

