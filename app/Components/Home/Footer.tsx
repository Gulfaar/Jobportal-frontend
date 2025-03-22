import React from "react";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white">
      <div className="container mx-auto px-6 py-8 md:px-16 md:py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Logo & Address Section */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <img
              src="/logo.png"
              alt="Gulfaar"
              className="h-8 mb-4"
            />
            <p className="text-sm">
              Tharakkandam Building, 1st Floor, Kurishupally<br />
              Rd, Ravipuram, Perumanoor, Kochi, Kerala<br />
              682015
            </p>
          </div>

          {/* Center Sections Container */}
          <div className="flex flex-col md:flex-row md:gap-16">
            {/* Company Section */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-base font-medium mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#about-us" className="text-sm hover:text-gray-300">About Us</a></li>
                <li><a href="#contact-us" className="text-sm hover:text-gray-300">Contact Us</a></li>
                <li><a href="#global-presence" className="text-sm hover:text-gray-300">Our Global Presence</a></li>
                <li><a href="#email" className="text-sm hover:text-gray-300">Email</a></li>
                <li><a href="#regulations" className="text-sm hover:text-gray-300">Regulations</a></li>
              </ul>
            </div>

            {/* Job Categories Section */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-base font-medium mb-4">Job Categories</h3>
              <ul className="space-y-3">
                <li><a href="#telecommunications" className="text-sm hover:text-gray-300">Telecommunications</a></li>
                <li><a href="#hotels-tourism" className="text-sm hover:text-gray-300">Hotels & Tourism</a></li>
                <li><a href="#construction" className="text-sm hover:text-gray-300">Construction</a></li>
                <li><a href="#education" className="text-sm hover:text-gray-300">Education</a></li>
                <li><a href="#financial-services" className="text-sm hover:text-gray-300">Financial Services</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:w-1/4">
            <h3 className="text-base font-medium mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Eu nunc pretium vitae platea. Non netus elementum vulputate
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-md bg-transparent border border-white text-white placeholder-white text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Email Address"
              />
              <button className="w-full py-3 bg-white text-teal-900 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Subscribe now
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
