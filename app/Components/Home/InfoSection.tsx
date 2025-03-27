import React from "react";
import StatCard from "./StatCard";

const InfoSection = () => {
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
    <section className="overflow-hidden px-20 py-16 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="w-full max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a931bcd0a3f2d9b102765f1b8874e6d68071708?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
              alt="Company overview"
              className="object-contain grow gap-2.5 py-2.5 w-full rounded-3xl aspect-[1.07] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto w-full font-semibold max-md:mt-10 max-md:max-w-full">
              <h2 className="max-w-full text-4xl text-black w-[605px] max-md:max-w-full">
                Empowering Workforce, Connecting Businesses, Building Global
                Success
              </h2>
              <p className="mt-16 text-[20px] leading-7 font-normal text-black max-md:mt-10 max-md:max-w-full">
                At Gulfaar, we are more than just a recruitment agency—we are a
                global workforce solutions provider committed to bridging the
                gap between talent and opportunity. With our AI-driven hiring
                platform, advanced workforce solutions, and industry-leading
                training programs, we help businesses find the right people and
                professionals build successful careers across the world
              </p>
              <div className="flex gap-6 items-center self-start mt-16 text-base max-md:mt-10">
                <a
                  href="#search-job"
                  className="self-stretch my-auto text-white capitalize w-[122px]"
                >
                  <div className="flex px-3 py-4 rounded-lg bg-slate-800 justify-center items-center">
                    Search Job
                  </div>
                </a>
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
      <div className="flex flex-wrap justify-between item-start gap-6 md:gap-0   mt-20 min-h-[171px] max-md:mt-5 max-md:max-w-full  py-5  w-full ">
  {stats.map((stat, index) => (
    <StatCard
      key={index}
      number={stat.number}
      title={stat.title}
      description ={
        <div className=" max-w-[250px]">
          {stat.description.toString()}
        </div>
      }
    />
  ))}
</div>
    </section>
  );
};

export default InfoSection;
