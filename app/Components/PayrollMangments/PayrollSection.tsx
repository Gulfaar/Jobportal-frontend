import { FC } from "react";
import Image from "next/image";

const PayrollSection: FC = () => {
  return (
    <section className="bg-white py-12 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Text Column */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-teal-800 font-bold text-xl md:text-3xl leading-tight">
              Unlock Your Career Potential with{" "}
              <span className="text-gray-900">Gulfaar's Skill Development Programs</span>
            </h2>
            <p className="text-teal-600 text-sm md:text-lg font-medium mt-2">
              Transform Your Career with Industry-Leading Skill Development
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base mt-4">
              At Gulfaar, we believe that skills are the foundation of success.
              Whether you’re a fresh graduate, a professional looking to upskill,
              or someone seeking to switch careers, our Skill Development Programs 
              are designed to equip you with industry-relevant expertise using the 
              latest AI-powered learning techniques.
            </p>
            {/* CTA Button */}
            {/* <button className="mt-6 px-6 py-3 bg-teal-700 text-white rounded-full shadow-md text-sm md:text-base font-semibold hover:bg-teal-800 transition">
              Get Started →
            </button> */}
          </div>

          {/* Image Column - Height Adjusted */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-[400px] h-full">
              <Image
                src="/images/PayrollSection.svg" // Update with actual image
                alt="Person working at a desk"
                width={400}
                height={300} // Increased height
                className="rounded-2xl object-cover w-full aspect-[4/5] h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayrollSection;
