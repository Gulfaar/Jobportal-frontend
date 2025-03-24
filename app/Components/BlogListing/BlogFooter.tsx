"use client";
import React from "react";

const BlogFooter: React.FC = () => {
  return (
    <footer
      className="px-10 py-16 bg-[center] bg-teal-800"
      style={{ backgroundImage: "url('/images/footer-bg.jpg')" }}
    >
      <div className="flex gap-10 max-md:flex-col">
        <div className="max-w-[377px]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/04f60f79a60f814fa2d52b1aae390396f59b540d"
            alt="Logo"
            className="w-[177px] h-[83px] mb-[20px]"
          />
          <address className="text-lg font-semibold leading-8 text-white text-opacity-80 not-italic">
            Tharakkandam Building, 1st Floor, Kurishupally Rd, Ravipuram,
            Perumanoor, Kochi, Kerala 682015
          </address>
        </div>

        <div className="grid flex-1 grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
          <nav aria-labelledby="company-nav">
            <h2
              id="company-nav"
              className="mb-5 text-xl font-semibold text-white"
            >
              Company
            </h2>
            <ul className="flex flex-col gap-4 text-base text-white">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Our Global Presence
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Regulations
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="categories-nav">
            <h2
              id="categories-nav"
              className="mb-5 text-xl font-semibold text-white"
            >
              Job Categories
            </h2>
            <ul className="flex flex-col gap-4 text-base text-white">
              <li>
                <a href="#" className="hover:underline">
                  Telecommunications
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Hotels &amp; Tourism
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Construction
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Financial Services
                </a>
              </li>
            </ul>
          </nav>

          <section aria-labelledby="newsletter-title">
            <h2
              id="newsletter-title"
              className="mb-5 text-xl font-semibold text-white"
            >
              Newsletter
            </h2>
            <p className="mb-5 text-sm text-white">
              Eu nunc pretium vitae platea. Non netus elementum vulputate
            </p>
            <form>
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address for newsletter"
                className="px-5 mb-5 w-full text-sm text-white bg-transparent rounded-xl border border-white h-[50px]"
                required
              />
              <button
                type="submit"
                className="w-full text-base font-semibold text-teal-800 bg-white rounded-xl h-[50px]"
              >
                Subscribe now
              </button>
            </form>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default BlogFooter;
