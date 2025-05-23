"use client"
import React, { useState } from "react";
import { toast } from "react-toastify";

const Footer = () => {

  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.error("Please fill in your email address");
      return;
    }
    toast.success("Subscribed");
    // You can also send the email to a backend here if needed
    setEmail(""); // reset input after subscribing
  };

  return (
    <footer className="bg-teal-900 w-full text-white">
      <div className="container  px-10 py-8  md:py-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
          {/* Logo & Address Section */}
          <div className=" mt-[-1px]   md:mb-0 md:w-1/6">
          <div className="flex w-full mb-5 md:mb-0 ml-[-10px] md:ml-[10px]  ">
            <img
              src="/footerlogo.png"
              alt="Gulfaar"
              className="flex h-10"
            />
            </div>
           <ul className="space-y-1 md:px-4 md:py-4">
                <li><a href="/AboutUs" className="text-sm hover:text-gray-300">About Us</a></li>
                <li><a href="/ContactUs" className="text-sm hover:text-gray-300">Contact Us</a></li>
                <li><a href="/global" className="text-sm hover:text-gray-300">Our Global presence</a></li>
                <li><a href="/Partner" className="text-sm hover:text-gray-300">Partner with us</a></li>
              </ul>
          </div>

          {/* Center Sections Container */}
          <div className="flex flex-col  md:flex-row gap-5 md:gap-15">
            {/* Company Section */}

            <div className="mb-5 md:mb-0">
              <h3 className="text-base font-bold md:mb-3">Jobs abroad</h3>
              <ul className="space-y-1">
                <li><a href="#about-us" className="text-sm inline-flex whitespace-nowrap hover:text-gray-300">Jobs by country</a></li>
                <li><a href="#contact-us" className="text-sm inline-flex whitespace-nowrap hover:text-gray-300">Jobs by category</a></li>
                <li><a href="#global-presence" className="text-sm inline-flex whitespace-nowrap hover:text-gray-300">Jobs by company</a></li>
                <li><a href="#email" className="text-sm hover:text-gray-300">Jobs archive</a></li>
              </ul>
            </div>


            <div className="mb-5  md:mb-0">
              <h3 className="text-base font-bold inline-flex whitespace-nowrap mb-2">Recruitment Solutions</h3>
              <ul className="space-y-1 ">
                <li><a href="#about-us" className="text-sm hover:text-gray-300">Tailored Candidates</a></li>
                <li><a href="#contact-us" className="text-sm  hover:text-gray-300  ">Direct Placement
                </a></li>
                <h3 className="text-base font-bold inline-flex whitespace-nowrap md:mt-2">Contract Staffing</h3>
              <ul className="space-y-1">
                <li><a href="#hotels-tourism" className="text-sm hover:text-gray-300">Payroll Management</a></li>
                <li><a href="#construction" className="text-sm hover:text-gray-300">Flexible Hiring</a></li>
              </ul>
                
              </ul>
            </div>

            {/* Job Categories Section */}
            <div className="mb-5 md:mb-0 ">


            <h3 className="text-base font-bold mb-2">Outsourcing</h3>
              <ul className="space-y-1 mb-2">
                <li><a href="#telecommunications" className="text-sm hover:text-gray-300">On-Demand Professionals</a></li>
                <li><a href="#hotels-tourism" className="text-sm hover:text-gray-300">Task-Specific Experts</a></li>

              </ul>
              
              <h3 className="text-base font-bold mt-10 md:mt-5 mb-1">Information</h3>
              <ul className="space-y-1">
                
                <li><a href="/Regulations" className="text-sm hover:text-gray-300">Regulations</a></li>
                <li><a href="/privacypolicy" className="text-sm hover:text-gray-300">Privacy policy</a></li>
                <li><a href="/Cookie" className="text-sm hover:text-gray-300">Cookie Policy</a></li>
              </ul>
            </div>
            <div className="md:w-1/2">
            <h3 className="text-base font-bold mb-2">Newsletter</h3>
            <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest job updates, career tips, and hiring trends
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
        onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-transparent border border-white text-white placeholder-white text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Email Address"
              />
              <button onClick={handleSubscribe} className="w-full py-3 bg-white text-teal-700 hover:text-teal-900 cursor-pointer rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Subscribe now
              </button>
            </div>
          </div>
          </div>

          {/* Newsletter Section */}
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
