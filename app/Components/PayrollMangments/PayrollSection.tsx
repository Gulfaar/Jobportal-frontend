import { FC } from "react";
import Image from "next/image";

const PayrollSection: FC = () => {
  return (
    <section className="bg-white py-12 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text Column - Adjusted for better alignment */}
          <div className="md:w-1/2">
            <p className="text-gray-900 leading-relaxed text-base md:text-[15px]">
              Managing payroll for contract employees can be complex, time-consuming, and full of compliance challenges. At{" "}
              <span className="font-semibold">Gulfaar</span>, we simplify the process by handling payroll, tax compliance, benefits administration, and employee management—allowing you to focus on growing your business while we take care of your workforce. With{" "}
              <span className="font-semibold">AI-powered</span> automation and real-time payment tracking, we ensure that salaries, deductions, and benefits are processed seamlessly, on time, every time. Plus, our modern digital tools make it easier than ever to track payments, manage employee records, and communicate effortlessly.
            </p>
          </div>
          
          {/* Image Column - Tightened to text */}
          <div className="md:w-1/2 flex justify-end">
            <div className="w-full max-w-[400px]">
              <Image
                src="/images/PayrollSection.svg" // Replace with your actual image URL
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

export default PayrollSection;