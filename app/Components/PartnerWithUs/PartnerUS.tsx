'use client'

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const PartnerWithUs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const partners = [
    {
      title: "Manpower & Recruitment Agencies",
      content: "Collaborate with us to access a global talent pool and advanced recruitment solutions.",
    },
    {
      title: "Franchise Owners & Business Investors",
      content: "Own and operate a Gulfaar franchise in your country or region. Access our proven business model, AI-driven recruitment system, and global workforce database. Generate revenue from staffing solutions, training programs, and workforce outsourcing.",
    },
    {
      title: "Technology & Innovation Partners",
      content: "Join forces with us to integrate cutting-edge technology and drive innovation in workforce solutions.",
    },
    {
      title: "Training Institutes & Skill Development Centers",
      content: "Partner with us to offer certified training programs and skill enhancement opportunities.",
    },
    {
      title: "Corporate & Business Partners",
      content: "Work together with Gulfaar to create tailored workforce solutions and business expansion strategies.",
    },
  ];

  return (
    <section className="bg-[#E6A19A] py-24 px-8 flex justify-center w-[80%] mx-auto rounded-lg mt-16">
      <div className="max-w-4xl w-[80%] mx-auto space-y-6">
        {/* Heading */}
        <h2 className="text-center text-xl font-semibold text-[#B0453E] mb-8">Who Can Partner With Us?</h2>

        {/* Accordion */}
        <div className="space-y-4">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 text-left text-[#333] font-medium"
                onClick={() => toggleAccordion(index)}
              >
                {partner.title}
                {openIndex === index ? (
                  <Minus className="text-[#B0453E]" size={24} />
                ) : (
                  <Plus className="text-[#B0453E]" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-[#D67268] text-white p-5 text-md leading-relaxed">{partner.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
