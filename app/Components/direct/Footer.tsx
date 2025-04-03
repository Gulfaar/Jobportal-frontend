import React from "react";
import FooterColumn from "./FooterColumn";
import NewsletterForm from "./NewsletterForm";

const Footer: React.FC = () => {
  const companyLinks = [
    { text: "About Us", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "Our Global Presence", href: "#" },
    { text: "Email", href: "#" },
    { text: "Regulations", href: "#" },
  ];

  const jobCategoryLinks = [
    { text: "Telecommunications", href: "#" },
    { text: "Hotels & Tourism", href: "#" },
    { text: "Construction", href: "#" },
    { text: "Education", href: "#" },
    { text: "Financial Services", href: "#" },
  ];

  return (
    <footer className="px-16 py-16 bg-teal-800 max-md:px-10 max-sm:px-5">
      <div className="grid grid-cols-4 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e83313661cc12e02dd26281ad671288af34a560c"
            alt="Gulfaar Logo"
            className="w-[177px] h-[83px] mb-[20px]"
          />
          <address className="text-lg font-semibold text-white text-opacity-80 not-italic">
            Tharakkandam Building, 1st Floor, Kurishupally Rd, Ravipuram,
            Perumanoor, Kochi, Kerala 682015
          </address>
        </div>

        <FooterColumn title="Company" links={companyLinks} />

        <FooterColumn title="Job Categories" links={jobCategoryLinks} />

        <NewsletterForm />
      </div>
    </footer>
  );
};

export default Footer;
