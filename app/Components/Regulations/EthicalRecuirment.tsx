import React from 'react';

const  EthicalSection = () => {
  const cards = [
    {
      title: 'Forced Labour & Human Trafficking ',
      
      description: 'Ensuring ethical recruitment and preventing any form of  exploitation. fair wages, ethical hiring, and worker rights.'
    },
    {
      title: 'lllegal Visa Sponsorship',
      
      description: 'Ensuring that all visa processes are legal and fully compliant with  destination country regulations'
    },
    {
      title: 'Excessive Recruitment Fees',
      
      description: 'We do not charge unfair fees to job seekers for placement.'
    },
    {
        title: 'Fraudulent Hiring Practices ',
      
        description: 'Verifying employer authenticity and preventing fake job listings.'
      }
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-24 font-figtree">
      <div className="max-w-7xl mx-auto">
        {/* First Row: Heading + First Card */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">
          {/* Left: Heading */}
          <div className="flex-1  ">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-[36px]">
            Ethical Recruitment & Anti-Exploitation Policies</h1>
          </div>
          
          {/* Right: First Card */}
          <div className="grid-1 max-w-xl">
            <div className="bg-[#2E5F5C] rounded-xl p-8 h-full border-l-4 w-[71%] ml-[165px]">
              <h2 className="text-2xl font-semibold text-white mb-1">
                {cards[0].title}
              </h2>
              
              <p className="text-white text-lg">{cards[0].description}</p>
            </div>
          </div>
        </div>

        {/* Second Row: Remaining Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.slice(1).map((card, index) => (
            <div key={index} className="bg-[#2E5F5C] rounded-xl p-8 border-l-4">
              <h2 className="text-2xl font-semibold text-white mb-1">
                {card.title}
              </h2>
              
              <p className="text-white text-lg">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EthicalSection;