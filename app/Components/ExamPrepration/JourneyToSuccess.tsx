import { FC } from "react";
import {
  BookOpenIcon,
  UserGroupIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { JSX } from "react/jsx-runtime";

interface StepCardProps {
  step: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

const StepCard: FC<StepCardProps> = ({ step, icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center w-full h-72 min-w-[220px]">
      <div className="bg-[#2E5F5C] p-4 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-[#2E5F5C] uppercase mb-2">{step}</h3>
      <h4 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 h-[3rem]">
        {title}
      </h4>
      <p className="text-gray-600 text-sm px-1 leading-relaxed line-clamp-4">
        {description}
      </p>
    </div>
  );
};

const JourneySection: FC = () => {
  const steps = [
    {
      step: "STEP 01",
      icon: <BookOpenIcon className="h-6 w-6 text-white" />, 
      title: "Select Your Exam",
      description: "Choose the test that aligns with your career or education goals.",
    },
    {
      step: "STEP 02",
      icon: <UserGroupIcon className="h-6 w-6 text-white" />,
      title: "Learn with AI & Experts",
      description: "Get guidance from certified trainers and AI-driven modules.",
    },
    {
      step: "STEP 03",
      icon: <ChartBarIcon className="h-6 w-6 text-white" />,
      title: "Practice with AI Assessments",
      description: "Take smart tests tailored to your learning progress.",
    },
    {
      step: "STEP 04",
      icon: <ClipboardDocumentListIcon className="h-6 w-6 text-white" />,
      title: "Mock Tests & Feedback",
      description: "AI-generated simulations and real-time analysis.",
    },
    {
      step: "STEP 05",
      icon: <AcademicCapIcon className="h-6 w-6 text-white" />,
      title: "Ace the Exam",
      description: "Succeed in your exam and advance your career!",
    },
  ];

  return (
    <section className="py-16 w-full bg-gray-50 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#2E5F5C] text-sm font-semibold uppercase tracking-wider">
            PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Your Journey to Success
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our streamlined process ensures you get the most effective preparation for your exams.
          </p>
        </div>
        <div className="flex flex-nowrap md:justify-center gap-6 pb-4">
          {steps.map((step, index) => (
            <div key={index} className="flex-shrink-0 w-[240px]">
              <StepCard
                step={step.step}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
  
export default JourneySection;