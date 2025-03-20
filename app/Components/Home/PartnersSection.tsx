import React from "react";

const PartnersSection = () => {
  const partnerLogos = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a47ecc747d8e40851927f798d69e99600cbab843?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
      alt: "Microsoft logo",
      width: "109px",
      aspect: "4.5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6b5b5e37ab357cedb2618e034021508ae32d5532?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
      alt: "Walmart logo",
      width: "98px",
      aspect: "4.08",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b91833ba04b052d2a0d97990a2220558d1621e8f?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
      alt: "Partner logo",
      width: "75px",
      aspect: "3.13",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f78927c49f8bf5a52a9a282bd4f901c5534b941d?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
      alt: "Partner logo",
      width: "72px",
      aspect: "3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d45f6617de923dd22c3b6800b600ad5b0b61b8e8?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
      alt: "Partner logo",
      width: "79px",
      aspect: "3.29",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/683063da7c55f8fc50c8184bb3331297de8d7874?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970",
      alt: "Partner logo",
      width: "94px",
      aspect: "3.92",
    },
  ];

  return (
    <section className="flex flex-col items-center pt-16 pb-7 mt-6 w-full bg-white rounded-2xl shadow-[0px_0px_5px_rgba(0,0,0,0.25)] max-md:max-w-full">
      <h2 className="max-w-full text-5xl font-bold text-center text-black w-[285px] max-md:text-4xl">
        Our <span className="font-semibold text-5xl">Partners</span>
      </h2>
      <p className="mt-6 text-2xl leading-none text-black text-ellipsis max-md:max-w-full">
        We believe in the power of strong partnerships to drive success and
        create long-lasting value. Our partners play a crucial role in helping
        us deliver exceptional solutions, innovate continuously, and reach new
        heights in our industry.
      </p>
      <div className="flex overflow-hidden flex-wrap gap-10 justify-center self-stretch px-10 py-6 mt-14 rounded-md bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="grow text-base font-medium text-black">Trusted by</div>

        {partnerLogos.map((logo, index) => (
          <div key={index} className="overflow-hidden min-h-6">
            <div
              className={`flex overflow-hidden flex-col justify-center items-center min-h-6 w-[${logo.width}]`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`object-contain w-full aspect-[${logo.aspect}]`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
