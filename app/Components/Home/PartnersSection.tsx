import React from "react";

const PartnersSection = () => {
  const partnerLogos = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a47ecc747d8e40851927f798d69e99600cbab843",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6b5b5e37ab357cedb2618e034021508ae32d5532",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b91833ba04b052d2a0d97990a2220558d1621e8f",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f78927c49f8bf5a52a9a282bd4f901c5534b941d",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/d45f6617de923dd22c3b6800b600ad5b0b61b8e8",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/683063da7c55f8fc50c8184bb3331297de8d7874",
  ];

  return (
    <section className="flex flex-col items-center w-full py-12 bg-white">
      {/* Title */}
      <h2 className="text-3xl font-bold text-black">Our Partners</h2>

      {/* Subtitle */}
      <p className="mt-2 text-gray-600 text-lg text-center max-w-md">
        We believe in the power of strong partnerships to drive success.
      </p>

      {/* Partner Logos Carousel */}
      <div className="relative flex items-center justify-center w-full mt-6">
        {/* Left Button */}
        

        {/* Logos Row */}
        <div className="flex gap-20 overflow-hidden md:mr-10 items-center justify-center max-w-6xl">
        <span className="flex justify-end items-center w-full text-sm font-semibold text-black ">Trusted by</span>
          
          {partnerLogos.map((logo, index) => (
            
            <div key={index} className="flex justify-center items-center">
              <img src={logo} alt="Partner logo" className="h-18 w-full object-contain" />
            </div>
          ))}
        </div>

        {/* Right Button */}
       
      </div>
    </section>
  );
};

export default PartnersSection;
