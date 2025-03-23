'use client'

import { useState } from "react";

const PartnershipOpportunities = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview", content: "Become the exclusive Gulfaar partner in your country. Operate recruitment, training, and workforce outsourcing solutions under Gulfaar's brand. Access global resources, business strategies, and AI-driven technology." },
    { id: "feature", label: "Feature", content: "Gulfaar provides AI-driven recruitment tools, seamless workforce solutions, and exclusive training programs to help franchise partners scale their businesses." },
    { id: "benefits", label: "Benefits", content: "Partners enjoy access to a global talent pool, innovative business strategies, and ongoing support from Gulfaar's expert team." },
  ];

  return (
    <section className="py-16 px-6 flex justify-center w-[80%] mx-auto rounded-lg">
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <h2 className="text-center text-lg font-semibold text-[#B0453E] mb-6">Types of Partnership Opportunities</h2>

        {/* Main Card */}
        <div className="rounded-lg overflow-hidden">
          {/* Top Section */}
          <div className="bg-[#94A8A7] p-8">
            <h3 className="text-2xl font-semibold text-white">Country-Based Franchise Partnership</h3>
            <p className="text-gray-200">Become the exclusive Gulfaar partner in your country.</p>
          </div>
          
          {/* Bottom Section */}
          <div className="bg-[#2E5F5C] p-8">
            {/* Tabs */}
            <div className="flex space-x-4 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-6 py-2 rounded-lg text-white font-medium transition ${activeTab === tab.id ? 'bg-black' : 'border border-white'}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-white p-6 rounded-lg">
              <p>{tabs.find((tab) => tab.id === activeTab)?.content}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipOpportunities;
