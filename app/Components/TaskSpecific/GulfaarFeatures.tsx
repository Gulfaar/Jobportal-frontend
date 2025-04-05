'use client'
import Lottie from "lottie-react";
import { ChevronRight } from "lucide-react";
import TaskAnimation from '../../../assets/Task-Animation.json'

const GulfaarFeatures = () => {
  const features = [
    {
      title: "Verified & Ready-To-Deploy Workforce",
      description: "Background-checked, trained professionals available instantly.",
    },
    {
      title: "AI-Driven Job Matching",
      description: "Find the right expert for the right job, in seconds.",
    },
    {
      title: "Real-Time Workforce Monitoring",
      description: "Track performance, attendance, and task completion effortlessly.",
    },
    {
      title: "Seamless Communication",
      description: "Connect with workers via WhatsApp, SMS, and in-app notifications.",
    },
    {
      title: "Hassle-Free Payroll & Compliance",
      description: "We manage salary processing, tax compliance, and worker benefits.",
    },
    {
      title: "Scalable, Cost-Effective, & Efficient",
      description: "Hire for short-term tasks, long-term projects, or specialized roles.",
    },
  ];

  return (
    <section className="py-16 px-6 flex justify-center w-full bg-white relative overflow-hidden">
      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-center text-2xl font-bold text-[#0B1C3F] mb-12">
          Why Choose Gulfaar’s AI-Powered Task-Specific Experts?
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 border-b border-gray-300 max-w-3xl"
            >
              <div className="bg-[#2E5F5C] p-3 rounded-full">
                <ChevronRight size={20} className="text-[#ffff]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0B1C3F]">{feature.title}</h3>
                <p className="text-gray-600 mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Circle Positioned */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[600px]">
        {/* <img src="/bgCircle.svg" alt="Background Circle" className="w-full h-auto" /> */}
              <Lottie 
                animationData={TaskAnimation} 
                loop={true} 
                className="object-contain grow gap-2.5 py-2.5 w-full rounded-3xl aspect-[1.07] max-md:mt-10 max-md:max-w-full"
              />
      </div>
    </section>
  );
};

export default GulfaarFeatures;
