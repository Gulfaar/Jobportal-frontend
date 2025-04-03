import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useScrollAnimation from "@/app/Hooks/useScrollAnimation";

const HowItWorksSection = () => {
  const [isMobile, setIsMobile] = useState(false);


  const { ref, scaleProgress, opacityProgress } = useScrollAnimation();

// const ref = useRef<HTMLElement>(null)  
//   const {scrollYProgress} = useScroll({
//     target:ref,
//     offset:["0 1","1.33 1 "],
//   });

//   const scaleprogress = useTransform(scrollYProgress,[0,1],[0.8,1]);
//   const opacityProgress = useTransform(scrollYProgress,[0,1],[0.6,1]);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const steps = [
    {
      icon: "/usericon.png",
      title: "Sign Up & Optimize Resume",
      description:
        "Register, create your profile & upload your resume. AI enhances your resume for better job visibility.",
    },
    {
      icon: "/green.png",
      title: "Find Jobs & Identify Skill Gaps",
      description:
        "AI job search matches you with the best roles. Detects knowledge/tech gaps & suggests upskilling.",
    },
    {
      icon: "/searchicon.png",
      title: "AI Screening & Pre-Interview",
      description:
        "Take AI-driven tests & pre-video interviews. Get an AI match score for faster shortlisting.",
    },
    {
      icon: "/circle.png",
      title: "Get Hired & Grow",
      description:
        "Receive interview invites via WhatsApp, SMS, email & notification. Track applications, accept offers & upskill.",
    },
  ];

  return (
    <motion.section ref={ref} 
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="flex flex-col items-center text-black bg-white px-6 py-16 w-full">
      <h2 className="text-4xl font-bold text-center mb-16">HOW GULFAAR WORKS</h2>
      <div className={`relative w-full ${isMobile ? "flex flex-col items-center" : "flex justify-between"}`}>
        {steps.map((step, index) => (
          <div key={index} className={`relative flex flex-col items-center text-center ${isMobile ? "mb-10" : "w-1/3"}`}>
            <div className="relative flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md border border-gray-300">
              <img src={step.icon} alt={step.title} className="w-10 h-10" />
            </div>

            {index < steps.length - 1 && (
              <div
                className={`absolute ${isMobile ? "top-full mt-4" : "top-1/4 transform -translate-y-1/2 left-full"}`}
              >
                <svg
                  width={isMobile ? "2" : "100"}
                  height={isMobile ? "50" : "50"}
                  viewBox="0 0 100 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={isMobile ? "M1 0 V50" : "M0 25 Q50 0 100 25"}
                    stroke="#4A90E2"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                    fill="transparent"
                  />
                  {isMobile ? (
                    <polygon points="1,55 6,40 0,30" fill="#4A90E2" />
                  ) : (
                    <polygon points="100,25 90,23 95,22, 90,30 " fill="#4A90E2" />
                  )}
                </svg>
              </div>
            )}

            <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 max-w-64">{step.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default HowItWorksSection;