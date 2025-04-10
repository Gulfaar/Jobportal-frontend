import { FC } from "react";
import Image from "next/image";

const GulfAdvantage: FC = () => {
  return (
    <section className="bg-white py-12 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Column - Adjusted for better alignment */}
          <div className="md:w-1/2">
            <p className="text-gray-900 leading-relaxed text-base md:text-[20px]">
            This method uniquely combines expert instruction with AI technology for personalized exam preparation{" "}
              <span className="font-semibold"> AI analyzes</span>, your strengths and weaknesses, creating tailored study plans and adaptive practice. With{" "}
              Expert educators provide personalized feedback and clarify complex concepts. Real-time performance analysis allows you to track progress and focus on areas needing improvement. Comprehensive online resources ensure flexible and convenient study.This approach aims to maximize your exam success through individualized,<span className="font-semibold">data-driven learning..</span>
            </p>
          </div>
          
          {/* Image Column - Tightened to text */}
          <div className="md:w-1/2 flex justify-end">
            <div className="w-full max-w-[400px]">
              <Image
                src="/images/study-session.svg" // Replace with your actual image URL
                alt="Person working at a desk with a laptop"
                width={400}
                height={240}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GulfAdvantage;