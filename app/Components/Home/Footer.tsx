import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-5 justify-between items-start px-10 py-16 bg-teal-800 max-md:px-5 max-md:max-w-full">
      <div className="text-lg font-semibold leading-8 text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b657254a20ca5373606a8f0ed2b8b23271324290?placeholderIfAbsent=true&apiKey=928cdaf2e24e4e0f8ced4d57597d6970"
          alt="Gulfaar logo"
          className="object-contain max-w-full aspect-[2.13] w-[177px]"
        />
        <address className="mt-2 not-italic">
          Tharakkandam Building, 1st Floor, Kurishupally Rd, Ravipuram,
          Perumanoor, Kochi, Kerala 682015
        </address>
      </div>

      <nav className="flex flex-col">
        <h3 className="self-start text-xl font-semibold text-white">Company</h3>
        <ul className="mt-6 text-base leading-loose text-white">
          <li>
            <a href="#about-us" className="text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#contact-us" className="mt-4 text-ellipsis">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#global-presence" className="mt-4 text-ellipsis">
              Our Global Presence
            </a>
          </li>
          <li>
            <a href="#email" className="mt-4 text-ellipsis">
              Email
            </a>
          </li>
          <li>
            <a href="#regulations" className="mt-4 text-ellipsis">
              Regulations
            </a>
          </li>
        </ul>
      </nav>

      <nav className="text-white">
        <h3 className="text-xl font-semibold max-md:mr-2.5">Job Categories</h3>
        <ul className="mt-6 text-base">
          <li>
            <a href="#telecommunications">Telecomunications</a>
          </li>
          <li>
            <a href="#hotels-tourism" className="mt-4">
              Hotels & Tourism
            </a>
          </li>
          <li>
            <a href="#construction" className="mt-4">
              Construction
            </a>
          </li>
          <li>
            <a href="#education" className="mt-4">
              Education
            </a>
          </li>
          <li>
            <a href="#financial-services" className="mt-4">
              Financial Services
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-col self-stretch text-sm font-semibold text-white">
        <h3 className="self-start text-xl">Newsletter</h3>
        <p className="self-start mt-4 leading-4">
          Eu nunc pretium vitae platea. Non netus elementum vulputate
        </p>
        <input
          type="email"
          placeholder="Email Address"
          className="overflow-hidden px-5 py-5 mt-8 leading-none rounded-xl border border-white border-solid max-md:px-5"
          aria-label="Email Address"
        />
        <button className="overflow-hidden gap-2.5 self-stretch px-10 py-5 mt-5 text-base text-teal-800 bg-white rounded-xl min-h-[50px] max-md:px-5">
          Subscribe now
        </button>
      </div>
    </footer>
  );
};

export default Footer;
