import React from "react";
import Bannerimage from '../../../public/gulfaar-create-better.png'
import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
  return (
    <section className="overflow-hidden    self-center max-w-6xl mx-auto bg-[#2E5F5C] rounded-2xl">
      <div className="flex justify-between max-md:flex-col">
        <div className="w-[45%] flex justify-center px-10 py-5 max-md:w-full">
          <div className="flex flex-col my-auto">
            <h2 className="text-3xl font-bold text-white max-md:text-2xl">
              Create A Better <br />
              Future For Yourself
            </h2>
            <p className="mt-4 text-sm text-white">
            Empower your career journey with opportunities that align with your dreams.
            We connect ambition with purpose, your next chapter starts here.
            </p>
           <Link href
            ="/jobseeker/joblisting"
              className=" px-4 py-2 w-fit mt-4 text-sm font-semibold text-white rounded-lg bg-slate-800"
            >
              Search Job
            </Link>
          </div>
        </div>
        <div className="w-[55%] flex justify-end  md:bg-amber-300 max-md:w-full">
          <Image
            src={Bannerimage}
            alt="Blurred professionals"
            className=" object-bottom  rounded-2xl w-full"
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
