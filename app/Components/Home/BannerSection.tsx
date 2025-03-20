import React from "react";

const BannerSection = () => {
  return (
    <section className="overflow-hidden self-center pl-16 ml-6 max-w-full bg-black rounded-3xl w-[1296px] max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[43%] max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col self-stretch my-auto mr-0 max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <h2 className="text-5xl font-bold text-white max-md:max-w-full max-md:text-4xl">
                Create A Better <br />
                Future For Yourself
              </h2>
              <p className="mt-10 text-base text-white max-md:max-w-full">
                At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.{" "}
                <br />
                Blandit a massa elementum id scelerisque rhoncus
                <br />. Lectus dolor blandit massa pretium id ultrices phasellus
                tortor. Risus risus lectus augue justo lacus viverra sit.
                Ultricies purus dolor viverra mi laoreet at cursus justo.
                Ultrices purus diam egestas amet faucibus tempor blandit. Elit
                velit mauris aliquam est diam. Leo sagittis consectetur diam
                morbi erat aenean. Vulputate praesent congue faucibus in euismod
                feugiat euismod volutpat. Adipiscing risus amet phasellus
                imperdiet eget vel pulvinar. Risus in felis faucibus sit.
                Scelerisque consequat iaculis mauris amet vel felis id tincidunt
                nunc.
              </p>
            </div>
            <a
              href="#search-job"
              className="self-start px-5 py-4 mt-5 text-base font-semibold text-white capitalize rounded-lg bg-slate-800"
            >
              Search Job
            </a>
          </div>
        </div>
        <div className="ml-5 w-[57%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a580e1e64e1a44571655e835ff0ea59ed17df212?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
            alt="Person working on laptop"
            className="object-contain grow w-full aspect-[1.92] max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
