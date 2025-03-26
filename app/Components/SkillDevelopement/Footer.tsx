import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap gap-5 justify-between items-start px-10 py-16 w-full bg-teal-800 max-md:px-5 max-md:max-w-full">
      <div className="text-lg font-semibold leading-8 text-white">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/928cdaf2e24e4e0f8ced4d57597d6970/5d9354f0d99afc23a613bb066fe56243fc017d81?placeholderIfAbsent=true"
          className="object-contain max-w-full aspect-[2.13] w-[177px]"
          alt="Gulfaar logo"
        />
        <address className="mt-2 not-italic">
          Tharakkandam Building, 1st Floor, Kurishupally Rd, Ravipuram,
          Perumanoor, Kochi, Kerala 682015
        </address>
      </div>

      <nav className="flex flex-col">
        <h3 className="self-start text-xl font-semibold text-white">Company</h3>
        <ul className="mt-6 text-base leading-loose text-white">
          <li className="text-white">
            <a href="#about">About Us</a>
          </li>
          <li className="mt-4 text-ellipsis">
            <a href="#contact">Contact Us</a>
          </li>
          <li className="mt-4 text-ellipsis">
            <a href="#global">Our Global Presence</a>
          </li>
          <li className="mt-4 text-ellipsis">
            <a href="#email">Email</a>
          </li>
          <li className="mt-4 text-ellipsis">
            <a href="#regulations">Regulations</a>
          </li>
        </ul>
      </nav>

      <nav className="text-white">
        <h3 className="text-xl font-semibold max-md:mr-2.5">Job Categories</h3>
        <ul className="mt-6 text-base">
          <li>
            <a href="#telecom">Telecomunications</a>
          </li>
          <li className="mt-4">
            <a href="#tourism">Hotels & Tourism</a>
          </li>
          <li className="mt-4">
            <a href="#construction">Construction</a>
          </li>
          <li className="mt-4">
            <a href="#education">Education</a>
          </li>
          <li className="mt-4">
            <a href="#finance">Financial Services</a>
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
          aria-label="Email Address"
          className="overflow-hidden px-5 py-5 mt-8 leading-none rounded-xl border border-white border-solid max-md:px-5"
        />
        <button
          className="overflow-hidden gap-2.5 self-stretch px-10 py-5 mt-5 text-base text-teal-800 bg-white rounded-xl min-h-[50px] max-md:px-5"
          aria-label="Subscribe now"
        >
          Subscribe now
        </button>
      </div>
    </footer>
  );
};

export default Footer;
