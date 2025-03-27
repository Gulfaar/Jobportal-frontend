import React from "react";

const PartnersSection = () => {
  const partnerLogos = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a47ecc747d8e40851927f798d69e99600cbab843", // Microsoft
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6b5b5e37ab357cedb2618e034021508ae32d5532", // Walmart
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b91833ba04b052d2a0d97990a2220558d1621e8f", // Accenture
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f78927c49f8bf5a52a9a282bd4f901c5534b941d", // Samsung
    "https://cdn.builder.io/api/v1/image/assets/TEMP/d45f6617de923dd22c3b6800b600ad5b0b61b8e8", // Amazon
    "https://cdn.builder.io/api/v1/image/assets/TEMP/683063da7c55f8fc50c8184bb3331297de8d7874", 
    "https://cdn.builder.io/api/v1/image/assets/TEMP/d45f6617de923dd22c3b6800b600ad5b0b61b8e8", // Amazon
    "https://cdn.builder.io/api/v1/image/assets/TEMP/683063da7c55f8fc50c8184bb3331297de8d7874",// Adobe
  ]

  return (
    <section className="flex flex-col items-center px-5  w-full py-12 ">
      {/* Title */}
      <h2 className="text-3xl font-bold text-black group-hover:text-white transition-colors duration-300">
        Our Partners
      </h2>

      {/* Subtitle */}
      <p className="mt-2 text-gray-600 text-lg text-center max-w-md group-hover:text-white transition-colors duration-300">
        We believe in the power of strong partnerships to drive success.
      </p>

      {/* Scrolling Partner Logos */}
      <div className="w-full overflow-hidden mt-6">
        <div className="flex gap-10 items-center whitespace-nowrap animate-marquee">
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div key={index} className="flex ga justify-center items-center min-w-[100px]">
              <img src={logo} alt="Partner logo" className="h-16  object-contain" />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tailwind CSS Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default PartnersSection;
