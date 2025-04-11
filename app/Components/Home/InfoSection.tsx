import React from "react";
import StatCard from "./StatCard";
import useScrollAnimation from "@/app/Hooks/useScrollAnimation";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Animationimage from "../../../assets/animation.json";
import Link from "next/link";

const InfoSection = () => {
  const { ref, scaleProgress, opacityProgress } = useScrollAnimation();

  const stats = [
    {
      number: "18K+",
      title: "Clients worldwide",
      description:
        "We proudly serve clients worldwide, providing high-quality solutions tailored to their needs. Our commitment to excellence, innovation, and customer satisfaction has earned us the trust of businesses across industries.",
    },
    {
      number: "50M+",
      title: "Active resume",
      description:
        "An active resume highlights your skills, experience, and achievements in an engaging way, making you stand out to employers. It focuses on your professional journey, emphasizing accomplishments and expertise",
    },
    {
      number: "20+",
      title: "Years Experience",
      description:
        "With years of experience, our company has built a strong foundation of expertise, innovation, and customer-focused solutions. We've successfully delivered projects across various sectors, consistently exceeding client expectations",
    },
  ];

  return (
    <motion.section 

    ref={ref}
    style={{
      scale: scaleProgress,
      opacity: opacityProgress,
    }}
    
    className="overflow-hidden py-0 md:px-20 md:py-5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="w-full max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
        <div className="md:w-1.5 lg:w-2xl max-md:ml-0">
      <Lottie 
        animationData={Animationimage} 
        loop={true} 
        className="object-contain grow gap-2.5 py-2.5 w-full rounded-3xl aspect-[1.07] max-md:mt-5 max-md:max-w-full"
      />
    </div>
          <div className="flex ml-5 justify-center items-center md:w-6/10 md:py-1    max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full font-semibold   max-md:max-w-full">
              <h2 className="max-w-full text-4xl text-black w-[605px] max-md:max-w-full">
                Empowering Workforce, Connecting Businesses, Building Global
                Success
              </h2>
              <p className="leading-7 font-medium text-black mt-10 text-[15px] max-md:mt-20 max-md:max-w-full md:text-[20px]">
                At Gulfaar, we are more than just a recruitment agency—we are a
                global workforce solutions provider committed to bridging the
                gap between talent and opportunity. With our AI-driven hiring
                platform, advanced workforce solutions, and industry-leading
                training programs, we help businesses find the right people and
                professionals build successful careers across the world
              </p>
              <div className="flex gap-6 items-center self-start mt-16 text-base max-md:mt-10">
                <Link
                  href="/jobseeker/joblisting"
                  className="self-stretch my-auto text-white capitalize w-[122px]"
                >
                  <div className="flex px-3 py-4 rounded-lg bg-slate-800 justify-center items-center">
                    Search Job
                  </div>
                </Link>
                <a
                  href="#learn-more"
                  className="self-stretch my-auto text-teal-800 underline"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:flex-row max-md:flex-col justify-between items-start gap-5 md:gap-7 mt-5 min-h-full max-md:mt-2 max-md:max-w-full py-5 w-full">
  {stats.map((stat, index) => (
    <StatCard
      key={index}
      number={stat.number}
      title={stat.title}
      description={stat.description} // Pass as a string
    />
  ))}
</div>

    </motion.section>
  );
};

export default InfoSection;