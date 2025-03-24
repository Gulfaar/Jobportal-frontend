import React from "react";

const OperatingRegions = () => {
  return (
    <section className="flex flex-col items-center px-10 w-full max-w-[1307px]">
      <h2 className="mt-11 text-2xl font-semibold tracking-tight leading-none text-black max-md:mt-10">
        Where We Operate
      </h2>

      <div className="mt-12 w-full max-w-[1000px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-3/12 max-md:ml-0 max-md:w-full flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/818520f53de898a0a47ef936931c4c9468f0997b?placeholderIfAbsent=true"
              alt="Operating region flag 1"
              className="object-contain shrink-0 max-w-full aspect-square w-[100px] max-md:mt-10"
            />
          </div>
          <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/3b9a5435eccfe439c9d8c52d0cc0c2bb60f3a0b3?placeholderIfAbsent=true"
              alt="Operating region flag 2"
              className="object-contain shrink-0 max-w-full aspect-square w-[100px] max-md:mt-10"
            />
          </div>
          <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/f4fbe6ef04d26929ad7b90c8979fb8482282e458?placeholderIfAbsent=true"
              alt="Operating region flag 3"
              className="object-contain shrink-0 max-w-full aspect-square w-[100px] max-md:mt-10"
            />
          </div>
          <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/f9aa8ac03a91ccb1455af6dc9176f2f46edf8c87?placeholderIfAbsent=true"
              alt="Operating region flag 4"
              className="object-contain shrink-0 max-w-full aspect-square w-[100px] max-md:mt-10"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 ml-4 w-full max-w-[1330px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[46%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:mr-0 max-md:max-w-full">
              <h3 className="self-center text-2xl font-semibold tracking-tight leading-none text-teal-800">
                Expanding to More Regions!
              </h3>
              <p className="mt-8 text-xl tracking-tight leading-8 text-black max-md:max-w-full">
                We are constantly growing, adding new markets and creating
                stronger global connections to meet the ever-changing needs of
                businesses and job seekers.
              </p>
            </div>
          </div>
          <div className="ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/5269587029bc627a5ebf875503c016acc0ce1651?placeholderIfAbsent=true"
              alt="World map showing expansion regions"
              className="object-contain grow w-full aspect-[2.03] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingRegions;
