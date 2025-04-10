import React from "react";
import Bannerimage from '../../../public/gulfaar-create-better.png'
import Image from "next/image";

const BannerSection = () => {
  return (
    <section className="overflow-hidden px-6 py-6 self-center max-w-6xl mx-auto bg-black rounded-2xl">
      <div className="flex items-center max-md:flex-col">
        <div className="w-[45%] max-md:w-full">
          <div className="flex flex-col my-auto">
            <h2 className="text-3xl font-bold text-white max-md:text-2xl">
              Create A Better <br />
              Future For Yourself
            </h2>
            <p className="mt-4 text-sm text-white">
            Empower your career journey with opportunities that align with your dreams.
            We connect ambition with purpose, your next chapter starts here.
            </p>
            <a
              href="#search-job"
              className=" px-4 py-2 w-fit mt-4 text-sm font-semibold text-white rounded-lg bg-slate-800"
            >
              Search Job
            </a>
          </div>
        </div>
        <div className="w-[55%] max-md:w-full">
          <Image
            src={Bannerimage}
            alt="Blurred professionals"
            className="object-cover rounded-2xl w-full"
            layout="responsive"
            width={1920}  // Set your actual image width
            height={1080} // Set your actual image height
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
