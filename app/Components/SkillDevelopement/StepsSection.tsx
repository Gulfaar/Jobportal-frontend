import React from "react";

const StepsSection: React.FC = () => {
  const steps = [
    {
      step: "Step 01",
      number: "1",
      title: "Register For A Course",
      description: "Choose from our extensive list of training programs."
    },  
    {
      step: "Step 02",
      number: "2",
      title: "Learn With AI & Experts",
      description: "Industry professionals and AI-powered modules guide you through interactive sessions."
    },
    {
      step: "Step 03",
      number: "3",
      title: "Practice With AI Tools",
      description: "AI-based assessments and mock tests refine your skills."
    },
    {
      step: "Step 04",
      number: "4",
      title: "Get Certified",
      description: "Receive a recognized certification upon successful completion."
    },
    {
      step: "Step 05",
      number: "5",
      title: "Job Assistance",
      description: "Connect with top recruiters and unlock career opportunities."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4">
        {steps.map((item, index) => (
          <div key={index} className="text-center max-w-xs">
            <div className=" text-black font-bold py-1 px-3 rounded-full inline-block mb-2">
              {item.step}
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#2E5F5C] text-white font-bold text-lg rounded-full mx-auto mb-2">
              {item.number}
            </div>
            <h3 className="text-lg text-black inline-flex whitespace-nowrap font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
